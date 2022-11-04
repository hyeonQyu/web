import { css, useTheme } from '@emotion/react';

export interface IconShortsProps {
  filled?: boolean;
}

export function IconShorts(props: IconShortsProps) {
  const { filled } = props;

  const { color } = useTheme();

  const pathStyle = css`
    color: ${color};
    fill: ${filled ? 'currentColor' : 'transparent'};
    stroke: ${color};
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        css={pathStyle}
        d="M17.77 10.32l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"
      />
    </svg>
  );
}
