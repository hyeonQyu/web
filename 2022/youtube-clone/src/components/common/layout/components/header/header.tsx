import { css } from '@emotion/react';
import { headerHeight } from '@defines/layout';
import { HeaderBrowse } from '@components/common/layout/components/header/components/headerBrowse';
import { HeaderSearchBar } from '@components/common/layout/components/header/components/headerSearchBar/headerSearchBar';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const {} = props;

  const headerStyle = css`
    height: ${headerHeight}px;
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <header css={headerStyle}>
      {/*<HeaderBrowse />*/}
      <HeaderSearchBar />
    </header>
  );
}
