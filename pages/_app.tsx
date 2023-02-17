import Head from 'next/head';
import { Outfit } from '@next/font/google';

import { Fragment } from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';

import 'styles/tailwind.css';
import { Header } from 'components/layout/header';
import { BreakpointsIndicator } from 'components/layout/header/breakpoints';
import { ThemeProvider } from 'components/context/theme';

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
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <BreakpointsIndicator />
        <main className={`${outfit.variable} font-display max-w-xl mx-auto`}>
          <SessionProvider>
            <Header />
            <AnimatePresence>
              <Component {...pageProps} />
            </AnimatePresence>
          </SessionProvider>
        </main>
      </ThemeProvider>
    </Fragment>
  );
}
