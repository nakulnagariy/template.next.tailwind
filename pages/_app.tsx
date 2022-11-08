/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from 'next/head'
import Script from 'next/script'
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from "../sections/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/64805d2996.js" crossOrigin="anonymous"></script>
      </Head>
      <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
