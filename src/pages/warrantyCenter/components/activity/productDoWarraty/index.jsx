import { Button, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import productAPI from "../../../../../api/product.api";
import warrantyCenterAPI from "../../../../../api/warrantyCenter.api";
import { PAGE_SIZE } from "../../../../../constants";
import { billDetail } from "../../../../../utils/billDetail";
import { convertDate } from "../../../../../utils/convertType";
import DataModal from "../modal";

const ProductError = ({ notify }) => {
  //model open info đơn hàng
  const {account} = useSelector(state => state.auth)
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
      dataIndex: "updatedAt",
    },
    {
      title: "Chi tiết",
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

  const handleWarrantyProducts = async (status) => {
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    try {
      await warrantyCenterAPI.warrantyProducts({ products, status });
      setSelectedRowKeys([]);
      getDevices()
      notify("Thao tac thanh cong");
    } catch (e) {
      console.log(e);
      notify(e.response?.data, "ERROR");
    }
  };

  const getDevices = async () => {
    let devices = await productAPI.getInstancesByBranchId({branchId: account.branch, status: 'UNDER_WARRANTY'});
    devices = devices?.map((device, index) => {
      return {
        ...device,
        productName: device?.product?.productName,
        key: index + "-" + device._id + "-" + device?.product?.productName,
        id: index + 1,
        updatedAt: convertDate(device.updatedAt)
      };
    });
    setDevices(devices);
  };

  useEffect(() => {
    getDevices();
  }, []);
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={devices} pagination={{ pageSize: PAGE_SIZE }} />
      <hr />
      <h4>sản phẩm đã chọn: </h4>
      {billDetail(selectedRowKeys).map((item, index) => (
        <p key={index} className="ps-3">
          {item.productName}: {item.quantity}
        </p>
      ))}
      <Button type="primary" onClick={() => handleWarrantyProducts('WARRANTY_DONE')}>
      Hoàn tất sửa
      </Button>
      <Button className="ms-5" type="primary" onClick={() => handleWarrantyProducts('FAILED_NEED_TO_FACTORY')} danger>
      Không thể sửa
      </Button>
      <Modal title="Chi tiết bảo hành" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <DataModal />
      </Modal>
    </div>
  );
};
export default ProductError;
