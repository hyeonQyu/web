import type { NextApiRequest, NextApiResponse } from 'next';
import { PageInfo, YoutubeVideo } from '@defines/youtube';
import axios from 'axios';

export interface VideosReq {
  pageToken?: string;
  maxResults: number;
}

export interface VideosRes {
  etag: string;
  items: YoutubeVideo[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<VideosRes>) {
  const { data } = await axios.get<VideosRes>('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      ...req.query,
      part: 'snippet',
      chart: 'mostPopular',
      key: process.env.YOUTUBE_API_KEY,
    },
  });
  res.status(200).json(data);
}
