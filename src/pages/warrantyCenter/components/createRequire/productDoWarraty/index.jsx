import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import productAPI from "../../../../../api/product.api";
import warrantyCenterAPI from "../../../../../api/warrantyCenter.api";
import { billDetail } from "../../../../../utils/billDetail";
import DataModal from "../modal";

const ProductDoWarranty = ({notify}) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [devices, setDevices] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "id",
      dataIndex: 'id'
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
      title: "Ngày đưa vào sửa",
      dataIndex: "date",
    },
    {
      title: 'Lỗi',
      dataIndex: 'reasonFail'
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

  const handleFixDone = async () => {
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    try {
      await warrantyCenterAPI.warrantyProducts({ products });
      setSelectedRowKeys([]);
      notify("Thao tác thành công sửa chữa");
    } catch (e) {
      console.log(e);
      notify(e.response?.data, "ERROR");
    }
  }

  const handleCannotFix = async () => {
    let products = selectedRowKeys.map((item, index) => item.split("-")[1]);
    try {
      await warrantyCenterAPI.warrantyProducts({ products });
      setSelectedRowKeys([]);
      notify("Thao tác thành công sửa chữa");
    } catch (e) {
      console.log(e);
      notify(e.response?.data, "ERROR");
    }
  }

  const getDevices = async (branchId) => {
    let devices = await productAPI.getInstancesByBranchId({branchId, status: ''});
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <hr />
      <h4>sản phẩm đã chọn: </h4>
      {billDetail(selectedRowKeys).map((item, index) => (
        <p key={index} className="ps-3">
          {item.productName}: {item.quantity}
        </p>
      ))}
      <div className="row">
        <div className="col-2">
          <Button type="primary">Bảo hành</Button>
        </div>
        <div className="col-2">
          <Button type="primary" danger>
            Không bảo hành được
          </Button>
        </div>
      </div>
      <Modal title="Chi tiết bảo hành" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <DataModal />
      </Modal>
    </div>
  );
};
export default ProductDoWarranty;
