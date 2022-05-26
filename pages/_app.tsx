import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>React OS</title>
        <meta
          name="description"
          content="Desktop OS in browser using ReactJS"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
