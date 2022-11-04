import { useQueryVideos } from '@hooks/queries/useQueryVideos';
import useScroll from '@hooks/common/useScroll';
import { useEffect, useState } from 'react';
import { ChannelSnippetById, YoutubeVideo } from '@defines/youtube';
import { useQueryChannels } from '@hooks/queries/useQueryChannels';

export interface IUseHomePageParams {}

export interface IUseHomePage {
  /**
   * chip bar filter 노출 여부
   */
  isChipBarFilterVisible: boolean;

  /**
   * 유튜브 비디오 목록
   */
  videos: YoutubeVideo[];
}

export function useHomePage(params: IUseHomePageParams): IUseHomePage {
  const {} = params;
  const [isChipBarFilterVisible, setIsChipBarFilterVisible] = useState(true);
  const [accVideos, setAccVideos] = useState<YoutubeVideo[]>([]);
  const [channelIds, setChannelIds] = useState<string[]>([]);
  const [pageToken, setPageToken] = useState<string>();

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
      pageToken,
    },
  });

  const {
    data: { items: channels = [] } = {
      item: [],
    },
    refetch: refetchChannels,
  } = useQueryChannels({
    params: {
      ids: channelIds,
    },
    queryOption: {
      enabled: false,
    },
  });

  // 조회된 유튜브 비디오로부터 채널 아이디 목록 추출
  useEffect(() => {
    setChannelIds(Array.from(new Set(videos.map(({ snippet: { channelId } }) => channelId))));
  }, [videos]);

  // 채널 목록 불러오기
  useEffect(() => {
    (async () => {
      await refetchChannels();
    })();
  }, [channelIds]);

  // 비디오 목록에 채널 썸네일 정보 추가
  useEffect(() => {
    if (channels.length === 0) {
      return;
    }

    const channelSnippetById: ChannelSnippetById = channels.reduce((acc, { id, snippet }) => {
      return {
        ...acc,
        [id]: snippet,
      };
    }, {});

    setAccVideos(
      videos.map((video) => ({
        ...video,
        channelThumbnail: channelSnippetById[video.snippet.channelId].thumbnails.default,
      })),
    );
  }, [channels]);

  return {
    isChipBarFilterVisible,
    videos: accVideos,
  };
}
