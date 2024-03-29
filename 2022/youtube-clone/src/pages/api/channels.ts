import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Channel, PageInfo } from '@defines/youtube';

export interface ChannelsReq {
  ids: string[];
}

export interface ChannelsRes {
  items: Channel[];
  etag: string;
  kind: string;
  pageInfo: PageInfo;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ChannelsRes>) {
  const { id } = req.query;

  const { data } = await axios.get<ChannelsRes>('https://www.googleapis.com/youtube/v3/channels', {
    params: {
      part: 'id, snippet',
      id,
      key: process.env.YOUTUBE_API_KEY,
    },
  });

  res.status(200).json(data);
}
