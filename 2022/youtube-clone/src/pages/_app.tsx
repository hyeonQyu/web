import type { AppProps } from 'next/app';
import { ThemeProvider, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import { themeMode, ThemeType } from '@defines/theme';
import { reset } from '@styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  useEffect(() => {
    setThemeType(window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light');
  }, []);

  const theme = themeMode[themeType];

  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset(theme)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
