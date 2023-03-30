import React, { useState } from "react";
import { Tabs } from "antd";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const { TabPane } = Tabs;

const LoginSignupTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className='flex flex-col w-full mx-auto md:w-11/12 md:mx-auto sm:w-full h-fit my-20'>
    <Tabs activeKey={activeTab} onChange={handleTabChange} className='w-10/12 mx-auto md:w-1/2 sm:w-1/2'>
      <TabPane tab="Log In" key="login">
        <Login />
      </TabPane>
      <TabPane tab="Sign Up" key="signup" >
        <Signup onSuccess={handleTabChange}/>
      </TabPane>
    </Tabs>
    </div>
  );
};

export default LoginSignupTabs;