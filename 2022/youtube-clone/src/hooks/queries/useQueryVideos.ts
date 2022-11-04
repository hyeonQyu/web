import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { VideosReq, VideosRes } from '@pages/api/videos';

export interface IUseQueryVideosParams {
  params: VideosReq;
}

export function useQueryVideos(params: IUseQueryVideosParams): UseQueryResult<VideosRes, AxiosError> {
  const { params: queryParams } = params;
  const { pageToken, maxResults } = queryParams;
  const url = 'api/videos';

  const getVideos = async () => {
    return (
      await axios.get(url, {
        params: queryParams,
      })
    ).data;
  };

  return useQuery({
    queryKey: [url, pageToken, maxResults],
    queryFn: getVideos,
    refetchOnWindowFocus: false,
  });
}
