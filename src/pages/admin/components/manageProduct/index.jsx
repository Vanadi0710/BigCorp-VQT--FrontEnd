import {Form, Select, Table, Tag} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import React from "react";

const columns = [
    {
        title: 'Hãng sản phẩm',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'nameProduct',
        key: 'nameProduct',
    },
    {
        title: 'Thao tác',
        dataIndex: 'active',
        key: 'active',
        render: (text) => <button className="btn btn-primary">{text}</button>
    },


];
const data = [
    {
        key: '1',
        name: 'Apple',
        nameProduct: 'Macbook',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ],
        content: "",
        all: "all information"
    },
    {
        key: '2',
        name: 'Apple',
        nameProduct: 'iphone',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },
    {
        key: '3',
        name: 'Apple',
        nameProduct: 'air ports',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },
    {
        key: '4',
        name: 'assus',
        nameProduct: 'product',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },
    {
        key: '1',
        name: 'samsung',
        nameProduct: 'zip',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },

];
const ManageProduct = () => {

    const onSearch = (value) => console.log(value);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }


    return (
        <Form  component={false}>
            <div>
                <h3 className='py-3'>
                    Quản lý sản phẩm
                </h3>
                <hr/>
            </div>
            <Table columns={columns} dataSource={data} size="small"
            />
        </Form>
    );
};
export default ManageProduct;
