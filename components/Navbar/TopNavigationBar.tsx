import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';


const DynamicLogout = dynamic(() => import('../Logout/Logout'), {
  loading: () => <p>loading...</p>,
});

interface TopNavigationBarProps {
  openSideBar: () => void;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ openSideBar }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const authorization = Cookies.get('Authorization');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if(!!authorization) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [authorization]);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='w-8 h-8 ml-2 text-yellow-500 '
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-8 h-8 ml-2 text-gray-900 '
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  const renderLoginLogout = () => {
    return (
      <li className='nav-item mr-4'>
        {!isUserLoggedIn ? (
          <Link href='/auth' passHref legacyBehavior>
            <a className={`flex items-center text-md uppercase font-bold leading-snug text-slate-800 hover:opacity-75 dark:text-slate-100`}>
              Login/SignUp
            </a>
          </Link>
        ) : (
          <DynamicLogout />
        )}
      </li>
    );
  };
  return (
    <>
      <div className='py-4 bg-slate-100 dark:bg-slate-800'>
        <div className='w-11/12 mx-auto'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center lg:w-auto px-4 lg:static lg:justify-start'>
              <FontAwesomeIcon
                icon={faBars}
                className='fa-2xl mr-3 cursor-pointer text-slate-800  dark:text-slate-100'
                onClick={openSideBar}
              />
              <Link href='/' passHref legacyBehavior>
                <a>
                  <Logo width={200} height={60} />
                </a>
              </Link>
            </div>
            <div
              className='flex flex-grow-0 items-center md:flex-grow'
              id='example-navbar-info'>
              <ul className='hidden md:flex lg:flex-row list-none ml-auto mb-0'>
                <li className='nav-item mr-4'>
                  <Link href='/manage-expense' passHref legacyBehavior>
                    <a className={`flex items-center text-md uppercase font-bold leading-snug text-slate-800 ${router.pathname === '/manage-expense' && 'active'} hover:opacity-75 dark:text-slate-100`}>
                      Manage Expense
                    </a>
                  </Link>
                </li>
                <li className='nav-item mr-4'>
                  <Link href='/about' passHref legacyBehavior>
                    <a className={`flex items-center text-md uppercase font-bold leading-snug text-slate-800 ${router.pathname === '/about' && 'active'} hover:opacity-75 dark:text-slate-100`}>
                      About Us
                    </a>
                  </Link>
                </li>
                <li className='nav-item mr-4'>
                  <Link href='/contact' passHref legacyBehavior>
                    <a className={`flex items-center text-md uppercase font-bold leading-snug text-slate-800 ${router.pathname === '/contact' && 'active'} hover:opacity-75 dark:text-slate-100`}>
                      Contact Us
                    </a>
                  </Link>
                </li>
                {renderLoginLogout()}
              </ul>
              {renderThemeChanger()}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavigationBar;
