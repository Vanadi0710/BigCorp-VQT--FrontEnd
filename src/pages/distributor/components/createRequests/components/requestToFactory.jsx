import React, { useState, useEffect } from "react";
import { Button, Select, Table } from "antd";
import { billDetail } from "../../../../../utils/billDetail";
import productAPI from "../../../../../api/product.api";
import branchAPI from "../../../../../api/branch.api";
import { convertDate } from "../../../../../utils/convertType";
import { PAGE_SIZE } from "../../../../../constants";
import distributorAPI from "../../../../../api/distributor.api";
import { useSelector } from "react-redux";

const RequestToFactory = ({ notify, createReq }) => {
  const { account } = useSelector((state) => state.auth);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [devices, setDevices] = useState([]);
  const [selectedBrachId, setSelectedBranchId] = useState();
  const [factories, setFactories] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const columns = [
    // mã đơn , tên cơ sở yêu cầu , trạng thái , chi tiết , action
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Model ",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Ngày sản xuất",
      dataIndex: "producedDate",
      key: "producedDate",
    },
  ];

  const getAllFactories = async () => {
    let factories = await branchAPI.getBranches({ branchType: "FACTORY" });
    setFactories(factories);
  };

  const handleCreateReq = async () => {
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    let note = "import: ";
    billDetail(selectedRowKeys).map((item, index) => {
      note += (index > 0 ? ", " : "") + item.productName + ": " + item.quantity;
    });
    try {
      await distributorAPI.requestImportProducts({
        products,
        from: account.branch,
        to: selectedBrachId,
        type: "IMPORT",
        note: note,
      });
      setSelectedRowKeys([]);
      notify("Tao yeu cau thanh cong");
    } catch (e) {
      console.log(e);
      notify(e.response?.data, "ERROR");
    }
  };

  const getDevices = async (branchId) => {
    let devices = await productAPI.getInstancesByBranchId(branchId);
    devices = devices?.map((device, index) => {
      return {
        ...device,
        productName: device?.product?.productName,
        producedDate: convertDate(device.producedDate),
        key: index + "-" + device._id + "-" + device?.product?.productName,
        id: index + 1,
      };
    });
    setDevices(devices);
  };

  useEffect(() => {
    getAllFactories();
  }, []);
  return (
    <div>
      <div className="ps-2">
        <h4>Yêu cầu nhập hàng </h4>
      </div>
      <hr />

      <Select
        className="py-2"
        showSearch
        placeholder="chọn nhà máy sản xuất"
        onChange={(value) => {
          setSelectedBranchId(value);
          getDevices({ branchId: value, status: "IMPORTED_STORE" });
        }}
        options={factories?.map((factory) => ({
          value: factory._id,
          label: factory.branchName,
        }))}
      />

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={devices}
        className="py-2"
        pagination={{
          pageSize: PAGE_SIZE,
        }}
      />
      <h4>Sản phẩm đã chọn : </h4>
      {billDetail(selectedRowKeys).map((item, index) => (
        <p key={index} className="ps-3">
          {item.productName}: {item.quantity}
        </p>
      ))}
      <Button type="primary" disabled={selectedRowKeys.length === 0} onClick={handleCreateReq}>
        Xác nhận yêu cầu
      </Button>
    </div>
  );
};
export default RequestToFactory;
