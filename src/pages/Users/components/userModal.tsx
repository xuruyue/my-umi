import React, { useEffect } from 'react'
import { Button, Modal, Form, Input } from 'antd';
import { ProPageHeader } from '@ant-design/pro-components';

export default function userModal( props : any ) {
    const [form] = Form.useForm();
    const { record, uerModalVisible, onFinish, handleCancel} = props;

    useEffect(() => {
        if(record === undefined) {
            form.resetFields()
        } else {
            form.setFieldsValue(record)
        }
    }, [uerModalVisible])

    const onOk = () => {
        form.submit()
    }
    const onFinishFailed = (error: any) => {
        console.log(error, 'error')
    }
    // 是只读的
    return (
        <div>
            <Modal title="Basic Modal" visible={uerModalVisible} onOk={onOk} onCancel={handleCancel} forceRender>
                <Form
                    name="basic"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="CreateTime"
                        name="create_time"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}
