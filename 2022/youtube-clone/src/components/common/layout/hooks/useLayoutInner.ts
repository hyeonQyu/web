import { useState } from 'react';
import useScroll from '@hooks/common/useScroll';

export interface IUseLayoutInnerParams {}

export interface IUseLayoutInner {
  /**
   * 헤더 검색중 상태
   */
  isSearching: boolean;
  /**
   * 헤더 노출 여부
   */
  isHeaderVisible: boolean;

  /**
   * 검색 클릭
   */
  handleClickStartSearch: () => void;
  /**
   * 검색 취소 클릭
   */
  handleClickCancelSearch: () => void;
}

export function useLayoutInner(params: IUseLayoutInnerParams): IUseLayoutInner {
  const {} = params;
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useScroll({
    onScrollDown: () => setIsHeaderVisible(false),
    onScrollUp: () => setIsHeaderVisible(true),
  });

  const [isSearching, setIsSearching] = useState(false);

  const handleClickStartSearch = () => {
    setIsSearching(true);
  };

  const handleClickCancelSearch = () => {
    setIsSearching(false);
  };

  return {
    isSearching,
    isHeaderVisible,
    handleClickStartSearch,
    handleClickCancelSearch,
  };
}
