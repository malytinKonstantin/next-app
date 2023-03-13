import Head from 'next/head';
import MainPage from './main';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>NFTea</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
}
