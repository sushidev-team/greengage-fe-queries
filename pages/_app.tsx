import { UrqlProvider, restoreSsrCache } from '../src/urql/client';
import { AppProps } from 'next/app';
import React from 'react';
import { ssrCache, client } from '../lib/urql';

export default function MyApp({ Component, pageProps }: AppProps) {
  restoreSsrCache({ pageProps, ssrCache });

  return (
    <UrqlProvider value={client}>
      <Component {...pageProps} />
    </UrqlProvider>
  );
}
