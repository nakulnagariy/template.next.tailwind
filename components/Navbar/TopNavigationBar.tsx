import Link from 'next/link';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import { Disclosure } from '@headlessui/react';
import LoginLogoutNavBar from '../../components/LoginLogoutNavBar/LoginLogoutNavBar';
import Logo from '../Logo/Logo';

interface TopNavigationBarProps {
  openSideBar: () => void;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ openSideBar }) => {
  const navigation = [
    { name: 'Manage', href: 'manage-expense' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <div className='w-full'>
      <nav className='container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <Link href='/'>
                  <a className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
                    <span>
                      <Logo width={200} height={60} />
                    </span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  onClick={openSideBar}
                  className='px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'>
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'>
                    {!open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                {/* flex flex-wrap w-full my-5 lg:hidden */}
                <Disclosure.Panel className='hidden'>
                  <>
                    {navigation.map((item) => (
                      <Link key={item.href} href='/'>
                        <a className='w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700'>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <LoginLogoutNavBar classes='w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700' />
                    {/* <Link href='/'>
                      <a className='w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5'>
                        Get Started
                      </a>
                    </Link> */}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='hidden items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu) => (
              <li className='mr-3 nav__item' key={menu.href}>
                <Link href={menu.href}>
                  <a className='inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800'>
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
            <li className='mr-3 nav__item' key='auth'>
              <LoginLogoutNavBar classes='inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800' />
            </li>
          </ul>
        </div>

        <div className='hidden mr-3 space-x-4 lg:flex nav__item'>
          {/* <Link href='/'>
            <a className='px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5'>
              Get Started
            </a>
          </Link> */}

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default TopNavigationBar;