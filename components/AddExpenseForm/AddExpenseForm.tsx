import React, { useState } from 'react';
import { Form, Input, Select, Button, DatePicker, InputNumber } from 'antd';
import { FormInstance } from 'antd/lib/form';

const { Option } = Select;

type Category = {
  id: number;
  name: string;
};

type FormData = {
  amount: number;
  description: string;
  category: string;
  comment: string;
  date: string;
};

type Props = {
  categories: Category[];
};

const AddExpenseForm: React.FC<Props> = ({ categories }) => {
  const [form] = Form.useForm();
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (formData: FormData) => {
    // Handle form submission here
    console.log(formData);
  };

  const handleFormFinishFailed = (errorInfo: any) => {
    setFormError(errorInfo.errorFields[0].errors[0]);
  };

  return (
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
        className='w-full lg:w-1/7 md:w-1/2'
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
        className='w-full lg:w-1/7 md:w-1/2'
        rules={[{ required: true, message: 'Please enter a description' }]}>
        <Input size='large' className='w-full' />
      </Form.Item>

      <Form.Item
        label='Date'
        name='date'
        className='w-full lg:w-1/7 md:w-1/2'
        rules={[{ required: true, message: 'Please select a date' }]}>
        <DatePicker size='large' className='w-full' allowClear autoFocus format={"DD/MM/YYYY"}/>
      </Form.Item>

      <Form.Item
        label='Category'
        name='category'
        className='w-full lg:w-1/7 md:w-1/2'
        rules={[{ required: true, message: 'Please select a category' }]}>
        <Select size='large' className='w-full'>
          {categories.map((category) => (
            <Option key={category.id} value={category.name}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label='Comment' 
        className='w-full lg:w-1/7 md:w-1/2 dark:text-slate-100' 
        name='comment' 
        rules={[{ required: false }]}>
        <Input size='large' className='w-full' />
      </Form.Item>

      <Form.Item 
        className='w-full flex-wrap mt-10 lg:w-1/7 md:w-1/2'>
        <Button
          type='ghost'
          htmlType='submit'
          className='w-full text-slate-100 bg-slate-800 whitespace-normal h-auto py-3 dark:text-slate-800 dark:bg-slate-100'>
          Add new expense
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddExpenseForm;
