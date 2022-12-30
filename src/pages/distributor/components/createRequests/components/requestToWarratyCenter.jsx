import React, { useState, useEffect } from "react";
import { Button, Select, Table } from "antd";
import { billDetail } from "../../../../../utils/billDetail";
import productAPI from "../../../../../api/product.api";
import branchAPI from "../../../../../api/branch.api";
import { convertDate } from "../../../../../utils/convertType";
import { PAGE_SIZE } from "../../../../../constants";
import distributorAPI from "../../../../../api/distributor.api";
import { useSelector } from "react-redux";

const RequestToWarrantyCenter = ({ notify }) => {
  const { account } = useSelector((state) => state.auth);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [devices, setDevices] = useState([]);
  const [selectedBrachId, setSelectedBranchId] = useState();
  const [WarrantyCenters, setWarrantyCenters] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  // trigger event when tick to the checkbox
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
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
    },
    {
      title: "Model ",
      dataIndex: "model",
    },
    {
      title: "Khách hàng",
      dataIndex: "customer",
    },
    {
      title: "Lý do lỗi",
      dataIndex: "reasonFail",
    },
    {
      title: "Ngày đi bảo hành",
      dataIndex: "date",
    },
  ];

  const getAllWarrantyCenters = async () => {
    let warrantyCenters = await branchAPI.getBranches({
      branchType: "WARRANTY_CENTER",
    });
    setWarrantyCenters(warrantyCenters);
  };

  const handleCreateReq = async () => {
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    let note = "export: ";
    billDetail(selectedRowKeys).map((item, index) => {
      note += (index > 0 ? ", " : "") + item.productName + ": " + item.quantity;
    });
    try {
      await distributorAPI.reqSendFailedToWarranty({
        products,
        from: account.branch,
        to: selectedBrachId,
        type: "TAKE_FAILED_TO_WARRANTY_CENTER",
        note: note,
      });
      setSelectedRowKeys([]);
      notify("Tao yeu cau thanh cong");
    } catch (e) {
      console.log(e);
      notify(e.response?.data, "ERROR");
    }
  };

  const getDevices = async (branch) => {
    let devices = await productAPI.getInstancesByBranchId(branch);
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
    getAllWarrantyCenters();
    getDevices({branchId: account.branch, status: ['FAILED_NEED_TO_WARRANTY', 'FAILED_NEED_TO_SUMMON']})
  }, []);

  return (
    <div>
      <div className="ps-2">
        <h4>Yêu cầu bảo hành sản phẩm lỗi </h4>
      </div>
      <hr />

      <Select
        className="py-2"
        showSearch
        placeholder="Chọn trung tâm bảo hành"
        onChange={(value) => {
          setSelectedBranchId(value);

          // TODO: determine status of product
          getDevices({ branchId: value, status: "" });
        }}
        options={WarrantyCenters?.map((warrantyCenter) => ({
          value: warrantyCenter._id,
          label: warrantyCenter.branchName,
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
      <Button
        type="primary"
        disabled={selectedRowKeys.length === 0}
        onClick={handleCreateReq}
      >
        Xác nhận yêu cầu
      </Button>
    </div>
  );
};
export default RequestToWarrantyCenter;
