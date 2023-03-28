import React, { useState, useEffect } from 'react';
import {
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Select,
  Space,
} from 'antd';
import type { SelectProps } from 'antd';
import dayjs from 'dayjs';
import Cookies from "js-cookie";

interface Item {
  key: string;
  description: string;
  amount: number;
  comment: string;
  date: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: string;
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  let inputNode;
  if (dataIndex === 'amount') {
    inputNode = <InputNumber />;
  } else {
    inputNode = <Input />;
  }

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ManageYourExpense: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const authorization = Cookies.get("Authorization");
  
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8080/expense',{
        headers: {
          "Authorization": `Bearer ${authorization}`,
        }
      })
        .then((res) => res.json())
        .then((res) => {
          const tableData: any = [];
          res.data.map((expense: any) => {
            const { _id, amount, description, date, category, comment, updatedAt, user } = expense;
            tableData.push({
              key: _id,
              description: description,
              amount: amount,
              comment: comment,
              date: dayjs(date).format('DD/MM/YYYY')})
          });
          setData(tableData);
        })
        .catch((error) => {
          // showWarningMessage();
          console.log(error);
        });
    }
    fetchData()
  }, [])

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      description: '',
      amount: '',
      comment: '',
      date: '',
      category: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    console.log('saving your changes')
  };

  const columns = [
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: '10%',
      editable: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '25%',
      editable: true,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      width: '20%',
      editable: true,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: '15%'
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    let newInputType = '';
    switch (col.dataIndex) {
      case 'amount':
        newInputType = 'number';
        break;
      case 'date':
        newInputType = 'date';
        break;
      case 'category':
        newInputType = 'dropdown';
        break;
      default:
        newInputType = 'text';
        break;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: newInputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        className='bg-slate-100 text-slate-800 dark:text-slate-100 dark:bg-slate-800'
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName='editable-row'
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default ManageYourExpense;
