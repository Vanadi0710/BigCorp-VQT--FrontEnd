import {Button, Modal, Table} from "antd";
import React, {useState} from "react";
import Search from "antd/es/input/Search";

const WarrantyComponent = () => {
    const onSearch = (value) => console.log(value);
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
    const columns = [
        {
            title: 'Mã yêu cầu',
            dataIndex: 'code',
        },
        {
            title: 'Trung tâm',
            dataIndex: 'nameFactory',
        },
        {
            title: 'Ngày yêu cầu',
            dataIndex: 'date',
        },
        {
            title: 'Loại yêu cầu',
            dataIndex: 'class',
        },
        {
            title: 'Trang thái',
            dataIndex: 'status',
        },
        {
            title: 'Thông tin',
            render: () => <Button onClick={showModal}>chi tiết</Button>
        },
        {
            title: 'Action',
            render: () => <Button type="primary">Xác nhận</Button>
        },
        {
            title: 'Action',
            render: () => <Button type="primary" danger>Cancel</Button>
        },

    ];
    const data = [
        {
            key: '1',
            code: 'ST100',
            nameFactory: 'cơ sở A',
            date: '19/10/2001',
            class: 'Hàng bảo hành xong',
            status: 'chưa xác nhận',

        },
        {
            key: 'ST100',
            code: 'John Brown',
            nameFactory: 'cơ sở A',
            date: '19/10/2001',
            class: 'Hàng bảo hành xong',
            status: 'chưa xác nhận',

        },
        {
            key: 'ST100',
            code: 'John Brown',
            nameFactory: 'cơ sở A',
            date: '19/10/2001',
            class: 'Hàng bảo hành xong',
            status: 'chưa xác nhận',

        },
        {
            key: 'ST100',
            code: 'John Brown',
            nameFactory: 'cơ sở A',
            date: '19/10/2001',
            class: 'Không bảo hành được -> cơ sở sản xuất',
            status: 'chưa xác nhận',

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
            <div className="col-3 py-4">
                <Search placeholder="Nhập mã đơn muốn search" onSearch={onSearch} enterButton />
            </div>
            {/*popup đone hàng*/}
            <Modal title="Chi tiết đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table  columns={columnsModels} dataSource={dataModels} pagination={false}/>
            </Modal>
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    );
}
export  default WarrantyComponent;