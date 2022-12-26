import {Button, Form, Input, InputNumber, Modal, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";
import React, { useState } from 'react';
import { Table } from 'antd';

const data = [
    {
        key: '1',
        code: 'ST1010',
        codeName: 'E20',
        date: '15/10/2023',
        status: 'Chưa xác nhận',

    },
    {
        key: '2',
        code: 'ST1010',
        codeName: 'E20',
        date: '15/10/2023',
        status: 'Chưa xác nhận',

    },
    {
        key: '3',
        code: 'ST1010',
        codeName: 'E20',
        date: '15/10/2023',
        status: 'Chưa xác nhận',

    },
    {
        key: '4',
        code: 'ST1010',
        codeName: 'E20',
        date: '15/10/2023',
        status: 'Chưa xác nhận',

    },
    {
        key: '5',
        code: 'ST1010',
        codeName: 'E20',
        date: '15/10/2023',
        status: 'Chưa xác nhận',

    }

];
const ListRequirement = () => {
    //model open info đơn hàng
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
    const columns = [
        // mã đơn , tên cơ sở yêu cầu , trạng thái , chi tiết , action
        {
            title: 'Mã đơn',
            dataIndex: 'code',
            key: 'code',

        },
        {
            title: 'Tên cơ sở yêu cầu',
            dataIndex: 'codeName',
            key: 'codeName'
        },

        {
            title: 'Ngày tạo yêu cầu',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Trạng thái  ',
            dataIndex: 'status',
            key: 'status',
        },

        {
            title: ' Thông tin  ',
            dataIndex: 'info',
            key : 'info',
            render:  () => <Button type="primary" onClick={showModal}>chi tiết</Button>,
        },
        {
            title: ' Action  ',
            dataIndex: 'action',
            key : 'action',
            render:  () => <Button  danger>Xác nhận</Button>,
        },

    ];
    const columnsModels = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Model  ',
            dataIndex: 'model',
            key: 'model',

        },

        {
            title: 'Số lượng',
            dataIndex: 'number',
            key: 'number',
        },
    ];
    const dataModels = [
        {
            key: '1',
            name: 'Macbook',
            model: 'MB1',
            number: '3',

        }
    ];
    return (
        <div>
            <div className="py-4">
                <h3>Danh sách yêu cầu</h3>
            </div>
            <hr/>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            <Button type="primary">Xác nhận yêu cầu</Button>
            <Modal title="Chi tiết đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table  columns={columnsModels} dataSource={dataModels} pagination={false}/>
            </Modal>

        </div>
    );


}
export default  ListRequirement