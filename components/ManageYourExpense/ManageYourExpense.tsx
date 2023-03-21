import React, { useState } from 'react';
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

interface Item {
  key: string;
  description: string;
  amount: number;
  comment: string;
  date: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    description: `Test data ${i}`,
    amount: 232,
    comment: `London Park no. ${i}`,
    date: dayjs().format('DD/MM/YYYY'),
  });
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
  switch (dataIndex) {
    case 'amount':
      inputNode = <InputNumber />;
      break;
    default:
      inputNode = <Input />;
      break;
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
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

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
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
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
      title: 'Category',
      dataIndex: 'category',
      width: '20%',
      render: (_: any, record: Item) => {
        const options: SelectProps['options'] = [];

        for (let i = 10; i < 36; i++) {
          options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
          });
        }

        const handleChange = (value: string[]) => {
          console.log(`selected ${value}`);
        };
        const editable = isEditing(record);

        const category: SelectProps['options'] = [
          { label: 'a10', value: 'a10' },
          { label: 'c12', value: 'c12' },
        ];
        const selectedCat = category.map((item) => item.label);
        return editable ? (
          <Space style={{ width: '100%' }} direction='vertical'>
            <Select
              mode='multiple'
              allowClear
              style={{ width: '100%' }}
              placeholder='Please select'
              defaultValue={['a10', 'c12']}
              onChange={handleChange}
              options={options}
            />
          </Space>
        ) : (
          <Typography.Text>{selectedCat.join(',')}</Typography.Text>
        );
      },
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
      width: '15%',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);

        return editable ? (
          <DatePicker defaultValue={dayjs()} format={'DD/MM/YYYY'} />
        ) : (
          <Typography.Text>{dayjs().format('DD/MM/YYYY')}</Typography.Text>
        );
      },
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
