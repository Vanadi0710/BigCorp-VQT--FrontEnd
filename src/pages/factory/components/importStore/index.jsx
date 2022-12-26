import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { Table } from "antd";
import factoryAPI from "../../../../api/factory.api";
import { PAGE_SIZE } from "../../../../constants";
import { convertDate } from "../../../../utils/convertType";
import { billDetail } from "../../../../utils/billDetail";

const columns = [
  {
    title: "id",
    dataIndex: "id",
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
    title: " Ngày sản xuất ",
    dataIndex: "producedDate",
    key: "producedDate",
  },
  {
    title: " Thông tin",
    key: "action",
    render: (product) => (
      <Button type="primary" onClick={() => console.log(product)}>
        {" "}
        chi tiết
      </Button>
    ),
  },
];

const ImportStore = ({notify}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [devices, setDevices] = useState([]);
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

  const getDevices = async () => {
    let devices = await factoryAPI.getDevices(true, 'IDLE');
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

  const importToStore = async () => {
    if(selectedRowKeys.length <= 0) {
      notify('Ban chua chon san pham nao', 'INFO')
      return
    }
    let products = selectedRowKeys.map((item, index) => item.split('-')[1])
    let note = 'import: '
     billDetail(selectedRowKeys).map((item, index) => {
      note += (index > 0 ? ', ' : '') + item.productName + ": " + item.quantity
     })
    try {
      await factoryAPI.importToStore({products, note})
      setSelectedRowKeys([])
      getDevices()
      notify('Đã nhập vào kho')
    } catch(e) {
      console.log(e)
      notify(e.response?.data, 'ERROR')
    }
  }

  useEffect(() => {
    getDevices();
  }, []);
  return (
    <div>
      <div className="py-4">
        <h3>Nhập vào kho </h3>
      </div>
      <hr />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={devices}
        pagination={{ pageSize: PAGE_SIZE }}
      />

      <div>
        <h4 className="pb-2">Sản phẩm đã chọn : </h4>
        {billDetail(selectedRowKeys).map((item, index) => (
          <p key={index} className="ps-3">
            {item.productName}: {item.quantity}
          </p>
        ))}
      </div>
      <Button type="primary" className="mt-2" onClick={importToStore}>Nhập hàng</Button>
    </div>
  );
};
export default ImportStore;
