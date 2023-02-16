import Head from 'next/head';
import { AppProps } from 'next/app';
import { Outfit } from '@next/font/google';

import 'styles/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { Header } from 'components/layout/header';
import { AspectRatio } from 'components/ui/aspect-ratio';
import { Fragment } from 'react';

const outfit = Outfit({
  variable: '--display-font',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name='title' content='Habitual' />
        <title>Habitual</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <SessionProvider>
        <AspectRatio
          ratio={9 / 16}
          className={`${outfit.variable} font-display max-w-xl mx-auto`}
        >
          <Header />
          <Component {...pageProps} />
        </AspectRatio>
      </SessionProvider>
    </Fragment>
  );
}
