import { Button, Modal, Table } from "antd";
import React, { useState } from "react";
import Search from "antd/es/input/Search";

const HistoryTransaction = () => {
  const onSearch = (value) => console.log(value);
  //model open info đơn hàng
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([])

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataSource = [
    {
      key: "1",
      code: "ST1000",
      customeId: "CUSTOME1",
      date: "19/10/2001",
      note: "đã xác nhận",
      total: "150.000 VND",
    },
    {
      key: "2",
      code: "ST1000",
      customeId: "CUSTOME1",
      date: "19/10/2001",
      note: "đã xác nhận",
      total: "150.000 VND",
    },
    {
      key: "3",
      code: "ST1000",
      customeId: "CUSTOME1",
      date: "19/10/2001",
      note: "đã xác nhận",
      total: "150.000 VND",
    },
  ];

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "customeId",
      key: "customeId",
    },
    {
      title: "Chi tiết đơn",
      dataIndex: "info",
      key: "info",
      render: () => <Button onClick={showModal}>Chi tiết</Button>,
    },
    {
      title: "Ngày mua ",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tổng tiền ",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Ghi  chú ",
      dataIndex: "note",
      key: "note",
    },
  ];
  // data popup
  const columnsModels = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Model  ",
      dataIndex: "model",
      key: "model",
    },

    {
      title: "Số lượng",
      dataIndex: "number",
      key: "number",
    },
  ];
  const dataModels = [
    {
      key: "1",
      name: "Macbook",
      model: "MB1",
      number: "3",
    },
  ];

  return (
    <div>
      <div className="py-4">
        <h3>Lịch sử thanh toán</h3>
        <hr />
      </div>
      <div>
        <div className="col-3 ">
          <Search placeholder="Nhập mã đơn hoạc mã khách hàng" onSearch={onSearch} enterButton />
        </div>
        <Table className="py-3" dataSource={dataSource} columns={columns} />
        <Modal title="Chi tiết đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Table columns={columnsModels} dataSource={dataModels} pagination={false} />
        </Modal>
      </div>
    </div>
  );
};
export default HistoryTransaction;
