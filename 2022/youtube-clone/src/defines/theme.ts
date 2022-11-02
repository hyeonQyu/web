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
    color: '#0f0f0f',
    background: '#ffffff',
  },
  dark: {
    color: '#f1f1f1',
    background: '#212121',
  },
};
