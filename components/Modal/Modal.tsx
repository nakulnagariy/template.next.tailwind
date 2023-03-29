import React, { useRef, useState, useEffect } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
} from 'antd';
import { CATEGORY } from '../constant/constant';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import {
  showDataUpdatedMessage,
  showExpenseFetchSuccessMessage,
  showSomethingWentWrongMessage,
  showUnautorizedMessage,
} from '../utils/util';
import { useRouter } from 'next/router';
import { FormData, IExpenseModal } from '../../types';
const { Option } = Select;

const ExpenseModal: React.FC<IExpenseModal> = ({
  expenseID,
  isModalOpen,
  handleModal,
}) => {
  const [open, setOpen] = useState(isModalOpen);
  const [form] = Form.useForm();
  const [editData, setEditData] = useState<any>({});
  const authorization = Cookies.get('Authorization');
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

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

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8080/expense/${expenseID}`, {
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
        .then((res) => {
          const { data = [] } = res;
          const {
            _id,
            amount = '',
            description = '',
            date = '',
            category = '',
            comment = '',
          } = data;
          form.setFieldsValue({
            amount: amount,
            description: description,
            category: category,
            comment: comment,
            date: dayjs(date),
          });
          showExpenseFetchSuccessMessage(messageApi);
        })
        .catch((error) => {
          handleError(error);
        });
    };
    fetchData();
  }, [open]);

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
    handleModal(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    handleModal(false);
    setOpen(false);
  };

  const handleFormSubmit = async (formData: FormData) => {
    const {
      amount = '',
      description = '',
      date = '',
      category = '',
      comment = '',
    } = formData;
    fetch(`http://localhost:8080/expense/${expenseID}`, {
      method: 'PUT',
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
        showDataUpdatedMessage(messageApi);
        handleModal(false);
        form.resetFields();
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleFormFinishFailed = (errorInfo: any) => {
    // setFormError(errorInfo.errorFields[0].errors[0]);
  };

  return (
    <>
      {editData && (
        <Modal
          title='Edit your expense'
          open={open}
          onOk={handleOk}
          footer={null}
          onCancel={handleCancel}>
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
              className='w-full'
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
              className='w-full'
              rules={[
                { required: true, message: 'Please enter a description' },
              ]}>
              <Input size='large' className='w-full' />
            </Form.Item>

            <Form.Item
              label='Date'
              name='date'
              className='w-full'
              rules={[{ required: true, message: 'Please select a date' }]}>
              <DatePicker
                size='large'
                className='w-full'
                format={'DD/MM/YYYY'}
              />
            </Form.Item>

            <Form.Item
              label='Category'
              name='category'
              className='w-full'
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
              className='w-full dark:text-slate-100'
              name='comment'
              rules={[{ required: false }]}>
              <Input size='large' className='w-full' />
            </Form.Item>
            <Form.Item className='w-full flex-wrap mt-10'>
              <Button
                type='ghost'
                htmlType='submit'
                className='w-full text-slate-100 bg-slate-800 whitespace-normal h-auto py-3 dark:text-slate-800 dark:bg-slate-100'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ExpenseModal;
