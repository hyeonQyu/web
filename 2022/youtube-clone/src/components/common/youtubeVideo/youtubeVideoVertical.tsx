import { YoutubeVideo } from '@defines/youtube';
import Link from 'next/link';
import { useYoutubeVideoInner } from '@components/common/youtubeVideo/hooks/useYoutubeVideoInner';
import { css } from '@emotion/react';
import { IconKebab } from '@icons/iconKebab';

export interface YoutubeVideoVerticalProps {
  video: YoutubeVideo;
}

export function YoutubeVideoVertical(props: YoutubeVideoVerticalProps) {
  const {
    video: { snippet, channelThumbnail },
  } = props;
  const { title, thumbnails, channelTitle } = snippet;

  const { href, timeDifferenceText } = useYoutubeVideoInner(props);

  const containerStyle = css`
    width: 100%;
  `;

  const detailsStyle = css`
    width: 100%;
    height: 66px;
    display: flex;
    padding: 10px 12px;
    gap: 12px;
  `;

  const channelProfileStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url(${channelThumbnail.url});
    background-size: contain;
  `;

  const informationStyle = css`
    flex: 1;

    p {
      opacity: 0.6;
      margin-top: 3px;
      line-height: 1.2;
    }
  `;

  const menuButtonStyle = css``;

  return (
    <div css={containerStyle}>
      <Link href={href}>
        <img alt={title} src={thumbnails.medium.url} width={'100%'} />
      </Link>

      <div css={detailsStyle}>
        <div css={channelProfileStyle} />

        <Link href={href} css={informationStyle}>
          <h3>{title}</h3>
          <p>
            {channelTitle} • {timeDifferenceText}
          </p>
        </Link>

        <button css={menuButtonStyle}>
          <IconKebab />
        </button>
      </div>
    </div>
  );
}
