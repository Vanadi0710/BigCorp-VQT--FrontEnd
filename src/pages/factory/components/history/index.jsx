import {Button, Modal, Table} from "antd";
import React, {useState} from "react";

const History = () => {
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
    const dataSource = [
        {
            key: '1',
            code: 'ST1000',
            nameProduct: 'E20',
            date: '19/10/2001',
            note: 'đã xác nhận'

        },
        {
            key: '2',
            code: 'ST1000',
            nameProduct: 'E20',
            date: '19/10/2001',
            note: 'đã xác nhận'
        },
        {
            key: '3',
            code: 'ST1000',
            nameProduct: 'E20',
            date: '19/10/2001',
            note: 'đã xác nhận'
        }

    ];

    const columns = [
        {
            title: 'Mã yêu cầu',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'cơ sở yêu cầu',
            dataIndex: 'nameProduct',
            key: 'nameProduct',
        },
        {
            title: 'chi tiết đơn',
            dataIndex: 'info',
            key: 'info',
            render: () => <Button onClick={showModal}>Chi tiết</Button>
        },
        {
            title: 'Ngày xác nhận ',
            dataIndex: 'date',
            key: 'date',

        },
        {
            title: 'Ghi  chú  ',
            dataIndex: 'note',
            key: 'note',

        },

    ];
    // data popup
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
                    <h3>Lịch sử yêu cầu</h3>
                    <hr/>
                </div>
                <div>
                    <Table dataSource={dataSource} columns={columns} />
                    <Modal title="Chi tiết đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <Table  columns={columnsModels} dataSource={dataModels} pagination={false}/>
                    </Modal>
                </div>
            </div>
        );

}
export default History;