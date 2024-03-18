import { useState } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Layout } from 'components/layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
