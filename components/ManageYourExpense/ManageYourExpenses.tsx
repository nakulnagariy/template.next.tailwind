import React, { useState, useEffect } from 'react';
import { message, Modal, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ExclamationCircleFilled, EditOutlined,  } from '@ant-design/icons';
import ExpenseModal from '../Modal/Modal';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import {
  showDeleteMessage,
  showExpenseFetchSuccessMessage,
  showSomethingWentWrongMessage,
  showUnautorizedMessage,
} from '../utils/util';
import { Item } from '../../types';
import Error from 'next/error';
import { DELETE_CONFIRM, DELETE_CONFIRM_DESC } from '../constant/constant';
import { DeleteOutlined } from '@ant-design/icons/lib/icons';
const { confirm } = Modal;
const { Title } = Typography;

const ManageYourExpense: React.FC = () => {
  const [data, setData] = useState([]);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);
  const authorization = Cookies.get('Authorization');
  const [editExpenseID, setEditExpenseID] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpenseAdded, setIsExpenseAdded] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const handleEdit = (record: any) => {
    const { key = '' } = record;
    setEditExpenseID(key);
    setIsModalOpen(!isModalOpen);
  };
  const handleDelete = async (record: any) => {
    const { key = '' } = record;
    fetch(`http://localhost:8080/expense/${key}`, {
      method: 'DELETE',
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
        fetchData();
        showDeleteMessage(messageApi);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  const handleExpenseAdded = (isExpenseAdded: boolean) => {
    setIsExpenseAdded(isExpenseAdded);
  };

  const showDeleteConfirm = (record: any) => {
    confirm({
      title: DELETE_CONFIRM,
      icon: <ExclamationCircleFilled />,
      content: DELETE_CONFIRM_DESC,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete(record);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

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

  const columns: ColumnsType<Item> = [
    {
      key: 'amount',
      title: 'Amount',
      dataIndex: 'amount',
      width: '20%',
    },
    {
      key: 'sescription',
      title: 'Description',
      dataIndex: 'description',
      width: '25%',
    },
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date',
      width: '15%',
    },
    {
      key: 'category',
      title: 'Category',
      dataIndex: 'category',
      width: '20%',
    },
    {
      key: 'comment',
      title: 'Comment',
      dataIndex: 'comment',
      width: '10%',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: '10%',
      render: (_: any, record) => (
        <>
          <Typography.Link className="mr-2" onClick={() => handleEdit(record)}>
            <EditOutlined />
          </Typography.Link>
          <Typography.Link onClick={() => showDeleteConfirm(record)}>
            <DeleteOutlined />
          </Typography.Link>
        </>
      ),
    },
  ];

  const fetchData = () => {
    fetch('http://localhost:8080/expense', {
      headers: {
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
        const tableData: any = [];
        data.map((expense: any) => {
          const {
            _id,
            amount,
            description,
            date,
            category,
            comment = '-',
          } = expense;
          tableData.push({
            key: _id,
            description: description,
            amount: amount,
            comment: comment,
            category: category,
            date: dayjs(date).format('DD/MM/YYYY'),
          });
        });
        showExpenseFetchSuccessMessage(messageApi);
        setData(tableData);
        setTotalExpenseAmount(res.totalExpenseAmount);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [isModalOpen, isExpenseAdded]);

  const renderSummary = () => (
    <Table.Summary fixed>
      <Table.Summary.Row>
        <Table.Summary.Cell index={0}><Title level={3}>{totalExpenseAmount}</Title></Table.Summary.Cell>
        <Table.Summary.Cell index={1}><Title level={5}>This is a total of all expenses.</Title></Table.Summary.Cell>
      </Table.Summary.Row>
    </Table.Summary>
  )
  return (
    <div className='manage-expense-wrapper'>
      {contextHolder}
      {isModalOpen && (
        <ExpenseModal
          isModalOpen={isModalOpen}
          handleModal={handleModal}
          expenseID={editExpenseID}
        />
      )}
      <div className='w-11/12 py-4'>
        <AddExpenseForm isDataAdded={handleExpenseAdded} />
      </div>
      <Table
        className='bg-slate-100 text-slate-800 dark:text-slate-100 dark:bg-slate-800'
        columns={columns}
        dataSource={data}
        bordered
        summary={renderSummary}
      />
    </div>
  );
};

export default ManageYourExpense;
