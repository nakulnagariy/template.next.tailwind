import Link from 'next/link';
import React from 'react';
import Logo from '../Logo/Logo';
import ThemeChanger from '../ThemeChanger/ThemeChanger';

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? 'open' : ''
      } bg-slate-100 dark:bg-slate-800`}>
      {/* <div className='sidebar-header border-b-2 border-b-slate-800 dark:border-b-slate-100'>
        <Link href='/' passHref legacyBehavior>
          <a>
            <Logo width={200} height={60} />
          </a>
        </Link>
        <button className='close-btn' onClick={toggleSidebar}>
          &times;
        </button>
      </div> */}
      <nav className='mt-10 px-4'>
        <ul>
          <li>
          <ThemeChanger />
          </li>
          <li>
            <Link href='/' passHref legacyBehavior>
              <a
                className='cursor-pointer text-slate-800 hover:bg-slate-800 hover:text-slate-100 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-800'>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about' passHref legacyBehavior>
              <a
                className='cursor-pointer text-slate-800 hover:bg-slate-800 hover:text-slate-100 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-800'>
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact' passHref legacyBehavior>
              <a
                className='cursor-pointer text-slate-800 hover:bg-slate-800 hover:text-slate-100 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-800'>
                Contact Us
              </a>
            </Link>
          </li>
          <li>
            <Link href='/auth' passHref legacyBehavior>
              <a
                className='cursor-pointer text-slate-800 hover:bg-slate-800 hover:text-slate-100 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-800'>
                Login/SignUp
              </a>
            </Link>
          </li>
          <li>
            <Link href='/manage-expense' passHref legacyBehavior>
              <a
                className='cursor-pointer text-slate-800 hover:bg-slate-800 hover:text-slate-100 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-800'>
                Manage Expense
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
