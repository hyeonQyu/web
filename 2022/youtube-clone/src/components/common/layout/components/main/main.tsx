import { StrictPropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { headerHeight } from '@defines/layout';

export interface MainProps {}

export function Main(props: StrictPropsWithChildren<MainProps>) {
  const { children } = props;

  const mainStyle = css`
    width: 100%;
    height: calc(100% - ${headerHeight}px);
    background-color: white;
  `;

  return <main css={mainStyle}>{children}</main>;
}
