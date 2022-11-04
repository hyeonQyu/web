import { useQueryVideos } from '@hooks/queries/useQueryVideos';
import useScroll from '@hooks/common/useScroll';
import { useState } from 'react';
import { YoutubeVideo } from '@defines/youtube';

export interface IUseHomePageParams {}

export interface IUseHomePage {
  isChipBarFilterVisible: boolean;
  videos: YoutubeVideo[];
}

export function useHomePage(params: IUseHomePageParams): IUseHomePage {
  const {} = params;
  const [isChipBarFilterVisible, setIsChipBarFilterVisible] = useState(true);

  useScroll({
    onScrollDown: () => setIsChipBarFilterVisible(false),
    onScrollUp: () => setIsChipBarFilterVisible(true),
  });

  const {
    data: { items: videos, nextPageToken, pageInfo } = {
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

  return {
    isChipBarFilterVisible,
    videos,
  };
}
