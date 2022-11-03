import { useEffect, useState } from 'react';
import { themeMode, ThemeType } from '@defines/theme';
import { Theme } from '@emotion/react';

export interface IUseCustomTheme {
  theme: Theme;
}

export function useCustomTheme(): IUseCustomTheme {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  useEffect(() => {
    setThemeType(window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light');
  }, []);

  return {
    theme: themeMode[themeType],
  };
}
