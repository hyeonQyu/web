import { useEffect } from 'react';
import { useRouter } from 'next/router';

export interface IUseScrollParams {
  onScroll?: EventListener;
}

export interface IUseScroll {}

function useScroll(params: IUseScrollParams): IUseScroll {
  const { onScroll } = params;
  const router = useRouter();

  useEffect(() => {
    if (onScroll) {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      if (onScroll) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll, router.pathname]);

  return {};
}

export default useScroll;
