import { useQueryVideos } from '@hooks/queries/useQueryVideos';

export interface IUseHomePageParams {}

export interface IUseHomePage {}

export function useHomePage(params: IUseHomePageParams): IUseHomePage {
  const {} = params;

  const {
    data: { items, nextPageToken, pageInfo } = {
      items: [],
      nextPageToken: '',
      pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
      },
    },
  } = useQueryVideos({
    params: {
      maxResults: 10,
    },
  });

  return {};
}
