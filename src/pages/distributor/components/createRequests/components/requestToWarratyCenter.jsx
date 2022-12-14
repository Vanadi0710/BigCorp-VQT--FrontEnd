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
    // m?? ????n , t??n c?? s??? y??u c???u , tr???ng th??i , chi ti???t , action
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "T??n s???n ph???m",
      dataIndex: "productName",
    },
    {
      title: "Model ",
      dataIndex: "model",
    },
    {
      title: "Kh??ch h??ng",
      dataIndex: "customer",
    },
    {
      title: "L?? do l???i",
      dataIndex: "reasonFail",
    },
    {
      title: "Ng??y ??i b???o h??nh",
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
        <h4>Y??u c???u b???o h??nh s???n ph???m l???i </h4>
      </div>
      <hr />

      <Select
        className="py-2"
        showSearch
        placeholder="Ch???n trung t??m b???o h??nh"
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
      <h4>S???n ph???m ???? ch???n : </h4>
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
        X??c nh???n y??u c???u
      </Button>
    </div>
  );
};
export default RequestToWarrantyCenter;
