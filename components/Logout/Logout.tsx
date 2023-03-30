import React from 'react';
import { Button, message } from 'antd';
import { useRouter } from 'next/router';
import {
  showLogoutMessage,
  showSomethingWentWrongMessage,
} from '../utils/util';
import Cookies from 'js-cookie';
import Link from 'next/link';

const Logout: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const authorization = Cookies.get('Authorization');
  const handleError = (error: any) => {
    showSomethingWentWrongMessage(messageApi);
  };

  const handleLogout = async () => {
    fetch('http://localhost:8080/logout', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        Cookies.remove('Authorization')
        showLogoutMessage(messageApi);
        router.push('/auth');
      })
      .catch((error) => {
        handleError(error);
      });
  };

  return (
    <>
      {contextHolder}
      <Link href="/auth" passHref legacyBehavior>
        <a onClick={handleLogout} className='flex items-center text-md uppercase font-bold leading-snug text-slate-800 hover:opacity-75 dark:text-slate-100'>
        Logout
        </a>
      </Link>
    </>
  );
};

export default Logout;
