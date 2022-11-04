import { YoutubeVideoVerticalProps } from '@components/common/youtubeVideo';

export interface IUseYoutubeVideoInnerParams extends YoutubeVideoVerticalProps {}

export interface IUseYoutubeVideoInner {
  href: string;
  timeDifferenceText: string;
}

const msPerSecond = 1000;
const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDate = 24;
const datesPerMonth = 30;
const monthsPerYear = 12;

export function useYoutubeVideoInner(params: IUseYoutubeVideoInnerParams): IUseYoutubeVideoInner {
  const {
    video: {
      id,
      snippet: { publishedAt },
    },
  } = params;

  const href = `https://youtube.com/watch?v=${id}`;

  const timeDifferenceText = (() => {
    const today = new Date();
    const publishedDate = new Date(publishedAt);

    const timeDifference = Math.floor((today.getTime() - publishedDate.getTime()) / (msPerSecond * secondsPerMinute * minutesPerHour));
    if (timeDifference < hoursPerDate) {
      return `${timeDifference}시간 전`;
    }

    const dateDifference = Math.floor(timeDifference / hoursPerDate);
    if (dateDifference < datesPerMonth) {
      return `${dateDifference}일 전`;
    }

    const monthDifference = Math.floor(dateDifference / datesPerMonth);
    if (monthDifference < monthsPerYear) {
      return `${monthDifference}개월 전`;
    }

    const yearDifference = Math.floor(monthDifference / monthsPerYear);
    return `${yearDifference}년 전`;
  })();

  return {
    href,
    timeDifferenceText,
  };
}
