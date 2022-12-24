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

    const columnsPopup = [
        {
            title: 'Tên cấu hình',
            dataIndex: 'name',
        },
        {
            title: 'Chi tiết',
            dataIndex: 'description',
        },

    ];
    const dataPopup = [
        {
            key: '1',
            name: 'CPU',
            description: 'core i9 ',
        },
        {
            key: '2',
            name: 'màn hình',
            description: '13 inch  ',
        },
        {
            key: '3',
            name: 'Pin',
            description: '12000HM',
        },
        {
            key: '4',
            name: 'CPU',
            description: 'core i9 ',
        },
        {
            key: '5',
            name: 'màn hình',
            description: '13 inch  ',
        },
        {
            key: '6',
            name: 'Pin',
            description: '12000HM',
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
            <Modal  title="Thông tin chi tiết" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-5">
                        <Image
                            preview={{
                                visible: false,
                            }}
                            width={150}
                            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            onClick={() => setVisible(true)}
                        />
                        <div
                            style={{
                                display: 'none',
                            }}
                        >
                            <Image.PreviewGroup
                                preview={{
                                    visible,
                                    onVisibleChange: (vis) => setVisible(vis),
                                }}
                            >
                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                            </Image.PreviewGroup>
                        </div>
                    </div>
                    <div className="col-7">
                        <div>
                            <h5>Thông số</h5>
                            <Table columns={columnsPopup} dataSource={dataPopup} size="small" pagination={false}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
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