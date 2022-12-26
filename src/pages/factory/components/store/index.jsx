import React, { useState } from 'react';
import {Divider, Image, Radio, Select, Table} from 'antd';
import Search from "antd/es/input/Search";
const Store = () => {

    const onSearch = (value) => console.log(value);
    const handleChange = (value) => {
        console.log(value); // select status
    }
    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
            width: 150,
        },
        {
            title: 'hình ảnh',
            dataIndex: 'img',
            key: 'img',
            width: 150,
            render: (text) => <Image width={100} src={text}/>
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'ngày sản xuất',
            dataIndex: 'date',
            key: 'date',
            ellipsis: true,
        },
        {
            title: 'số lượng',
            dataIndex: 'number',
            key: 'number',
            ellipsis: true,
        },
        {
            title: 'thuộc tính',
            dataIndex: 'character',
            key: 'character',
            ellipsis: true,
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
            ellipsis: true,
        }


    ];
    const data = [
        {
            key: '1',
            name: 'macbook',
            img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            model: 'MB1',
            date: '19/10/2001',
            number: '10',
            character: 'mượt ',
            status: 'hàng thu hồi',

        },
        {
            key: '1',
            name: 'macbook',
            img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            model: 'MB1',
            date: '19/10/2001',
            number: '10',
            character: 'mượt ',
            status: 'hàng sản xuất',

        },
        {
            key: '1',
            name: 'macbook',
            img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            model: 'MB1',
            date: '19/10/2001',
            number: '10',
            character: 'mượt ',
            status: 'hàng sản xuất',

        },
        {
            key: '1',
            name: 'macbook',
            img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            model: 'MB1',
            date: '19/10/2001',
            number: '10',
            character: 'mượt ',
            status: 'hàng thu hồi',

        }
    ];
    return (

        <div>

            <div className="py-4">
                <h3>Store</h3>
            </div>
            <hr/>

            <div className="row py-3">
                <div className="col-3">
                    <Select
                        labelInValue
                        defaultValue={{
                            value: 'prosseding',
                            label: 'Đang xản xuất',
                        }}
                        style={{
                            width: 300,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'recover',
                                label: 'Thu hồi',
                            },
                            {
                                value: 'prosseding',
                                label: 'Đang xản xuất',
                            },
                        ]}
                        />

                </div>
                <div className="col-3">
                    <Search placeholder="Nhập từ muốn search" onSearch={onSearch} enterButton />
                </div>
            </div>

            <Table columns={columns} dataSource={data} />;
        </div>
    );

}
export default Store
