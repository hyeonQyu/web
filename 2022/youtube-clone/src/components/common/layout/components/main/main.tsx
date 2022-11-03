import { StrictPropsWithChildren } from 'react';
import { css } from '@emotion/react';

export interface MainProps {}

export function Main(props: StrictPropsWithChildren<MainProps>) {
  const { children } = props;

  const mainStyle = css`
    width: 100%;
    height: 100%;
    background-color: white;
  `;

  return <main css={mainStyle}>{children}</main>;
}
