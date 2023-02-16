import { AppProps } from 'next/app';
import { Outfit } from '@next/font/google';

import 'styles/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { Header } from 'components/layout/header';
import { AspectRatio } from 'components/ui/aspect-ratio';

const outfit = Outfit({
  variable: '--display-font',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <AspectRatio ratio={9 / 16} className={`${outfit.variable} font-display max-w-xl mx-auto`}>
        <Header />
        <Component {...pageProps} />
      </AspectRatio>
    </SessionProvider>
  );
}
