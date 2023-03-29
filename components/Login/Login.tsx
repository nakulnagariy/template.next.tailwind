import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/router';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const showSuccessMessage = () => {
    messageApi.info(`Logged in sucessfully, redirecting to manage page.`);
  };

  const showWarningMessage = () => {
    messageApi.warning(`Something went wrong, please try again.`);
  };
  const handleSubmit = (data: LoginFormData) => {
    const { email, password } = data;
    fetch('http://localhost:8080/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        form.resetFields();
        showSuccessMessage();
        setTimeout(() => {
          router.push('/manage-expense');
        }, 2000);
      })
      .catch((error) => {
        showWarningMessage();
        console.log(error);
      });
  };

  return (
    <div>
      {contextHolder}
      <Form
        form={form}
        onFinish={handleSubmit}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
