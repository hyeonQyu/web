import React from 'react';
import { IUseLayoutInner } from '@components/common/layout/hooks/useLayoutInner';

export interface ILayoutContext extends IUseLayoutInner {}

export const LayoutContext = React.createContext<ILayoutContext>({
  isSearching: false,
  handleClickStartSearch: () => {},
  handleClickCancelSearch: () => {},
});

export const useLayoutContext = () => React.useContext(LayoutContext);
