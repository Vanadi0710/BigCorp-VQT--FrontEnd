import React from 'react';
import {Button, Table} from 'antd';
const columns = [

    {
        title: 'ID đơn hàng',
        dataIndex: 'Id',
        render: (text) => <a className="text-underline">{text}</a>,
    },
    {
        title: 'Loại đơn hàng',
        dataIndex: 'class',
    },
    {
        title: 'Nơi gửi',
        dataIndex: 'addressFrom',
    },
    {
        title: 'Ngày gửi',
        dataIndex: 'date',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (text) => <Button type="primary">{text}</Button>
    },
    {
        title: 'Cancel',
        dataIndex: 'cancel',
        render: (text) => <Button type="primary" danger>{text}</Button>
    },
    {
        title: 'Ghi chú ',
        dataIndex: 'note',
    },
];
const data = [
    {
        key: '1',
        Id: 'ST1108',
        class: 'Bảo hành',
        addressFrom: 'Đại lý A',
        date: '19/10/2001',
        action: 'xác nhận',
        cancel: 'từ chối',
        note: 'Hàng dễ vỡ , xin nhẹ tay'
    },
    {
        key: '2',
        Id: 'ST1108',
        class: 'Bảo hành',
        addressFrom: 'Đại lý A',
        date: '19/10/2001',
        action: 'xác nhận',
        cancel: 'từ chối',
        note: 'Hàng dễ vỡ , xin nhẹ tay'
    },
    {
        key: '3',
        Id: 'ST1108',
        class: 'Bảo hành',
        addressFrom: 'Đại lý A',
        date: '19/10/2001',
        action: 'xác nhận',
        cancel: 'từ chối',
        note: 'Hàng dễ vỡ , xin nhẹ tay'
    },
    {
        key: '4',
        Id: 'ST1108',
        class: 'Bảo hành',
        addressFrom: 'Đại lý A',
        date: '19/10/2001',
        action: 'xác nhận' ,
        cancel: 'từ chối',
        note: 'Hàng dễ vỡ , xin nhẹ tay'
    },
    {
        key: '5',
        Id: 'ST1108',
        class: 'Bảo hành',
        addressFrom: 'Đại lý A',
        date: '19/10/2001',
        action: 'xác nhận',
        cancel: 'từ chối',
        note: 'Hàng dễ vỡ , xin nhẹ tay'
    },

];

const ComfirmProduct = () => {
    return (
        <div>
            <div className="py-4">
                <h3>Comfirm sản phẩm</h3>
            </div>
            <hr/>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                />

            </div>

        </div>
    );
}
export default ComfirmProduct
