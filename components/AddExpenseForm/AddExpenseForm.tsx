import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  InputNumber,
  message,
} from 'antd';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { CATEGORY } from '../constant/constant';
import {
  showExpenseAddedSuccessMessage,
  showSomethingWentWrongMessage,
  showUnautorizedMessage,
} from '../utils/util';
import { EProps, FormData } from '../../types';

const { Option } = Select;

const AddExpenseForm: React.FC<EProps> = ({ isDataAdded }) => {
  const [form] = Form.useForm();
  const [formError, setFormError] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const { theme } = useTheme();
  const authorization = Cookies.get('Authorization');
  const lebelClass = `w-full lg:w-1/7 md:w-1/2 ${theme === 'dark' ? 'text-label-dark' : 'text-label' }`

  const handleError = (error: any) => {
    if (error.statusText === 'Unauthorized') {
      showUnautorizedMessage(messageApi);
      setTimeout(() => {
        router.push('/auth');
      }, 2000);
    } else {
      showSomethingWentWrongMessage(messageApi);
    }
  };

  const handleFormSubmit = async (formData: FormData) => {
    // Handle form submission here
    const {
      amount = '',
      description = '',
      date = '',
      category = '',
      comment = '',
    } = formData;
    fetch('http://localhost:8080/expense', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify({
        amount,
        description,
        date: dayjs(date).format('YYYY-MM-DD'),
        category,
        comment,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        form.resetFields();
        showExpenseAddedSuccessMessage(messageApi);
        isDataAdded && isDataAdded(true);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleFormFinishFailed = (errorInfo: any) => {
    setFormError(errorInfo.errorFields[0].errors[0]);
  };

  return (
    <div>
      {contextHolder}
      <Form
        form={form}
        layout='inline'
        onFinish={handleFormSubmit}
        onFinishFailed={handleFormFinishFailed}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        className='w-full my-6 md:justify-around sm:justify-around'>
        <Form.Item
          label='Amount'
          name='amount'
          className={lebelClass}
          rules={[
            {
              required: true,
              message: 'Please enter an amount',
            },
            {
              type: 'number',
              message: 'Please enter a valid number',
            },
          ]}>
          <InputNumber size='large' className='w-full' />
        </Form.Item>

        <Form.Item
          label='Description'
          name='description'
          className={lebelClass}
          rules={[{ required: true, message: 'Please enter a description' }]}>
          <Input size='large' className='w-full' />
        </Form.Item>

        <Form.Item
          label='Date'
          name='date'
          className={lebelClass}
          rules={[{ required: true, message: 'Please select a date' }]}>
          <DatePicker size='large' className='w-full' />
        </Form.Item>

        <Form.Item
          label='Category'
          name='category'
          className={lebelClass}
          rules={[{ required: true, message: 'Please select a category' }]}>
          <Select size='large' className='w-full'>
            {CATEGORY.map((category) => (
              <Option key={category.id} value={category.name}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label='Comment'
          className={lebelClass}
          name='comment'
          rules={[{ required: false }]}>
          <Input size='large' className='w-full' />
        </Form.Item>

        <Form.Item className='w-full flex-wrap mt-10 lg:w-1/7 md:w-1/2'>
          <Button
            type='ghost'
            htmlType='submit'
            className='w-full text-slate-100 bg-slate-800 whitespace-normal h-auto py-3 dark:text-slate-800 dark:bg-slate-100'>
            Add new expense
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddExpenseForm;
