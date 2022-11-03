import { css, useTheme } from '@emotion/react';

export interface IconLibraryProps {
  filled?: boolean;
}

export function IconLibrary(props: IconLibraryProps) {
  const { filled } = props;

  const { color } = useTheme();

  const pathStyle = css`
    color: ${color};
    fill: ${filled ? 'currentColor' : 'transparent'};
    stroke: ${color};
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path css={pathStyle} d="M11 7l6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z" />
    </svg>
  );
}
