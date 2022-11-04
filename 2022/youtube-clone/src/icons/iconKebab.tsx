import { css, useTheme } from '@emotion/react';

export interface IconKebabProps {}

export function IconKebab(props: IconKebabProps) {
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
        d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
      />
    </svg>
  );
}
