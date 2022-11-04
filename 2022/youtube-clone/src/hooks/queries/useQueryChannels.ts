import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { ChannelsReq, ChannelsRes } from '@pages/api/channels';
import axios, { AxiosError } from 'axios';

export interface IUseQueryChannelsParams {
  params: ChannelsReq;
  queryOption?: UseQueryOptions<ChannelsRes, AxiosError>;
}

export function useQueryChannels(params: IUseQueryChannelsParams): UseQueryResult<ChannelsRes, AxiosError> {
  const { params: queryParams, queryOption = {} } = params;
  const { ids } = queryParams;
  const url = 'api/channels';

  const getChannels = async (): Promise<ChannelsRes> => {
    if (ids.length === 0) {
      return new Promise((resolve) => {
        resolve({
          items: [],
          pageInfo: { resultsPerPage: 0, totalResults: 0 },
          etag: '',
          kind: '',
        });
      });
    }

    return (
      await axios.get<ChannelsRes>(url, {
        params: {
          id: ids.join(),
        },
      })
    ).data;
  };

  return useQuery<ChannelsRes, AxiosError>({
    ...queryOption,
    queryKey: [url, ...ids],
    queryFn: getChannels,
    refetchOnWindowFocus: false,
  });
}
