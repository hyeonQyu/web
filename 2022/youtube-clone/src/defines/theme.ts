export interface Theme {
  fontColor: string;
  background: string;
}

export type ThemeType = 'light' | 'dark';

export type ThemeMode = {
  [key in ThemeType]: Theme;
};

export const themeMode: ThemeMode = {
  light: {
    fontColor: '#000000',
    background: '#ffffff',
  },
  dark: {
    fontColor: '#ffffff',
    background: '#000000',
  },
};
