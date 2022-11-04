import { useHomePageContext } from '@contexts/page/home/homePageContext';
import { YoutubeVideoVertical } from '@components/common/youtubeVideo';
import { css } from '@emotion/react';
import { footerHeight, headerHeight } from '@defines/layout';
import { chipBarFilterHeight } from '@components/page/home/chipBarFilter';

export interface HomeYoutubeVideoListProps {}

export function HomeYoutubeVideoList(props: HomeYoutubeVideoListProps) {
  const {} = props;
  const { videos } = useHomePageContext();

  const sectionStyle = css`
    padding: ${headerHeight + chipBarFilterHeight}px 0 ${footerHeight}px;

    & > :not(:first-child) {
      margin-top: 1px;
    }
  `;

  return (
    <section css={sectionStyle}>
      {videos.map((video) => (
        <YoutubeVideoVertical key={video.id} video={video} />
      ))}
    </section>
  );
}
