import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RecoilRoot } from 'recoil';
import Layout from './common/layout/layout.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>,
);
