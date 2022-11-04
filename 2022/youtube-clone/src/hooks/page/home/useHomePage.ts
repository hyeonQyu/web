import { useQueryVideos } from '@hooks/queries/useQueryVideos';
import useScroll from '@hooks/common/useScroll';
import { useEffect, useState } from 'react';
import { ChannelSnippetById, YoutubeVideo } from '@defines/youtube';
import { useQueryChannels } from '@hooks/queries/useQueryChannels';
import axios from 'axios';
import { ChannelsRes } from '@pages/api/channels';

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

  useEffect(() => {
    const channelIds = Array.from(new Set(videos.map(({ snippet: { channelId } }) => channelId)));

    (async () => {
      const {
        data: { items: channels = [] },
      } = await axios.get<ChannelsRes>('/api/channels', {
        params: {
          id: channelIds.join(),
        },
      });

      if (channels.length === 0) {
        return;
      }

      const channelSnippetById: ChannelSnippetById = channels.reduce((acc, { id, snippet }) => {
        return {
          ...acc,
          [id]: snippet,
        };
      }, {});

      const youtubeVideos: YoutubeVideo[] = videos.map((video) => ({
        ...video,
        channelThumbnail: channelSnippetById[video.snippet.channelId].thumbnails.default,
      }));
      setAccVideos(youtubeVideos);
    })();
  }, [videos]);

  return {
    isChipBarFilterVisible,
    videos: accVideos,
  };
}
