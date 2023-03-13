import { FC } from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { GlobalStyles } from '@/ui-kit/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/ui-kit/@themes';
import { Provider as MOBXProvider } from 'mobx-react';
import * as stores from '../stores';
import * as baseStores from '@/ui-kit/base/stores';
import { Messages } from '@/ui-kit/Message';

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>NFTea</title>
        <link rel="icon" href="/nftea_favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,200;0,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme.NFTea}>
        <MOBXProvider {...stores} {...baseStores}>
          <Component {...pageProps} />
          <GlobalStyles />
          <Messages />
        </MOBXProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
