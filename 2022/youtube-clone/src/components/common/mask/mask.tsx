import { css } from '@emotion/react';
import { StrictPropsWithChildren, useEffect } from 'react';

export interface MaskProps {
  zIndex: number;
}

export function Mask(props: StrictPropsWithChildren<MaskProps>) {
  const { children, zIndex } = props;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'inherit';
    };
  }, []);

  const maskStyle = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${window.scrollY}px;
    z-index: ${zIndex - 1};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  `;

  const overlayStyle = css`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  `;

  const contentStyle = css`
    position: relative;
    z-index: ${zIndex};
    width: 100%;
    height: 100%;
    background-color: transparent;
  `;

  return (
    <div css={maskStyle}>
      <div css={overlayStyle} />
      <div css={contentStyle}>{children}</div>
    </div>
  );
}
