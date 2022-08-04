import TopNavigationBar from "../components/Navbar/TopNavigationBar";
import SideNavigationBar from "../components/Navbar/SideNavigationBar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nextjs-Dev Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col relative mt-14">
        <TopNavigationBar />
        <div className='flex mt-16'>
        <SideNavigationBar />
          <main className="w-full px-5 py-5 dark:bg-slate-900">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
