import React from 'react';
import {Button, Form, Space, Table, Tag} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import {useNavigate} from "react-router-dom";
const columns = [
    {
        title: 'Mã sản phẩm',
        dataIndex: 'code',
        key: 'code',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Số lượng',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Tag',
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
        title: 'Ngày nhận sản phẩm',
        key: 'date',
        dataIndex: 'date',

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
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản xuất'],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Thu hồi'],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },
    {
        key: '1',
        code: 'Macbook',
        name: 'Macbook pro 2017',
        number: '2',
        tags: ['Sản Xuất',],
        date: '2016-05-03',
        update: 'Xửa',
        delete: 'Xoá'
    },

];
const Product = () => {
    const onSearch = (value) => console.log(value);
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Form  component={false}>
            <div>
                <h3 className='py-3'>
                    Cơ sở sản xuất / kho
                </h3>
                <hr/>
                <div className="row">
                    <div className="col-2">
                        <Button type="primary" icon={<PlusOutlined />} size='large' key='/product/createProduct' onClick={({key}) => {
                            navigate(key);
                        }}>Thêm sản phẩm</Button>
                    </div>
                    <div className="col-7">
                        <Search
                            placeholder="Nhập tên sản phẩm....."
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
}

export default Product;