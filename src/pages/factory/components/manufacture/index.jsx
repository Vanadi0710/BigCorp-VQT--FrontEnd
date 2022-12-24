import {Button, Form, Image, Modal, Select, Table, Tag} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import React, {useState} from "react";
import {
    Cascader,
    DatePicker,
    Input,
    InputNumber,
    TreeSelect,
} from 'antd';
import ModelInformation from "../../../../components/model/model";



const data = [
    {
        key: '1',
        name: 'Apple',
        nameProduct: 'Macbook',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ],
        content: "",
        all: "all information"
    },
    {
        key: '2',
        name: 'Apple',
        nameProduct: 'iphone',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },
    {
        key: '3',
        name: 'Apple',
        nameProduct: 'air ports',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },
    {
        key: '4',
        name: 'assus',
        nameProduct: 'product',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },
    {
        key: '5',
        name: 'samsung',
        nameProduct: 'zip',
        active: 'chi tiết',
        img: [
            {
                src: '',
            }
        ]
    },

];
const Manufacture = () => {
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

    const onSearch = (value) => console.log(value);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const columns = [
        {
            title: 'Hãng sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'nameProduct',
            key: 'nameProduct',
        },
        {
            title: 'Thao tác',
            key: 'active',
            render: () => <Button onClick={showModal} type="primary">chi tiết</Button>
        },
        {
            title: 'Hoạt động',
            key: 'manufacture',
            render: () => <Button onClick={() => setOpen(true)} type="primary" danger>Sản xuất</Button>
        },


    ];

    return (
        <Form  component={false}>
            <div>
                <h3 className='py-4'>
                    Sản xuất hàng hoá
                </h3>
                <hr/>
            </div>
            <Table columns={columns} dataSource={data} size="small"
            />

            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={700}
            >

                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"


                >
                    <div className="py-3"><h3>Xác nhận yêu cầu</h3></div>
                    <Form.Item label="Nhập số lượng">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Ghi chú">
                        <Input  placeholder="Ghi chú... "/>
                    </Form.Item>

                </Form>


            </Modal>
        </Form>
    );
};
export default Manufacture;