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
      className='flex items-center justify-between my-6'>
      <Form.Item
        label='Amount'
        name='amount'
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
        <InputNumber size='large' style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label='Description'
        name='description'
        rules={[{ required: true, message: 'Please enter a description' }]}>
        <Input size='large' style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label='Category'
        name='category'
        rules={[{ required: true, message: 'Please select a category' }]}>
        <Select size='large' style={{ width: '100%' }}>
          {categories.map((category) => (
            <Option key={category.id} value={category.name}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label='Comment' name='comment' rules={[{ required: false }]}>
        <Input size='large' style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label='Date'
        name='date'
        rules={[{ required: true, message: 'Please select a date' }]}>
        <DatePicker size='large' style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item className='mt-6'>
        <Button
          type='ghost'
          htmlType='submit'
          size='large'
          style={{ width: '100%' }}
          className='text-slate-100 bg-slate-800 h-14 dark:text-slate-800 dark:bg-slate-100'>
          Add new expense
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddExpenseForm;
