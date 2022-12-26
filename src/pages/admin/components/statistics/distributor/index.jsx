import React, { useState, useEffect } from "react";
import { Form, Table, Tag, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { Link, Outlet, useParams } from "react-router-dom";
import branchAPI from "../../../../../api/branch.api";

const DistributorsAdmin = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Giám đốc",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Mã cơ sở",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tên cơ sở",
      dataIndex: "branchName",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Quy mô",
      dataIndex: "members",
      key: "members",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (branch) => (
        <Link to={`${branch?._id}`} className="btn btn-info">
          Thống kê
        </Link>
      ),
    },
  ];
  const [branches, setBranches] = useState([]);
  const { branchId } = useParams();

  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const getBranches = async () => {
    let branches = await branchAPI.getBranches({ branchType: "DISTRIBUTOR" });
    branches = branches.map((branch, index) => {
      return {
        ...branch,
        id: index + 1,
        owner: branch?.owner?.username,
        key: index + 1,
      };
    });
    setBranches(branches);
  };

  useEffect(() => {
    getBranches();
  }, []);

  return (
    <>
      {!branchId && (
        <>
          <div>
            <h3 className="py-3">Danh sách / đại lý phân phối</h3>
            <hr />
            <div className="row">
              <div className="col-2">
                <button className="btn btn-primary py-2">
                  <PlusOutlined />
                  Thêm cơ sở
                </button>
              </div>
              <div className="col-2">
                <Select
                  size="large"
                  defaultValue=""
                  style={{
                    width: 200,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      label: "Tìm theo tên",
                      value: "name",
                    },
                    {
                      label: "Tìm theo địa chỉ",
                      value: "địa chỉ",
                    },
                  ]}
                />
              </div>
              <div className="col-5">
                <Search
                  placeholder="Nhập từ khoá tìm kiếm ....."
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                />
              </div>
            </div>

            <hr />
          </div>
          <Table columns={columns} dataSource={branches} pagination={false}/>
        </>
      )}
      <Outlet />
    </>
  );
};
export default DistributorsAdmin;
