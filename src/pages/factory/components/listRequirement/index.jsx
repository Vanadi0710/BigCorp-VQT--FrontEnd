import {Button, Form, Input, InputNumber, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";
import React, { useState } from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Tên yêu cầu',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Mặt hàng',
        dataIndex: 'product',
        key: 'product'
    },

    {
        title: 'Loại yêu cầu',
        dataIndex: 'class',
        key: 'class',
        // render: (text) => {
        //     if (text === 'Nhập hàng') {
        //         <a>{text}</a>
        //     }
        //     else  {
        //         <a style="color: red">{text}</a>
        //     }
        // }

    },
    {
        title: ' Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: ' Thông tin  ',
        dataIndex: 'action',
        key : 'action',
        render:  () => <Button type="primary"> chi tiết</Button>,


    },
];
const data = [
    {
        key: '1',
        name: 'Nhập hàng',
        product: 'Macbook',
        class: 'Nhập hàng',
        status: 'Chưa xác nhận',

    },
    {
        key: '2',
        name: 'Nhập hàng',
        product: 'Macbook',
        class: 'Nhập hàng',
        status: 'Chưa xác nhận',

    },
    {
        key: '3',
        name: 'xuất hàng',
        product: 'Macbook',
        class: 'Nhập hàng',
        status: 'Chưa xác nhận',

    },
    {
        key: '4',
        name: 'Xuất hàng',
        product: 'Macbook',
        class: 'Nhập hàng',
        status: 'Chưa xác nhận',

    },
    {
        key: '5',
        name: 'Nhập hàng',
        product: 'Macbook',
        class: 'Nhập hàng',
        status: 'Chưa xác nhận',

    }

];
const ListRequirement = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <div>
            <div className="py-4">
                <h3>Danh sách yêu cầu</h3>
            </div>
            <hr/>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

        </div>
    );


}
export default  ListRequirement