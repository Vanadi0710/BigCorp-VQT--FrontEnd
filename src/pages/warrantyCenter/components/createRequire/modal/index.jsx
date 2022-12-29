import {Modal, Table} from "antd";
import React from "react";

const DataModal = () => {
    const colums = [
        {
            title: 'tên khách hàng',
            dataIndex: 'useName',
            key: 'name'
        },
        {
            title: 'lý do bảo hành ',
            dataIndex: 'note',
            key: 'note'
        }
    ];
    const data = [
        {
            key: '1',
            useName: 'Lê xuân Quhnhf',
            note: "máy tính hỏng màn hình"
        },

    ];
    return (
        <div>
            <Table columns={colums} dataSource={data} pagination={false}/>

        </div>
    );
}
export default DataModal;