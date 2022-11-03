import { ReactNode } from 'react';
import { css } from '@emotion/react';

export interface FooterTabItemProps {
  icon: ReactNode;
  label: string;
}

export function FooterTabItem(props: FooterTabItemProps) {
  const { icon, label } = props;

  const tabStyle = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const iconStyle = css`
    margin: 0 auto;
    width: fit-content;
  `;

  const labelStyle = css`
    text-align: center;
    margin-top: 4px;
    font-size: 12px;
  `;

  return (
    <li css={tabStyle}>
      <div>
        <div css={iconStyle}>{icon}</div>
        <p css={labelStyle}>{label}</p>
      </div>
    </li>
  );
}
