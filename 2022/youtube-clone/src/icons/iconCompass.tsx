import { css, useTheme } from '@emotion/react';

export interface IconCompassProps {}

export function IconCompass(props: IconCompassProps) {
  const {} = props;

  const { color } = useTheme();

  const pathStyle = css`
    color: ${color};
    fill: currentColor;
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        css={pathStyle}
        d="M9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23L9.8 9.8zm3.28 2.97a1.327 1.327 0 01-1.08.56c-.28 0-.54-.08-.77-.25-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.7-.23.99zM12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
      />
    </svg>
  );
}
