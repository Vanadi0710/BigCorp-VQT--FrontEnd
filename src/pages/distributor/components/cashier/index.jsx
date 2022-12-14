import { Button, Form, Input, List, Modal, Tag } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import customerAPI from "../../../../api/customer.api";
import distributorAPI from "../../../../api/distributor.api";
import productAPI from "../../../../api/product.api";
import castPrice from "../../../../utils/castPrice";
import "./index.scss";

const Cashier = ({ notify }) => {
  const { account } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keySearchCustomer, setKeySearchCustomer] = useState("");
  const [keySearchDevice, setKeySearchDevice] = useState("");
  const [customers, setCustomers] = useState([]);
  const [devices, setDevices] = useState([]);
  const [customerTags, setCustomerTags] = useState([]);
  const [deviceTags, setDeviceTags] = useState([]);

  const onFinish = async (values) => {
    try {
      await customerAPI.addCustomer(values);
      setIsModalOpen(false);
      notify("Them khach hang moi thanh cong");
    } catch (e) {
      notify(e.response?.data, "ERROR");
    }
  };

  const getCustomers = async (key) => {
    let customers = await customerAPI.getCustomers({ code: key });
    setCustomers(customers);
  };

  const getDevices = async (model) => {
    let devices = await productAPI.getInstancesByBranchId({
      branchId: account.branch,
      status: [
        "TAKE_TO_DISTRIBUTOR_BY_FACTORY",
        "TAKE_TO_DISTRIBUTOR_BY_WARRANTY_CENTER",
      ],
      model
    });
    setDevices(devices);
  };

  const handleCloseCustomerTag = (tag) => {
    let newTags = customerTags.filter((customerTag) => customerTag !== tag);
    setCustomerTags(newTags);
  };

  const handleCloseDeviceTag = (tag) => {
    let newTags = deviceTags.filter(
      (deviceTag) => deviceTag.model !== tag.model
    );
    setDeviceTags(newTags);
  };

  const handleAddNewDeviceTag = (tag) => {
    let canAdd = true;
    deviceTags.forEach((element) => {
      if (element.model === tag.model) canAdd = false;
    });
    canAdd && setDeviceTags((prev) => [...prev, tag]);
  };

  const totalPrice = () => {
    return deviceTags.reduce((total, deviceTag) => {
      return total + deviceTag?.product?.price;
    }, 0);
  };

  const handleTransaction = async () => {
  
    let products = deviceTags.map(device => device._id)
    console.log(customerTags[0], products)
    try {
      await distributorAPI.sellProducts({products, customerTag: customerTags[0]});
      notify("Giao dich thanh cong");
      setCustomerTags([]);
      setDeviceTags([]);
    } catch (e) {
      console.log(e);
      notify(e.response?.data, "ERROR");
    }
  };

  return (
    <div>
      <div className="py-4">
        <h3>B??n h??ng</h3>
      </div>
      <hr />
      <div className="row">
        <div className="col-4 search-box-cashier">
          <h5>Kh??ch h??ng</h5>
          <Input
            className="my-2"
            disabled={customerTags.length > 0 && true}
            placeholder="Nh???p m?? kh??ch h??ng...."
            value={keySearchCustomer}
            onChange={(e) => {
              setKeySearchCustomer(e.target.value);
              getCustomers(e.target.value);
            }}
            onBlur={() => {
              setTimeout(() => {
                setCustomers([]);
              }, 100);
            }}
          />
          {customers.length > 0 && (
            <div className="result-search-box-cashier">
              <List
                itemLayout="horizontal"
                dataSource={customers}
                renderItem={(item) => (
                  <List.Item
                    className="item"
                    onClick={() => {
                      setCustomerTags((prev) => [...prev, item.code]);
                    }}
                  >
                    <List.Item.Meta
                      title={item.fullName}
                      description={item.code}
                    />
                    <div> {item.address} </div>
                  </List.Item>
                )}
              />
            </div>
          )}
          <div className="list-customer-tag">
            {customerTags?.map((tag, ind) => {
              return (
                <Tag
                  closable
                  key={ind}
                  onClose={(e) => {
                    e.preventDefault();
                    handleCloseCustomerTag(tag);
                  }}
                >
                  {tag}
                </Tag>
              );
            })}
          </div>

          <Button
            className="my-4"
            type="primary"
            onClick={() => setIsModalOpen(true)}
          >
            T???o m?? kh??ch h??ng
          </Button>
        </div>
        <div className="col-5 search-box-cashier">
          <h5>s???n ph???m thanh to??n</h5>
          <Input
            className="my-2"
            placeholder="Nh???p m?? s???n ph???m ...."
            value={keySearchDevice}
            onChange={(e) => {
              setKeySearchDevice(e.target.value);
              getDevices(e.target.value);
            }}
            onBlur={() => {
              setTimeout(() => {
                setDevices([]);
              }, 100);
            }}
          />
          {devices.length > 0 && (
            <div className="result-search-box-cashier">
              <List
                itemLayout="horizontal"
                dataSource={devices}
                renderItem={(item) => (
                  <List.Item
                    className="item"
                    onClick={() => handleAddNewDeviceTag(item)}
                  >
                    <List.Item.Meta
                      title={item?.model}
                      description={item?.product?.productName}
                    />
                    <div>{castPrice(item?.product?.price)}vnd </div>
                  </List.Item>
                )}
              />
            </div>
          )}
          <div className="list-device-tag">
            {deviceTags?.map((tag, ind) => {
              return (
                <Tag
                  closable
                  key={ind}
                  onClose={(e) => {
                    e.preventDefault();
                    handleCloseDeviceTag(tag);
                  }}
                >
                  {tag.model}
                </Tag>
              );
            })}
          </div>
          <div className="py-4">
            {/* <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a>{item.title}</a>}
                    description="M??y t???t .... "
                  />
                  <div>x1 : 25.000.000 VND </div>
                </List.Item>
              )}
            /> */}
          </div>
          <hr />
          <h5>T???ng ti???n : {castPrice(totalPrice())} VND</h5>
          <Button
            type="primary"
            disabled={customerTags.length === 0 || deviceTags.length === 0}
            onClick={handleTransaction}
          >
            Thanh to??n
          </Button>
        </div>
      </div>

      {/*//popup*/}
      <Modal
        title="Th??m m???i kh??ch h??ng"
        open={isModalOpen}
        width={500}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
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
          <Form.Item
            label="T??n kh??ch h??ng"
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "T??n kh??ch h??ng kh??ng ???????c b??? tr???ng",
                },
              ]}
              style={{
                display: "inline-block",
                width: "90%",
              }}
            >
              <Input placeholder="Nh???p t??n kh??ch h??ng" />
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="?????a ch???"
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "?????a ch??? kh??ng ???????c b??? tr???ng",
                },
              ]}
              style={{
                display: "inline-block",
                width: "90%",
              }}
            >
              <Input placeholder="Nh???p d???a ch???" />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="S??? ??i???n tho???i"
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "??i???n tho???i kh??ng ???????c b??? tr???ng",
                },
              ]}
              style={{
                display: "inline-block",
                width: "90%",
              }}
            >
              <Input placeholder="Nh???p s??? ??i???n tho???i" />
            </Form.Item>
          </Form.Item>

          <Form.Item label="" colon={false} className="text-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Cashier;
