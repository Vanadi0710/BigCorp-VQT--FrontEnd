import { Button, Form, Input, Modal, Select, Space, Table } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import accountAPI from "../../../../../api/account.api";
import { PAGE_SIZE } from "../../../../../constants";
import { convertRoleType } from "../../../../../utils/convertType";
import branchAPI from "../../../../../api/branch.api";

const ManageAccount = ({ notify }) => {
  //popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [branchesWithoutOwner, setBranchesWithoutOwner] = useState([]);
  const [selectedBrachId, setSelectedBranchId] = useState();

  const showModal = async () => {
    setIsModalOpen(true);
    setBranchesWithoutOwner(await branchAPI.getBranches({ owner: "null" }));
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //end popup
  const onFinish = async (values) => {
    console.log(selectedBrachId);
    if (!selectedBrachId) {
      notify("Vui long chon chi nhanh quan ly", "WARNING");
      return;
    }
    let branchType = selectedBrachId.split("-")[1];
    let branchId = selectedBrachId.split("-")[0];
    let role =
      branchType === "FACTORY"
        ? branchType
        : branchType === "WARRANTY_CENTER"
        ? branchType
        : "DISTRIBUTOR";
    try {
      await accountAPI.addAccount({
        ...values,
        role,
        branch: branchId
      })
      setIsModalOpen(false);
      getAccounts()
      notify('Them tai khoan thanh cong')
    } catch (e) {
      console.log(e);
      notify(e.response?.data);
    }
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
      <Button type="primary" onClick={showModal}>
        Thêm tài khoản
      </Button>
      <Modal
        title=" Thêm tài khoản"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
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
                    message: "Tên không được bỏ trống",
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
            <Space>
              <Form.Item
                name="password"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "mật khẩu không được bỏ trống",
                  },
                ]}
              >
                <Input
                  style={{
                    width: 160,
                  }}
                  placeholder="assword... "
                  type="password"
                />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item
            label="Quyền tài khoản"
            style={{
              marginBottom: 0,
            }}
          >
            <Select
              showSearch
              placeholder="chọn cơ sở quản lý"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              onChange={(value) => {
                console.log(value);
                setSelectedBranchId(value);
              }}
              options={branchesWithoutOwner?.map((branch, idx) => {
                return {
                  value: branch._id + "-" + branch.branchType,
                  label: branch.branchName,
                };
              })}
            />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit" className="mt-4">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        className="py-5"
        columns={columns}
        dataSource={accounts}
        size="small"
        pagination={{
          pageSize: PAGE_SIZE,
        }}
      />
    </>
  );
};
export default ManageAccount;
