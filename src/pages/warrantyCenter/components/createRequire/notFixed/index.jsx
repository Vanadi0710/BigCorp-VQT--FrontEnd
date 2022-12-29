import { Button, Modal, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import branchAPI from "../../../../../api/branch.api";
import productAPI from "../../../../../api/product.api";
import warrantyCenterAPI from "../../../../../api/warrantyCenter.api";
import { billDetail } from "../../../../../utils/billDetail";
import DataModal from "../modal";

const NotFixed = ({ notify }) => {
  const { account } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [devices, setDevices] = useState([]);
  const [factories, setFactories] = useState([]);
  const [selectedBrachId, setSelectedBranchId] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "id",
      key: "id",
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "code",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
    },
    {
      title: "Ngày chuyển tới",
      dataIndex: "date",
    },
    {
      title: "Cơ sở chuyển tới",
      dataIndex: "branch",
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
  const data = [
    {
      key: "1",
      code: "mb1",
      name: "Macbook",
      date: "19/10/2001",
      distributor: "E20",
    },
    {
      key: "2",
      code: "mb1",
      name: "Macbook",
      date: "19/10/2001",
      distributor: "E20",
    },
    {
      key: "3",
      code: "mb1",
      name: "Macbook",
      date: "19/10/2001",
      distributor: "E20",
    },
    {
      key: "4",
      code: "mb1",
      name: "Macbook",
      date: "19/10/2001",
      distributor: "E20",
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

  const getAllFactories = async () => {
    let factories = await branchAPI.getBranches({ branchType: "FACTORY" });
    setFactories(factories);
  };

  const handleTransportToFactory = async () => {
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    let note = "import: ";
    billDetail(selectedRowKeys).map((item, index) => {
      note += (index > 0 ? ", " : "") + item.productName + ": " + item.quantity;
    });
    try {
      await warrantyCenterAPI.requestImportProducts({
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
    let devices = await productAPI.getInstancesByBranchId({ branchId, status: "" });
    devices = devices?.map((device, index) => {
      return {
        ...device,
        productName: device?.product?.productName,
        key: index + "-" + device._id + "-" + device?.product?.productName,
        id: index + 1,
      };
    });
    setDevices(devices);
  };

  useEffect(() => {
    getDevices();
    getAllFactories();
  }, []);
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <hr />
      <h4>sản phẩm đã chọn: </h4>
      <div className="row py-3">
        <div className="col-2">
          <Select
            labelInValue
            style={{
              width: 200,
            }}
            onChange={(value) => {
              setSelectedBranchId(value);
            }}
            options={factories?.map((factory) => ({
              value: factory._id,
              label: factory.branchName,
            }))}
            placeholder="chọn nhà máy"
          />
        </div>
        <div className="col-2">
          <Button type="primary" onClick={handleTransportToFactory}>
            Gửi hàng
          </Button>
        </div>
      </div>
      <Modal title="Chi tiết bảo hành" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <DataModal />
      </Modal>
    </div>
  );
};
export default NotFixed;
