import { css, useTheme } from '@emotion/react';
import { ReactNode } from 'react';

export interface ChipBarFilterChipProps {
  id: string;
  label: string;
  icon?: ReactNode;
}

export function ChipBarFilterChip(props: ChipBarFilterChipProps) {
  const { id, label, icon } = props;
  const { componentBackgroundColor } = useTheme();

  const radioStyle = css`
    display: none;
  `;

  const labelStyle = css`
    height: 32px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${componentBackgroundColor};
    border-radius: 8px;
  `;

  const textStyle = css`
    padding-left: ${icon ? '4px' : 0};
  `;

  return (
    <>
      <input css={radioStyle} type={'radio'} id={id} name={'ChipBarFilterChip'} />
      <label css={labelStyle} htmlFor={id}>
        {icon}
        <span css={textStyle}>{label}</span>
      </label>
    </>
  );
}
