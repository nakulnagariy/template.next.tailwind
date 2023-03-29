/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// styles

import '../components/Navbar/Sidebar.scss';
import '../components/Footer/Footer.scss';

import { config, library } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css'
// Fontawesome icons
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// icons
config.autoAddCss = false
library.add(fas, far);

import Layout from "../sections/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <script src="https://kit.fontawesome.com/64805d2996.js" crossOrigin="anonymous"></script> */}
      </Head>
      <ConfigProvider direction="ltr">
        <ThemeProvider enableSystem={true} attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default MyApp;
