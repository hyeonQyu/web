import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface IUseScrollParams {
  onScroll?: EventListener;
  onScrollDown?: () => void;
  onScrollUp?: () => void;
  intervalMilliSeconds?: number;
}

export interface IUseScroll {}

function useScroll(params: IUseScrollParams): IUseScroll {
  const { onScroll, onScrollDown, onScrollUp, intervalMilliSeconds = 300 } = params;
  const router = useRouter();
  const [timer, setTimer] = useState<NodeJS.Timer>();
  let scrollY = Number.MAX_VALUE;

  useEffect(() => {
    if (onScroll) {
      window.addEventListener('scroll', onScroll);
    }

    if (onScrollUp || onScrollDown) {
      setTimer(
        setInterval(() => {
          if (scrollY < window.scrollY) {
            onScrollDown && onScrollDown();
            scrollY = window.scrollY;
          } else if (scrollY > window.scrollY) {
            onScrollUp && onScrollUp();
            scrollY = window.scrollY;
          }
        }, intervalMilliSeconds),
      );
    }

    return () => {
      if (onScroll) {
        window.removeEventListener('scroll', onScroll);
      }

      if (onScrollUp || onScrollDown) {
        clearInterval(timer);
      }
    };
  }, [router.pathname]);

  return {};
}

export default useScroll;
