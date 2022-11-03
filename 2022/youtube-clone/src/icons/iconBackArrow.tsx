import { css, useTheme } from '@emotion/react';

export interface IconBackArrowProps {}

export function IconBackArrow(props: IconBackArrowProps) {
  const {} = props;
  const { color } = useTheme();

  const pathStyle = css`
    color: ${color};
    fill: currentColor;
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
      <path css={pathStyle} d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z" />
    </svg>
  );
}
