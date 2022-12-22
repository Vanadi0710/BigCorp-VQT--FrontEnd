import {Input, Form, Select, Button, Tag, Table,} from 'antd';

import React from "react";
import './style.scss';

const columns = [
    {
        title: 'Mã sản phẩm',
        dataIndex: 'code',
        key: 'code',
        render: (text) => <Button>{text}</Button>,
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Tên cơ sở',
        dataIndex: 'name_factory',
        key: 'name_factory',
        render: (text) => <a>{text}</a>,
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
        title: 'Số lượng',
        dataIndex: 'number',
        key: 'number',

    },
    {
        title: 'Chi tiết',
        dataIndex: 'information',
        key: 'information',
        render: (text) => <Button>{text}</Button>,
    },
];

const datas = [
    {
        key: 'sp1',
        code: 'MB1',
        name: 'Macbook',
        name_factory: 'cơ sở 1',
        tags: ['Đang bán'],
        number: '2',
        information: 'chi tiết',
    },
    {
        key: 'sp2',
        code: 'MB1',
        name: 'Macbook',
        name_factory: 'cơ sở 1',
        tags: ['Đang bán'],
        number: '2',
        information: 'chi tiết',
    },
    {
        key: 'sp3',
        code: 'MB1',
        name: 'Macbook',
        name_factory: 'cơ sở 1',
        tags: ['Đang bán'],
        number: '2',
        information: 'chi tiết',
    },
    {
        key: 'sp4',
        code: 'MB1',
        name: 'Macbook',
        name_factory: 'cơ sở 1',
        tags: ['Đang bán'],
        number: '2',
        information: 'chi tiết',
    }
];

const CheckingProduct = () => {
    const onSearch = (value) => console.log(value);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }


    return (
        <div className="">
            <h2>Checking sản phẩm</h2>
                <hr/>
                <Form >
                    <div className="row py-3">
                    <div className="col-5 ">
                        <h4>Nhập mã sản phẩm:</h4>
                        <Input size="large" placeholder="Nhập từ khoá tìm kiếm sản phẩm...." />

                    </div>
                        <div className="col-2">
                            <h4 className="lable-search">:</h4>
                            <Select
                                size = "large"
                                defaultValue="Search theo tên"
                                style={{
                                    width: 200,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        options: [
                                            {
                                                label: 'Search theo mã',
                                                value: 'code',
                                            },
                                        ],
                                    },
                                    {
                                        options: [
                                            {
                                                label: 'Search theo tên',
                                                value: 'name',
                                            },
                                        ],
                                    },

                                ]}
                            />
                        </div>
                        <div className="col-2">
                            <h4 className="lable-search">:</h4>
                            <Select
                                size = "large"
                                defaultValue="distributors"
                                style={{
                                    width: 200,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        options: [
                                            {
                                                label: 'Cơ sở sản xuất',
                                                value: 'factories',
                                            },
                                        ],
                                    },
                                    {
                                        options: [
                                            {
                                                label: 'Trung tâm bảo hành',
                                                value: 'warranty',
                                            },
                                        ],
                                    },
                                    {
                                        options: [
                                            {
                                                label: 'Đại lý phân phối',
                                                value: 'distributors',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </div>
                    <div className="col-3 ">
                        <h4 className="lable-search">:</h4>
                        <Button size="large" type="primary">Checking</Button>

                    </div>

                    </div>
                </Form>
            <hr/>
            <Table columns={columns} dataSource={datas}/>


        </div>
    );
}
export default CheckingProduct