import React from 'react';
import { IUseHomePage } from '@hooks/page/home/useHomePage';

export interface IHomePageContext extends IUseHomePage {}

export const HomePageContext = React.createContext<IHomePageContext>({
  isChipBarFilterVisible: true,
});

export const useHomePageContext = () => React.useContext(HomePageContext);
