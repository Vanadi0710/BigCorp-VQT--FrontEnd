import {Button, Form, Input, List, Modal, Space, Table} from "antd";
import {Tooltip} from "chart.js";
import React, {useState} from "react";


const RequestSummon= () => {
    //table khách hàng
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
            title: 'Mã khách hành',
            dataIndex: 'customeId',
            key: 'customeId',

        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'userName',
            key: 'userName'
        },


        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
            key : 'phoneNumber',
        },
        {
            title: ' Action  ',
            dataIndex: 'action',
            key : 'action',
            render:  () => <Button  type="primary">Thông báo</Button>,
        },

    ];
    const datas = [
        {
            key: '1',
            customeId: 'CT1000',
            userName: "Quuỳnh đẹp trai",
            phoneNumber: '0338691729',

        },
        {

            key: '2',
            customeId: 'CT1000',
            userName: "Quuỳnh đẹp trai",
            phoneNumber: '0338691729',
        },
        {
            key: '3',
            customeId: 'CT1000',
            userName: "Quuỳnh đẹp trai",
            phoneNumber: '0338691729',

        },

    ];

    const data = [
        {
            key: '1',
            title: 'Macbook',
        }
    ];
    return (
        <div>
            <div className="row py-3 d-flex align-items-center">
                <div className="col-5">

                    <h5>Nhập mã sản phẩm thu hồi</h5>
                    <Input className="my-2" placeholder="Nhập mã sản phẩm ...." />
                    <div className="py-4">
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a>{item.title}</a>}
                                    />
                                </List.Item>

                            )}

                        />
                    </div>
                    <hr/>
                    <Button type="primary">Thu hồi</Button>
                </div>
                <div className="col-5 px-5">
                    <h5>Khách hàng đã từng mua</h5>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={datas} />
                    <Button type="primary">Thông báo tất cả</Button>

                </div>
            </div>

        </div>
    );
}
export default RequestSummon

