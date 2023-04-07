import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';

const DynamicLogout = dynamic(() => import('../Logout/Logout'), {
  loading: () => <p>loading...</p>,
});

interface LoginLogoutNavBarProps {
  classes: string;
}

const LoginLogoutNavBar: React.FC<LoginLogoutNavBarProps> = ({ classes }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const authorization = Cookies.get('Authorization');
  useEffect(() => {
    if (!!authorization) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [authorization]);

  return !isUserLoggedIn ? (
    <Link href='/auth' key='auth'>
      <a className={classes}>Login/SignUp</a>
    </Link>
  ) : (
    <DynamicLogout classes={classes}/>
  );
};

export default LoginLogoutNavBar;
