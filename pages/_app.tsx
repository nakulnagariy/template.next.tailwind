import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../sections/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
