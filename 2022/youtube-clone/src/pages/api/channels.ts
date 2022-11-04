import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export interface ChannelsReq {
  ids: string | string[];
}

export interface ChannelsRes {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ChannelsRes>) {
  const { ids = [] } = req.query;

  const { data } = await axios.get<ChannelsRes>('https://www.googleapis.com/youtube/v3/channels', {
    params: {
      part: 'id, snippet',
      id: typeof ids === 'string' ? ids : ids.join(''),
      key: process.env.YOUTUBE_API_KEY,
    },
  });

  res.status(200).json(data);
}
