import { useRouter } from 'next/router';
import { FooterTabItemProps } from '@components/common/layout/components/footer/components/tab/components/item';
import { FooterNavTabIcon } from '@defines/layout';

export interface IUseFooterTabItemInnerParams extends FooterTabItemProps {}

export interface IUseFooterTabItemInner {
  renderingIcon: FooterNavTabIcon;
}

export function useFooterTabItemInner(params: IUseFooterTabItemInnerParams): IUseFooterTabItemInner {
  const { href, icon } = params;
  const router = useRouter();

  const selected = (() => {
    if (href === '/') {
      return router.pathname === href;
    }
    return router.pathname.includes(href);
  })();

  const renderingIcon: FooterNavTabIcon = { ...icon, props: { filled: selected } };

  return {
    renderingIcon,
  };
}
