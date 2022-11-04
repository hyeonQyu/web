import { css, useTheme } from '@emotion/react';

export interface IconHomeProps {
  filled?: boolean;
}

export function IconHome(props: IconHomeProps) {
  const { filled } = props;

  const { color } = useTheme();

  const pathStyle = css`
    color: ${color};
    fill: ${filled ? 'currentColor' : 'transparent'};
    stroke: ${color};
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path css={pathStyle} d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z" />
    </svg>
  );
}
