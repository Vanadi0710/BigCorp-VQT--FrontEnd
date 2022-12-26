import {Button, Form, Input, List, Modal, Space} from "antd";
import {Tooltip} from "chart.js";
import {useState} from "react";

const Cashier = () => {
    //popup thêm khách hàng
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
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    // end popup
    const data = [
        {
            key: '1',
            title: 'Macbook pro',

        },
        {
            key: '1',
            title: 'Macbook pro',

        },
        {
            key: '1',
            title: 'Macbook pro',

        },
        {
            key: '1',
            title: 'Macbook pro',

        },
        {
            key: '1',
            title: 'Macbook pro',

        },
    ];
    return (
        <div>
            <div className="py-4">
                <h3>Bán hàng</h3>
            </div>
            <hr/>
            <div className="row">
                <div className="col-4">
                    <h5>
                        Khách hàng
                    </h5>
                    <Input className="my-2" placeholder="Nhập mã khách hàng...." />
                    <Button className="my-4" type="primary" onClick={showModal}>Tạo mã khách hàng</Button>

                </div>
                <div className="col-5">
                    <h5>sản phẩm thanh toán</h5>
                    <Input className="my-2" placeholder="Nhập mã sản phẩm ...." />
                    <div className="py-4">
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a>{item.title}</a>}
                                        description="Máy tốt .... "
                                    />
                                    <div>x1 : 25.000.000 VND </div>
                                </List.Item>

                            )}

                        />
                    </div>
                    <hr/>
                    <h5>Tổng tiền : 100.000.000 VND</h5>
                    <Button type="primary">Thanh toán</Button>
                </div>

            </div>

            {/*//popup*/}
            <Modal title="Thêm mới khách hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="complex-form"
                    onFinish={onFinish}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                >
                    <Form.Item label="Tên khách hàng">
                        <Space>
                            <Form.Item
                                name="username"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tên không được bỏ trống',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 160,
                                    }}
                                    placeholder="Nhập tên khách hàng "
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Địa chỉ">
                        <Input.Group compact>
                            <Form.Item
                                name={['address', 'province']}
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Địa chỉ không được bỏ trống',
                                    },
                                ]}
                            >
                            </Form.Item>
                            <Form.Item
                                name={['address', 'street']}
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'Địa chỉ không được bỏ trống',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '50%',
                                    }}
                                    placeholder="Địa chỉ "
                                />
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        style={{
                            marginBottom: 0,
                        }}
                    >
                        <Form.Item
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Điện thoại không được bỏ trống'
                                },
                            ]}
                            style={{
                                display: 'inline-block',
                                width: 'calc(50% - 8px)',
                            }}
                        >
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                        
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );

}
export default Cashier
