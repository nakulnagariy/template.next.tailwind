import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

const TopNavigationBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className='w-8 h-8 ml-2 text-yellow-500 '
          role='button'
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-8 h-8 ml-2 text-gray-900 '
          role='button'
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div>
      <Navbar fluid className='fixed top-0 left-0 right-0 z-10 dark:bg-red-800'>
        <Navbar.Brand href='/'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-gray-100'>
            Flowbite
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2 dark:text-gray-100'>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt='User settings'
                img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                rounded
              />
            }>
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
          {renderThemeChanger()}
        </div>
        <Navbar.Collapse>
          <Link href={"/"}>
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href={"/about"}>
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
          <Link href={"/contact"}>
            <a className={router.pathname === "/contact" ? "active" : ""}>
              Contact
            </a>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavigationBar;
