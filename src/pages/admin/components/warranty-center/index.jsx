import React, { useState } from 'react';
import {Form, Input, InputNumber, Popconfirm, Table, Tag, Select} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
const columns = [
    {
        title: 'Mã cơ sở',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Tên cơ sở',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Trạng thái',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Xửa',
        dataIndex: 'update',
        key: 'update',
        render: (text) => <a className="btn btn-warning">{text}</a>,
    },
    {
        title: 'Xoá',
        dataIndex: 'delete',
        key: 'delete',
        render: (text) => <a className="btn btn-danger">{text}</a>,
    },
];
const data = [
    {
        key: '1',
        name: 'Cơ sở 1',
        code: 'C1',
        number: '0338691729',
        address: 'Tây Hồ - Hà Nội',
        tags: ['Đang mở cửa'],
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '2',
        code: 'C3',
        name: 'Cơ sở 1',
        number: '0338691729',
        address: 'Tây Hồ - Hà Nội',
        tags: ['Đang mở cửa'],
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '3',
        code: 'C2',
        name: 'Cơ sở 1',
        number: '0338691729',
        address: 'Tây Hồ - Hà Nội',
        tags: ['Đang mở cửa'],
        update: 'Xửa',
        delete: 'Xoá'
    },
];
const WarrantyCenterAdmin = () => {

    const onSearch = (value) => console.log(value);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <Form  component={false}>
            <div>
                <h3 className='py-3'>
                    Danh sách / trung tâm bảo hành
                </h3>
                <hr/>
                <div className="row">
                    <div className="col-2">
                        <button className="btn btn-primary py-2"><PlusOutlined />Thêm cơ sở</button>
                    </div>
                    <div className="col-2">
                        <Select
                            size = "large"
                            defaultValue="Tìm kiếm theo tên"
                            style={{
                                width: 200,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    options: [
                                        {
                                            label: 'Tìm theo tên',
                                            value: 'name',
                                        },
                                    ],
                                },
                                {
                                    options: [
                                        {
                                            label: 'Tìm theo địa chỉ',
                                            value: 'địa chỉ',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                    <div className="col-5">
                        <Search
                            placeholder="Nhập từ khoá tìm kiếm  ....."
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>

                </div>

                <hr/>
            </div>
            <Table columns={columns} dataSource={data}
            />
        </Form>
    );
};
export default WarrantyCenterAdmin;
