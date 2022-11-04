import { useState } from 'react';

export interface IUseLayoutInnerParams {}

export interface IUseLayoutInner {
  /**
   * 헤더 검색중 상태
   */
  isSearching: boolean;

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

  const [isSearching, setIsSearching] = useState(false);

  const handleClickStartSearch = () => {
    setIsSearching(true);
  };

  const handleClickCancelSearch = () => {
    setIsSearching(false);
  };

  return {
    isSearching,
    handleClickStartSearch,
    handleClickCancelSearch,
  };
}
