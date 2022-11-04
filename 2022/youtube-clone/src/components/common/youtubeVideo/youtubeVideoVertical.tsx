import { YoutubeVideo } from '@defines/youtube';
import Link from 'next/link';
import { useYoutubeVideoInner } from '@components/common/youtubeVideo/hooks/useYoutubeVideoInner';
import { css } from '@emotion/react';

export interface YoutubeVideoVerticalProps {
  video: YoutubeVideo;
}

export function YoutubeVideoVertical(props: YoutubeVideoVerticalProps) {
  const {
    video: { id, etag, kind, snippet },
  } = props;
  const { title, description, publishedAt, thumbnails } = snippet;
  const { standard } = thumbnails;

  const { href } = useYoutubeVideoInner(props);

  const containerStyle = css`
    width: 100%;
  `;

  const detailsStyle = css`
    display: flex;
  `;

  return (
    <div css={containerStyle}>
      <Link href={href}>
        <img alt={title} src={thumbnails.medium.url} width={'100%'} />
      </Link>
      <div css={detailsStyle}>
        <div />
        {/*<div>*/}
        {/*  <h3>{title}</h3>*/}
        {/*  <p>{description}</p>*/}
        {/*</div>*/}
        {/*<button />*/}
      </div>
    </div>
  );
}
