import { Button, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import productAPI from "../../../../../api/product.api";
import warrantyCenterAPI from "../../../../../api/warrantyCenter.api";
import { PAGE_SIZE } from "../../../../../constants";
import { billDetail } from "../../../../../utils/billDetail";
import { convertDate } from "../../../../../utils/convertType";
import DataModal from "../modal";

const ProductError = ({ notify }) => {
  //model open info đơn hàng
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [devices, setDevices] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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

  const handleWarrantyProducts = async () => {
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    try {
      await warrantyCenterAPI.warrantyProducts({ products });
      setSelectedRowKeys([]);
      notify("Đang tiến hành sửa chữa");
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
        key: index + "-" + device._id + "-" + device?.product?.productName,
        id: index + 1,
      };
    });
    setDevices(devices);
  };

  useEffect(() => {
    getDevices();
  }, []);
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ pageSize: PAGE_SIZE }} />
      <hr />
      <h4>sản phẩm đã chọn: </h4>
      {billDetail(selectedRowKeys).map((item, index) => (
        <p key={index} className="ps-3">
          {item.productName}: {item.quantity}
        </p>
      ))}
      <Button type="primary" onClick={handleWarrantyProducts}>
        Bảo hành
      </Button>

      <Modal title="Chi tiết bảo hành" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <DataModal />
      </Modal>
    </div>
  );
};
export default ProductError;
