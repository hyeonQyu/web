import { Theme } from '@emotion/react';

export type ThemeType = 'light' | 'dark';

export type ThemeMode = {
  [key in ThemeType]: Theme;
};

export const themeMode: ThemeMode = {
  light: {
    color: '#0f0f0f',
    background: '#ffffff',
    dividerColor: '#b1b1b1',
  },
  dark: {
    color: '#f1f1f1',
    background: '#212121',
    dividerColor: '#505050',
  },
};
