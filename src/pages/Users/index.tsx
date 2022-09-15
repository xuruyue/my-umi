import React, { useState } from 'react';
import { Button, Space, Table, Popconfirm, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { connect } from 'umi';
import UserModal from './components/userModal';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[]
}


function user({ users, dispatch }) {
  const [uerModalVisible, setUerModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);

  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'CreateTime',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => { handlerEdit(record) }}>Edit</a>&nbsp;&nbsp;&nbsp;
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a onClick={() => { handlerDelete(record) }}>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const confirm = () => {
    const { id } = record
    dispatch({
      type: 'users/delete',
      payload: { id }
    });
  };
  
  const cancel = () => {
    message.error('Click on No');
  };
  const handlerEdit = (record: any) => {
    setRecord(record)
    setUerModalVisible(true)
  }
  const handlerDelete = (record: any) => {
    setRecord(record)
  }
  const handleCancel = () => {
    setUerModalVisible(false)
  }
  const handleOk = (value: any) => {
    setUerModalVisible(false)
  }
  const handlerAdd = () => {
    setRecord(undefined)
    setUerModalVisible(true)
  }
  const onFinish = (value: any) => {
    if(record === undefined) {
      dispatch({
        type: 'users/add',
        payload: {
          value
        }
      });
    } else {
      const { id } = record;
      dispatch({
        type: 'users/edit',
        payload: {
          id,
          value
        }
      });
    }
    setUerModalVisible(false)
  }
  return (
    <div className="user-table">
      <Button type="primary" style={{marginBottom: '15px'}} onClick={handlerAdd}>添加</Button>
      <Table columns={columns} dataSource={users.data} rowKey="id" />
      <UserModal uerModalVisible={uerModalVisible} handleOk={handleOk} handleCancel={handleCancel} record={record} onFinish={onFinish} />
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

// model 中返回的值就是 model 的 namespace; 所以我们可以通过方法从 namespace 中获取
// 使用 connect 绑定这个 仓库
export default connect(mapStateToProps)(user);