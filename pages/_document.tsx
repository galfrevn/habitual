import { Html, Head, Main, NextScript } from 'next/document';

const NAME = 'Habitual'
const TITLE = 'Habitual | Habits tracker';
const DESCRIPTION = `Habit tracking app designed to help users maintain healthy habits. 
Featuring a user-friendly interface and customizable features, users can easily track their
daily progress and create new habits that lead to a healthier lifestyle ❤️‍🩹`;
const URL = 'habits.galfrevn.com';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* PWA MANIFEST */}
        <link rel="manifest" href="/manifest.json" />
        {/* PWA METATAGS */}
        <meta name='application-name' content={NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={NAME} />
        <meta name='description' content={DESCRIPTION} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#FFF' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#FFF' />

        {/* GENERAL META TAGS */}
        <meta name='title' content={TITLE} />
        <title>{TITLE}</title>
        <meta name='description' content={DESCRIPTION} />
        <meta name='theme-color' content='#FFF' />
        <link rel='shortcut icon' href='/images/avatar.png' />

        {/* OPEN GRAPH */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={URL} />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />

        {/* TWITTER */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={URL} />
        <meta property='twitter:title' content={TITLE} />
        <meta property='twitter:description' content={DESCRIPTION} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
