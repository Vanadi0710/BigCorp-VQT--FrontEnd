import { Button, Modal, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import branchAPI from "../../../../../api/branch.api";
import productAPI from "../../../../../api/product.api";
import warrantyCenterAPI from "../../../../../api/warrantyCenter.api";
import { billDetail } from "../../../../../utils/billDetail";
import { convertDate } from "../../../../../utils/convertType";
import DataModal from "../modal";

const ProductFixed = ({ notify }) => {
  const { account } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [devices, setDevices] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [selectedBrachId, setSelectedBranchId] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "model",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
    },
    {
      title: "Ngày bảo hành xong",
      dataIndex: "updatedAt",
    },
    {
      title: "Chi tiết ",
      render: () => (
        <Button type="primary" onClick={showModal}>
          chi tiết
        </Button>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
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

  const getAllDistributors = async () => {
    let distributors = await branchAPI.getBranches({ branchType: "FACTORY" });
    setDistributors(distributors);
  };

  const handleTransportToFactory = async () => {
    console.log(selectedBrachId)
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    let note = "import: ";
    billDetail(selectedRowKeys).map((item, index) => {
      note += (index > 0 ? ", " : "") + item.productName + ": " + item.quantity;
    });
    try {
      await warrantyCenterAPI.reqSendFailedToFactory({
        products,
        from: account.branch,
        to: selectedBrachId,
        type: "FAILED_SENT_TO_FACTORY",
        note: note,
      });
      setSelectedRowKeys([]);
      getDevices()
      notify("Tao yeu cau thanh cong");
    } catch (e) {
      console.log(e);
      notify(e.response?.data, "ERROR");
    }
  };

  const getDevices = async () => {
    let devices = await productAPI.getInstancesByBranchId({ branchId: account.branch, status: "FAILED_NEED_TO_FACTORY" });
    devices = devices?.map((device, index) => {
      return {
        ...device,
        productName: device?.product?.productName,
        updatedAt: convertDate(device.updatedAt),
        key: index + "-" + device._id + "-" + device?.product?.productName,
        id: index + 1,
      };
    });
    setDevices(devices);
  };

  useEffect(() => {
    getDevices();
    getAllDistributors();
  }, []);
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={devices} />
      <hr />
      <h4>sản phẩm đã chọn: </h4>
      {billDetail(selectedRowKeys).map((item, index) => (
        <p key={index} className="ps-3">
          {item.productName}: {item.quantity}
        </p>
      ))}
      <div className="row py-3">
        <div className="col-2">
          <Select
            labelInValue
            style={{
              width: 200,
            }}
            onChange={({value}) => {
              setSelectedBranchId(value);
            }}
            options={distributors?.map((distributor) => ({
              value: distributor._id,
              label: distributor.branchName,
            }))}
            placeholder="chọn đại lý trả hàng"
          />
        </div>
        <div className="col-2">
          <Button type="primary" onClick={handleTransportToFactory} disabled={!selectedBrachId}>
            Gửi trả hàng
          </Button>
        </div>
      </div>
      <Modal title="Chi tiết bảo hành" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <DataModal />
      </Modal>
    </div>
  );
};
export default ProductFixed;
