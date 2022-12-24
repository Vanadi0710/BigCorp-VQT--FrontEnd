import {Button, Form, Input, InputNumber, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";
import React, { useState } from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Model ',
        dataIndex: 'model',
        key: 'model'
    },

    {
        title: ' Ngày sản xuất ',
        dataIndex: 'date',
        key: 'date',
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
        name: 'Macbook',
        model: 'MB1',
        date : '19/20/2022',


    },
    {
        key: 'number',
        name: 'Macbook',
        model: 'MB1',
        date : '19/20/2022',


    }, {
        key: '3',
        name: 'Macbook',
        model: 'MB1',
        date : '19/20/2022',


    }, {
        key: '4',
        name: 'Macbook',
        model: 'MB1',
        date : '19/20/2022',


    },

];
const ImportStore = () => {
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
                <h3>Nhập vào kho </h3>
            </div>
            <hr/>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{pageSize: 7}}/>
            <Button type="primary">Nhập hàng</Button>
            <div>
                <h3>Sản phẩm đã chọn : </h3>
            </div>

        </div>
    );


}
export default  ImportStore


