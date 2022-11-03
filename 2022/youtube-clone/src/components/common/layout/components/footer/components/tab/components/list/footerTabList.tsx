import { StrictPropsWithChildren } from 'react';
import { FooterTabItemProps } from '@components/common/layout/components/footer/components/tab/components/item';
import { css } from '@emotion/react';

export interface FooterTabListProps {}

export function FooterTabList(props: StrictPropsWithChildren<FooterTabListProps, FooterTabItemProps>) {
  const { children } = props;

  const listStyle = css`
    width: 100%;
    height: 100%;
    display: flex;
  `;

  return <ul css={listStyle}>{children}</ul>;
}
