import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ChannelsReq, ChannelsRes } from '@pages/api/channels';
import axios, { AxiosError } from 'axios';

export interface IUseQueryChannelsParams {
  params: ChannelsReq;
}

export function useQueryChannels(params: IUseQueryChannelsParams): UseQueryResult<ChannelsRes, AxiosError> {
  const { params: queryParams } = params;
  const { ids } = queryParams;
  const url = 'api/channels';

  const getChannels = async () => {
    return (
      await axios.get(url, {
        params: {
          id: ids.join(),
        },
      })
    ).data;
  };

  return useQuery({
    queryKey: [url, ...ids],
    queryFn: getChannels,
    refetchOnWindowFocus: false,
  });
}
