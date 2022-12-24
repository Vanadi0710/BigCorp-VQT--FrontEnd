import React, { useState } from 'react';
import {Button, Image, Modal, Table} from 'antd';
const ModelInformation = () => {
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
            name: 'RAM',
            description: 'core i9 ',
        },
        {
            key: '2',
            name: 'Ổ cứng',
            description: '13 inch  ',
        },
        {
            key: '3',
            name: 'CPU',
            description: '12000HM',
        },
        {
            key: '4',
            name: 'Màn hình',
            description: 'core i9 ',
        },
        {
            key: '5',
            name: 'Trọng lượng ',
            description: '13 inch  ',
        },
        {
            key: '6',
            name: 'Giá',
            description: '12000HM',
        },
        {
            key: '7',
            name: 'version hệ điều hành',
            description: '12000HM',
        },

    ];

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


    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open Modal of 1000px width
            </Button>
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
        </>
    );
};
export default ModelInformation;
