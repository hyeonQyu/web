import { IconButton } from '@components/common/iconButton';
import { IconSearch } from '@icons/iconSearch';
import { IconUserDefault } from '@icons/iconUserDefault';
import { css, useTheme } from '@emotion/react';

export interface HeaderBrowseProps {}

export function HeaderBrowse(props: HeaderBrowseProps) {
  const {} = props;
  const { logoUrl } = useTheme();

  const iconsContainerStyle = css`
    display: flex;
  `;

  return (
    <>
      <img src={logoUrl} width={122} height={48} alt={'Youtube'} />

      <div css={iconsContainerStyle}>
        <IconButton>
          <IconSearch />
        </IconButton>

        <IconButton>
          <IconUserDefault />
        </IconButton>
      </div>
    </>
  );
}
