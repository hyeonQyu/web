import { Header } from '@components/common/layout/components/header';
import { Footer } from '@components/common/layout/components/footer';
import { StrictPropsWithChildren } from 'react';
import { LayoutContext } from './context/layoutContext';
import { useLayoutInner } from '@components/common/layout/hooks/useLayoutInner';
import { Main } from '@components/common/layout/components/main';

export interface LayoutProps {}

export function Layout(props: StrictPropsWithChildren<LayoutProps>) {
  const { children } = props;

  const layoutContext = useLayoutInner({});

  return (
    <LayoutContext.Provider value={layoutContext}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContext.Provider>
  );
}
