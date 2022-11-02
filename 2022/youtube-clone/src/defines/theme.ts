export interface Theme {
  color: string;
  background: string;
}

export type ThemeType = 'light' | 'dark';

export type ThemeMode = {
  [key in ThemeType]: Theme;
};

export const themeMode: ThemeMode = {
  light: {
    color: '#000000',
    background: '#ffffff',
  },
  dark: {
    color: '#ffffff',
    background: '#000000',
  },
};
