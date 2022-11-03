import { css, useTheme } from '@emotion/react';
import { headerHeight } from '@defines/layout';
import { HeaderBrowse } from '@components/common/layout/components/header/components/headerBrowse';
import { HeaderSearchBar } from '@components/common/layout/components/header/components/headerSearchBar/headerSearchBar';
import { useLayoutContext } from '@components/common/layout/context/layoutContext';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const {} = props;
  const { isSearching } = useLayoutContext();
  const { background } = useTheme();

  const headerStyle = css`
    background-color: ${background};
    height: ${headerHeight}px;
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return <header css={headerStyle}>{isSearching ? <HeaderSearchBar /> : <HeaderBrowse />}</header>;
}
