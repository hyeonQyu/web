import { css, useTheme } from '@emotion/react';
import { IconSearch } from '@icons/iconSearch';
import { IconUserDefault } from '@icons/iconUserDefault';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const {} = props;
  const { logoUrl } = useTheme();

  const headerStyle = css`
    height: 48px;
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const iconsContainerStyle = css`
    display: flex;
  `;

  const iconButtonStyle = css`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <header css={headerStyle}>
      <img src={logoUrl} width={122} height={48} alt={'Youtube'} />
      <div css={iconsContainerStyle}>
        <button css={iconButtonStyle}>
          <IconSearch />
        </button>
        <button css={iconButtonStyle}>
          <IconUserDefault />
        </button>
      </div>
    </header>
  );
}
