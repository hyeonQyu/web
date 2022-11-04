import { css } from '@emotion/react';
import Link from 'next/link';
import { useFooterTabItemInner } from '@components/common/layout/components/footer/components/tab/components/item/hooks/useFooterTabItemInner';
import { FooterNavTabIcon } from '@defines/layout';

export interface FooterTabItemProps {
  icon: FooterNavTabIcon;
  label: string;
  href: string;
}

export function FooterTabItem(props: FooterTabItemProps) {
  const { label, href } = props;
  const { renderingIcon } = useFooterTabItemInner(props);

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
    <Link href={href} css={tabStyle}>
      <li>
        <div>
          <div css={iconStyle}>{renderingIcon}</div>
          <p css={labelStyle}>{label}</p>
        </div>
      </li>
    </Link>
  );
}
