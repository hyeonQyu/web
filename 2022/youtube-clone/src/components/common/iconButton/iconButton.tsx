import { css } from '@emotion/react';
import { MouseEventHandler, PropsWithChildren } from 'react';

export interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: number;
  height?: number;
}

export function IconButton(props: PropsWithChildren<IconButtonProps>) {
  const { children, onClick, width = 48, height = 48 } = props;

  const iconButtonStyle = css`
    width: ${width}px;
    height: ${height}px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <button onClick={onClick} css={iconButtonStyle}>
      {children}
    </button>
  );
}
