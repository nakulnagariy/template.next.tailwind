import TopNavigationBar from "../components/Navbar/TopNavigationBar";
import Sidebar from "../components/Navbar/Sidebar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSideBar = () => {
    setIsSidebarOpen(prev => !prev)
  };

  return (
    <>
      <Head>
        <title>Nextjs-Dev Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col relative h-screen">
        <TopNavigationBar openSideBar={handleToggleSideBar}/>
        <div className='flex'>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={handleToggleSideBar} />
          <main className="w-full flex-grow dark:bg-slate-900">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
