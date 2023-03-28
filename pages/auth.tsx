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
    <div className='flex flex-col w-11/12 mx-auto h-fit my-20'>
    <Tabs activeKey={activeTab} onChange={handleTabChange} className='w-1/2 mx-auto'>
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