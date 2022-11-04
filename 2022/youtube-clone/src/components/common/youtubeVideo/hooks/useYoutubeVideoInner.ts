import { YoutubeVideoVerticalProps } from '@components/common/youtubeVideo';

export interface IUseYoutubeVideoInnerParams extends YoutubeVideoVerticalProps {}

export interface IUseYoutubeVideoInner {
  href: string;
}

export function useYoutubeVideoInner(params: IUseYoutubeVideoInnerParams): IUseYoutubeVideoInner {
  const {
    video: { id },
  } = params;

  const href = `https://youtube.com/watch?v=${id}`;

  return {
    href,
  };
}
