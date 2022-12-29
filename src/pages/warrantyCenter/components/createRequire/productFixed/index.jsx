import {Button, Modal, Select, Table} from "antd";
import React, {useState} from "react";
import DataModal from "../modal";


const ProductFixed = () => {
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
            title: 'Id',

        },
        {
            title: 'Mã sản phẩm',
            dataIndex: 'code',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
        },
        {
            title: 'Ngày chuyển tới',
            dataIndex: 'date',
        },
        {
            title: 'Ngày bảo hành xong ',
            dataIndex: 'dateFixed',
        },
        {
            title: 'Cơ sở chuyển tới',
            dataIndex: 'distributor',
        },
        {
            title: 'Chi tiết ',
            render: () => <Button type="primary" onClick={showModal}>chi tiết</Button>
        },
    ];
    const data = [
        {
            key: '1',
            code: 'mb1',
            name: 'Macbook',
            date: '19/10/2001',
            distributor: 'E20',

        },
        {
            key: '2',
            code: 'mb1',
            name: 'Macbook',
            date: '19/10/2001',
            distributor: 'E20',

        },
        {
            key: '3',
            code: 'mb1',
            name: 'Macbook',
            date: '19/10/2001',
            distributor: 'E20',

        },
        {
            key: '4',
            code: 'mb1',
            name: 'Macbook',
            date: '19/10/2001',
            distributor: 'E20',

        },


    ];

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
            <Table rowSelection={rowSelection}
                   columns={columns}
                   dataSource={data}
            />
            <hr/>
            <h3>sản phẩm đã chọn: </h3>
            <div className="row py-3">
                <div className="col-2">
                    <Select
                        labelInValue
                        style={{
                            width: 200,
                        }}
                        options={[
                            {
                                value: "A",
                                label: "Đại lý A",
                            },
                            {
                                value: "B",
                                label: "Đại ký B ",
                            },
                        ]}
                        placeholder="chọn đại lý trả hàng"
                        />
                </div>
                <div className="col-2">
                    <Button type="primary" >Gửi trả hàng</Button>
                </div>
            </div>
            <Modal title="Chi tiết bảo hành" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <DataModal/>
            </Modal>



        </div>

    );
}
export default  ProductFixed