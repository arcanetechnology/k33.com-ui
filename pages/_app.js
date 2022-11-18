import Head from 'next/head';
import '@arcanetechnology/react-ui-lib/lib/index.css';
import '@arcanetechnology/react-ui-lib/lib/toggle.css';
import { ArcaneUIProvider } from '@arcanetechnology/react-ui-lib';
import NextLink from 'components/NextLink';
import AppPortal from 'components/AppPortal';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:title" key="og:title" content="k33.com" />
        {/* <meta property="og:description" key="og:description" content="Research and analysis that gives you the confidence to trust digital assets" /> */}
        {/* <meta name="description" content="Research and analysis that gives you the confidence to trust digital assets" /> */}
        {/* <meta property="og:image" key="og:image" content="https://arcane.no/research/favicon-1232x1232.png" /> */}
        <meta property="og:url" key="og:url" content="https://k33.com" />

        <meta property="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" key="og:site_name" content="k33.com" />

        <title>k33.com</title>
      </Head>

      <ArcaneUIProvider LinkComponent={NextLink} PortalComponent={AppPortal}>
        <Component {...pageProps} />
      </ArcaneUIProvider>
    </>
  );
}

export default MyApp;
