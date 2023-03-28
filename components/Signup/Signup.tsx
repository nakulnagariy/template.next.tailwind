import React from 'react';
import { Form, Input, Button, message } from 'antd';

interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

type Props = {
  onSuccess: (key: string) => void;
};

const Signup: React.FC<Props> = ({ onSuccess }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const showSuccessMessage = () => {
    messageApi.info(`Signup successfully, Please login now.`);
  };

  const showWarningMessage = () => {
    messageApi.warning(`Something went wrong, please try again.`);
  };

  const handleSubmit = (data: SignupFormData) => {
    const { email, password } = data;
    fetch('http://localhost:8080/signup', {
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
          onSuccess("login");
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

        <Form.Item
          label='Confirm Password'
          name='confirmPassword'
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
