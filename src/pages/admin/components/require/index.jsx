import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const Require = () => {

    return (
        <>
            <div className="py-5">
                <h3>Tạo yêu cầu sản xuất sản phẩm</h3>
                <hr/>
            </div>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

            >

                <Form.Item label="Nhập mã sản phẩm">
                    <Input placeholder="Nhập mã sản phẩm..." size="large"/>
                </Form.Item>
                <Form.Item label="Nhập tên sản phẩm ">
                    <Input placeholder="Nhập tên sản phẩm..." size="large"/>
                </Form.Item>
                <Form.Item label="Chọn cơ sở sản xuất">
                    <Select>
                        <Select.Option value="factoryA">Cơ sở xản xuất A</Select.Option>
                        <Select.Option value="factoryB">Cơ sở xản xuất B</Select.Option>
                        <Select.Option value="factoryC">Cơ sở xản xuất C</Select.Option>
                        <Select.Option value="factoryD">Cơ sở xản xuất D</Select.Option>
                        <Select.Option value="factoryE">Cơ sở xản xuất E</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Date dự kiến ">
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Số lượng">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Ghi chú">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Ảnh sản phẩm" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Hoạt động ">
                    <Button>Gửi yêu cầu</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Require