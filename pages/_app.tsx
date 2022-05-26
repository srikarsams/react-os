import 'styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React OS</title>
        <meta
          name="description"
          content="Desktop OS in browser using ReactJS"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
