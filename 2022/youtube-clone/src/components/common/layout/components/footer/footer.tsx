import { css, useTheme } from '@emotion/react';
import { footerHeight } from '@defines/layout';
import { FooterTab } from '@components/common/layout/components/footer/components/tab';
import { IconHome } from '@icons/footer/iconHome';
import { IconShorts } from '@icons/footer/iconShorts';
import { IconLibrary } from '@icons/footer/iconLibrary';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const {} = props;
  const { background } = useTheme();

  const footerStyle = css`
    width: 100%;
    height: ${footerHeight}px;
    background-color: ${background};
    position: fixed;
    bottom: 0;
  `;

  const navStyle = css`
    width: 100%;
    height: 100%;
  `;

  return (
    <footer css={footerStyle}>
      <nav css={navStyle}>
        <FooterTab.List>
          <FooterTab.Item icon={<IconHome filled />} label={'홈'} />
          <FooterTab.Item icon={<IconShorts />} label={'Shorts'} />
          <FooterTab.Item icon={<IconLibrary />} label={'보관함'} />
        </FooterTab.List>
      </nav>
    </footer>
  );
}
