import { Header } from '@components/common/layout/components/header';
import { Footer } from '@components/common/layout/components/footer';
import { PropsWithChildren } from 'react';
import { LayoutContext } from './context/layoutContext';
import { useLayoutInner } from '@components/common/layout/hooks/useLayoutInner';

export interface LayoutProps {}

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;

  return (
    <LayoutContext.Provider value={useLayoutInner({})}>
      <Header />
      <main style={{ background: 'white', width: '100%', height: '100%' }}>{children}</main>
      <Footer />
    </LayoutContext.Provider>
  );
}
