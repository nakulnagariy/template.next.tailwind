import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Logo from '../Logo/Logo';

interface TopNavigationBarProps {
  openSideBar: () => void;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ openSideBar }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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
                  <Logo width={200} height={60}/>
                </Link>
              </div>
            <div
              className='flex flex-grow-0 items-center md:flex-grow'
              id='example-navbar-info'>
              <ul className='hidden md:flex lg:flex-row list-none ml-auto'>
                <li className='nav-item mr-4'>
                  <Link href='/about' passHref legacyBehavior>
                    <a className='flex items-center text-md uppercase font-bold leading-snug text-slate-800 hover:opacity-75 dark:text-slate-100'>
                      About Us
                    </a>
                  </Link>
                </li>
                <li className='nav-item mr-4'>
                  <Link href='/contact' passHref legacyBehavior>
                    <a className='flex items-center text-md uppercase font-bold leading-snug text-slate-800 hover:opacity-75 dark:text-slate-100'>
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li className='nav-item mr-4'>
                  <Link href='/auth' passHref legacyBehavior>
                    <a className='flex items-center text-md uppercase font-bold leading-snug text-slate-800 hover:opacity-75 dark:text-slate-100'>
                      Login/SignUp
                    </a>
                  </Link>
                </li>
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
