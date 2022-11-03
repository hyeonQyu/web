import { Theme } from '@emotion/react';

export type ThemeType = 'light' | 'dark';

export type ThemeMode = {
  [key in ThemeType]: Theme;
};

export const themeMode: ThemeMode = {
  light: {
    logoUrl: 'https://www.gstatic.com/youtube/img/promos/growth/ff6de42d226f44d82d262eb7bf8c09a30939400898eb9963ae82c20c64f7668d_244x96.png',
    color: '#0f0f0f',
    background: '#ffffff',
    dividerColor: '#b1b1b1',
    componentBackgroundColor: 'rgba(0, 0, 0, 0.05)',
    placeholderColor: '#717171',
  },
  dark: {
    logoUrl: 'https://www.gstatic.com/youtube/img/promos/growth/ceaa377b0e1f44d62dcf0fdc1add76096b17c11d6d8bb91d3888c781d750999e_244x96.png',
    color: '#f1f1f1',
    background: '#212121',
    dividerColor: '#505050',
    componentBackgroundColor: 'rgba(255,255,255,0.1)',
    placeholderColor: '#afafaf',
  },
};
