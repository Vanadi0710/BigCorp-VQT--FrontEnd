import React, {useEffect, useState} from 'react';
import { Button, Form, Input, Radio } from 'antd';
const ModalAdd = () => {
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            layout = "vertical"
        >
            <Form.Item label="Tên cơ sở "
                       rules={[
                           {
                               required: true,
                               message: 'Tên cơ sở bắt buộc phải nhập',
                           }
                       ]}
            >
                <Input placeholder="Nhập tên cơ sở..." />

            </Form.Item>
            <Form.Item
                label="Địa chỉ cơ sở"
                rules={[
                    {
                        required: true,
                        message: 'Địa chỉ bắt buộc phải nhập',
                    }
                    ]}
                >
                <Input placeholder="Nhập địa chỉ cơ sở..." />

            </Form.Item>
            <Form.Item label="Số điện thoại"
                       rules={[
                           {
                               required: true,
                               message: 'số điện thoại bắt buộc phải nhập',
                           },
                       ]}
            >
                <Input placeholder="Nhập số điện thoại ..." />

            </Form.Item>
            <Form.Item >
                <Button type="primary">Xác nhận</Button>
            </Form.Item>
        </Form>
    );
};
export default ModalAdd;