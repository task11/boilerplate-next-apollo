import type { AppProps } from 'next/app';

import GlobalStyle from '@/styles/GlobalStyle';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo/client';

import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </RecoilRoot>
  );
}
