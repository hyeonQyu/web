import { useHomePageContext } from '@contexts/page/home/homePageContext';
import { YoutubeVideoVertical } from '@components/common/youtubeVideo';
import { css } from '@emotion/react';
import { headerHeight } from '@defines/layout';
import { chipBarFilterHeight } from '@components/page/home/chipBarFilter';

export interface HomeYoutubeVideoListProps {}

export function HomeYoutubeVideoList(props: HomeYoutubeVideoListProps) {
  const {} = props;
  const { videos } = useHomePageContext();

  const sectionStyle = css`
    margin-top: ${headerHeight + chipBarFilterHeight}px;
  `;

  return (
    <section css={sectionStyle}>
      {videos.map((video) => (
        <YoutubeVideoVertical video={video} />
      ))}
    </section>
  );
}
