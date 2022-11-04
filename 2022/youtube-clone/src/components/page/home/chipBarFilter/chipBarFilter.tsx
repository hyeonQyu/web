import { css, useTheme } from '@emotion/react';
import { ChipBarFilterChip } from '@components/page/home/chipBarFilter/components/chipBarFilterChip';
import { IconCompass } from '@icons/iconCompass';
import { headerHeight } from '@defines/layout';
import { useHomePageContext } from '@contexts/page/home/homePageContext';
import { zIndex } from '@defines/zIndex';

export const chipBarFilterHeight = 50;

export interface ChipBarFilterProps {}

export function ChipBarFilter(props: ChipBarFilterProps) {
  const {} = props;
  const { isChipBarFilterVisible } = useHomePageContext();
  const { background, dividerColor } = useTheme();

  const containerStyle = css`
    width: 100%;
    height: ${chipBarFilterHeight}px;
    position: fixed;
    background-color: ${background};
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
    padding: 0 12px;
    top: ${headerHeight}px;
    transition: top 225ms cubic-bezier(0, 0, 0.2, 1);
    z-index: ${zIndex.chipBarFilter};

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const containerInvisibleStyle = css`
    top: -${chipBarFilterHeight}px;
    transition: top 195ms cubic-bezier(0.4, 0, 1, 1);
  `;

  const dividerStyle = css`
    width: 1px;
    height: 32px;
    background-color: ${dividerColor};
  `;

  return (
    <div css={[containerStyle, !isChipBarFilterVisible && containerInvisibleStyle]}>
      <ChipBarFilterChip id={'explore'} label={'탐색'} icon={<IconCompass />} />
      <div css={dividerStyle} />
      <ChipBarFilterChip id={'all'} label={'전체'} />
      <ChipBarFilterChip id={'game'} label={'게임'} />
      <ChipBarFilterChip id={'music'} label={'음악'} />
      <ChipBarFilterChip id={'realTime'} label={'실시간'} />
      <ChipBarFilterChip id={'mix'} label={'믹스'} />
      <ChipBarFilterChip id={'rap'} label={'랩'} />
      <ChipBarFilterChip id={'animation'} label={'만화 영화'} />
    </div>
  );
}
