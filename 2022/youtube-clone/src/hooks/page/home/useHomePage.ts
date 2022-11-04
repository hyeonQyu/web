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

let scrollY = Number.MAX_VALUE;

export function useHomePage(params: IUseHomePageParams): IUseHomePage {
  const {} = params;
  const [isChipBarFilterVisible, setIsChipBarFilterVisible] = useState(true);
  const [accVideos, setAccVideos] = useState<YoutubeVideo[]>([]);
  const [channelIds, setChannelIds] = useState<string[]>([]);
  const [videoPageToken, setVideoPageToken] = useState<string>();

  /**
   * 스크롤을 가장 아래까지 내렸을 때 다음 페이지 비디오 불러오기
   */
  const fetchNextPageVideosWhenScrolledToBottom = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const isScrolledToBottom = scrollTop >= scrollHeight - clientHeight;

    if (isScrolledToBottom) {
      setVideoPageToken(nextPageToken);
    }
  };

  /**
   * 스크롤에 따라 상단 ChipBarFilter 노출 여부 변경
   */
  const handleChangeChipBarFilterVisible = () => {
    const scrollUp = (windowScrollY: number) => {
      setIsChipBarFilterVisible(true);
      scrollY = windowScrollY;
    };
    const scrollDown = (windowScrollY: number) => {
      setIsChipBarFilterVisible(false);
      scrollY = windowScrollY;
    };

    const windowScrollY = window.scrollY;
    if (scrollY < windowScrollY) {
      scrollDown(windowScrollY);
    } else if (scrollY > windowScrollY) {
      scrollUp(windowScrollY);
    }
  };

  useScroll({
    onScroll: () => {
      fetchNextPageVideosWhenScrolledToBottom();
      handleChangeChipBarFilterVisible();
    },
  });

  const {
    data: { items: videos, nextPageToken } = {
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
      pageToken: videoPageToken,
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

  // 조회된 유튜브 비디오로부터 채널 아이디 목록 추출 및 다음 페이지 토큰 저장
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

    setAccVideos((accVideos) => [
      ...accVideos,
      ...videos.map((video) => ({
        ...video,
        channelThumbnail: channelSnippetById[video.snippet.channelId].thumbnails.default,
      })),
    ]);
  }, [channels]);

  return {
    isChipBarFilterVisible,
    videos: accVideos,
  };
}
