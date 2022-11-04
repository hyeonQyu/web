import { css, useTheme } from '@emotion/react';
import { headerHeight } from '@defines/layout';
import { HeaderBrowse } from '@components/common/layout/components/header/components/headerBrowse';
import { HeaderSearchBar } from '@components/common/layout/components/header/components/headerSearchBar/headerSearchBar';
import { useLayoutContext } from '@components/common/layout/context/layoutContext';
import { zIndex } from '@defines/zIndex';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const {} = props;
  const { isSearching, isHeaderVisible } = useLayoutContext();
  const { background } = useTheme();

  const headerStyle = css`
    background-color: ${background};
    width: 100%;
    height: ${headerHeight}px;
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    transition: top 225ms cubic-bezier(0, 0, 0.2, 1);
    z-index: ${zIndex.header};
  `;

  const invisibleStyle = css`
    top: -${headerHeight}px;
    transition: top 195ms cubic-bezier(0.4, 0, 1, 1);
  `;

  return <header css={[headerStyle, !isHeaderVisible && invisibleStyle]}>{isSearching ? <HeaderSearchBar /> : <HeaderBrowse />}</header>;
}
