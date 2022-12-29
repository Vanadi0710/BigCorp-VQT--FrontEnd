import { Button, Form, Input, Modal, Space } from "antd";
import customerAPI from "../../../../../api/customer.api";

const AddCustomerModal = ({ setIsAddCustomerModalOpen, notify, getCustomers }) => {
  const onFinish = async (values) => {
    try {
      await customerAPI.addCustomer(values);
      notify("Tao khach hang moi thanh cong");
      setIsAddCustomerModalOpen(false)
      getCustomers()
    } catch (e) {
      notify(e.response?.data, "ERROR");
    }
  };
  return (
    <Modal
      title="Tạo mã khách hàng"
      centered
      open={true}
      onOk={() => setIsAddCustomerModalOpen(false)}
      onCancel={() => setIsAddCustomerModalOpen(false)}
      width={450}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Form
        style={{
          paddingTop: 15,
        }}
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
              name="fullName"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Tên không được bỏ trống",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
                placeholder="Nhập tên .... "
              />
            </Form.Item>
          </Space>
        </Form.Item>

        <Form.Item label="Số điện thoại">
          <Space>
            <Form.Item
              name="phone"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Số điện thoại được bỏ trống",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
                placeholder="Nhập số điện thoại .... "
              />
            </Form.Item>
          </Space>
        </Form.Item>

        <Form.Item label="Địa chỉ">
          <Space>
            <Form.Item
              name="address"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Địa chỉ khong được bỏ trống",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
                placeholder="Nhập số Địa chỉ .... "
              />
            </Form.Item>
          </Space>
        </Form.Item>

        <Form.Item label=" " colon={false} style={{ margin: 0, padding: 0 }}>
          <Button type="primary" htmlType="Xác nhận" className="my-3">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCustomerModal;
