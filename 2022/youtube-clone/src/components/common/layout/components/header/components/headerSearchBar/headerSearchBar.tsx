import { IconButton } from '@components/common/iconButton';
import { IconBackArrow } from '@icons/iconBackArrow';
import { css, useTheme } from '@emotion/react';
import { IconSearch } from '@icons/iconSearch';
import { headerSearchBarHeight } from '@defines/layout';
import { IconMicrophone } from '@icons/iconMicrophone';

export interface HeaderSearchBarProps {}

export function HeaderSearchBar(props: HeaderSearchBarProps) {
  const {} = props;
  const { inputBackgroundColor, placeholderColor } = useTheme();

  const inputContainerStyle = css`
    width: calc(100% - 96px);
    height: ${headerSearchBarHeight}px;
    border-radius: 32px;
    background: ${inputBackgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

    & input {
      background-color: transparent;
      width: calc(100% - ${headerSearchBarHeight}px);

      &::placeholder {
        color: ${placeholderColor};
      }
    }
  `;

  const iconMicrophoneContainerStyle = css`
    width: ${headerSearchBarHeight}px;
    height: ${headerSearchBarHeight}px;
    border-radius: 50%;
    background-color: ${inputBackgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 12px;
  `;

  return (
    <>
      <IconButton>
        <IconBackArrow />
      </IconButton>

      <div css={inputContainerStyle}>
        <input placeholder={'YouTube 검색'} />
        <IconButton width={headerSearchBarHeight} height={headerSearchBarHeight}>
          <IconSearch />
        </IconButton>
      </div>

      <div css={iconMicrophoneContainerStyle}>
        <IconMicrophone />
      </div>
    </>
  );
}
