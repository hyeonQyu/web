import type { AppProps } from 'next/app';
import { ThemeProvider, Global } from '@emotion/react';
import { reset } from '@styles/reset';
import { Layout } from '@components/common/layout';
import { useCustomTheme } from '@hooks/common/useCustomTheme';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useCustomTheme();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={reset(theme)} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
