import React, {useState} from "react";
import {Button, Modal, Select, Table} from "antd";
import {billDetail} from "../../../../../utils/billDetail";

const CreateRequireFactory = () => {
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
    const data = [
        {
            key: '1',
            code: 'ST1010',
            model: 'ST1010',
            productName: 'Dell Pro',
        },
        {
            key: '2',
            code: 'ST1010',
            model: 'ST1010',
            productName: 'Dell Pro',
        },
        {
            key: '3',
            code: 'ST1010',
            model: 'ST1010',
            productName: 'Dell Pro',
        },
        {
            key: '4',
            code: 'ST1010',
            model: 'ST1010',
            productName: 'Dell Pro',
        },
    ];
    const columns = [
        // mã đơn , tên cơ sở yêu cầu , trạng thái , chi tiết , action
        {
            title: "id",
            dataIndex: "id",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "productName",
            key: "productName",
        },
        {
            title: "Model ",
            dataIndex: "model",
            key: "model",
        },


    ];
    return (
        <div>
            <div className="py-4">
                <h3>Yêu cầu nhập hàng </h3>
            </div>
            <hr/>

            <Select className="py-2"
                    showSearch
                    placeholder="chọn nhà máy sản xuất"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'A',
                            label: 'Nhà máy  A',
                        },
                        {
                            value: 'B',
                            label: 'Nhà máy  b',
                        },
                        {
                            value: 'C',
                            label: 'Nhà máy  c',
                        },
                        {
                            value: 'D',
                            label: 'Nhà máy  d',
                        },
                    ]}
            />

            <Table rowSelection={rowSelection} columns={columns} dataSource={data} className="py-2" />
            <h4>Sản phẩm đã chọn : </h4>
            {billDetail(selectedRowKeys).map((item, index) => (
                <p key={index} className="ps-3">
                    {item.productName}: {item.quantity}
                </p>
            ))}
            <Button type="primary">Xác nhận yêu cầu</Button>
        </div>
    );
}
export default CreateRequireFactory