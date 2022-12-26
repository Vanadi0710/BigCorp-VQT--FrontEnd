import {Button, Form, Input, Modal, Select, Space, Table} from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import accountAPI from "../../../../../api/account.api";
import { PAGE_SIZE } from "../../../../../constants";
import { convertRoleType } from "../../../../../utils/convertType";

const ManageAccount = () => {
  //popup
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
  //end popup
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Cơ sở quản lý",
      dataIndex: "branch",
      key: "branch",
    },
  ];

  const [accounts, setAccounts] = useState([]);

  const getAccounts = async () => {
    let accounts = await accountAPI.getAccounts();
    accounts = accounts.map((account, index) => {
      return {
        ...account,
        role: convertRoleType(account.role),
        branch: account?.branch?.branchName,
        key: index,
        id: index + 1,
      };
    });
    setAccounts(accounts);
  };

  useEffect(() => {
    getAccounts();
  }, []);
  return (
    <>
      <div className="manage-account--header">
        <h3 className="mt-3">Quản lý tài khoản </h3>
        <hr />
      </div>
      <Button type="primary" onClick={showModal}>Thêm tài khoản</Button>
      <Modal title=" Thêm tài khoản" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

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
          <Form.Item label="Tên tài khoản">
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
                    placeholder="Nhập tên .... "
                />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label="Nhập mật khẩu">
            <Input.Group compact>

              <Form.Item
                  name={['password', 'password']}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: 'mật khẩu không được bỏ trống',
                    },
                  ]}
              >
                <Input
                    style={{
                      width: '50%',
                    }}
                    placeholder="password... "
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
              label="Quền tài khoản"
              style={{
                marginBottom: 0,
              }}
          >
            <Select
                showSearch
                placeholder="chọn cơ sở quản l"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'admin',
                    label: 'Admin',
                  },
                  {
                    value: 'factory',
                    label: 'Cơ sở xản xuất A',
                  },
                  {
                    value: 'warranty',
                    label: 'Trung tâm bảo hành A',
                  },
                  {
                    value: 'Đại lý phân phối A',
                    label: 'distributor',
                  },
                ]}
            />

          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit" className="my-3">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>

      </Modal>
      < Table className="py-5" columns={columns} dataSource={accounts} size="small"
      pagination={{
        pageSize: PAGE_SIZE
      }}
      />
    </>
  );
};
export default ManageAccount;
