import React, { useState } from "react";
import { Badge, Button, Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
  HiMenu,
} from "react-icons/hi";
const SideNav = () => {
    const [collapsed, setCollapsed] = useState(false)

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

  return (
    <div>
      <Sidebar
        aria-label='Sidebar with call to action button example'
        className='dark:text-gray-100'
        collapsed={collapsed}
        >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href='#' icon={HiMenu} onClick={handleCollapse}>
              Menu
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiViewBoards}>
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.CTA>
          <div className='mb-3 flex items-center'>
            <Badge color='yellow'>Beta</Badge>
            <Button
              aria-label='Close'
              className='-mx-1.5 -my-1.5 ml-auto !h-6 !w-6 bg-transparent !p-1 text-blue-900 hover:bg-blue-200 dark:!bg-blue-900 dark:text-blue-200 dark:hover:!bg-blue-800'
              data-collapse-toggle='dropdown-cta'>
              <span className='sr-only'>Close</span>
              <svg
                className='h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Button>
          </div>
          <p className='mb-3 text-sm text-blue-900 dark:text-blue-400'>
            Preview the new Flowbite dashboard navigation! You can turn the new
            navigation off for a limited time in your profile.
          </p>
          <a
            className='text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
            href='#'>
            Turn new navigation off
          </a>
        </Sidebar.CTA>
      </Sidebar>
    </div>
  );
};

export default SideNav;
