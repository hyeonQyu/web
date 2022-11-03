import { IconButton } from '@components/common/iconButton';
import { IconSearch } from '@icons/iconSearch';
import { IconUserDefault } from '@icons/iconUserDefault';
import { css, useTheme } from '@emotion/react';
import { useLayoutContext } from '@components/common/layout/context/layoutContext';

export interface HeaderBrowseProps {}

export function HeaderBrowse(props: HeaderBrowseProps) {
  const {} = props;
  const { handleClickStartSearch } = useLayoutContext();
  const { logoUrl } = useTheme();

  const iconsContainerStyle = css`
    display: flex;
  `;

  return (
    <>
      <img src={logoUrl} width={122} height={48} alt={'Youtube'} />

      <div css={iconsContainerStyle}>
        <IconButton onClick={handleClickStartSearch}>
          <IconSearch />
        </IconButton>

        <IconButton>
          <IconUserDefault />
        </IconButton>
      </div>
    </>
  );
}
