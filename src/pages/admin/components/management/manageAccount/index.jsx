import { Table } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import accountAPI from "../../../../../api/account.api";
import { PAGE_SIZE } from "../../../../../constants";
import { convertRoleType } from "../../../../../utils/convertType";

const ManageAccount = () => {
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
      <Table columns={columns} dataSource={accounts} size="small" 
      pagination={{
        pageSize: PAGE_SIZE
      }}
      />
    </>
  );
};
export default ManageAccount;
