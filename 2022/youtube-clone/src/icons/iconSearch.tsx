import { css, useTheme } from '@emotion/react';

export interface IconSearchProps {}

export function IconSearch(props: IconSearchProps) {
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
        d="M20.87 20.17l-5.59-5.59A6.956 6.956 0 0017 10c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 0011.58 5.29l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
      />
    </svg>
  );
}
