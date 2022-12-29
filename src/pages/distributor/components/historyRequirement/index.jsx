import React, { useState } from "react";
import { Button, Modal, Table, Tag } from "antd";
import { useEffect } from "react";
import distributorAPI from "../../../../api/distributor.api";
import {
  convertDate,
  convertStatusToColor,
} from "../../../../utils/convertType";
import { countProduct } from "../../../../utils/billDetail";

const HistoryRequirement = () => {
  //model open info đơn hàng
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [detailModal, setDetailModal] = useState([])

  const showModal = (products) => {
    setIsModalOpen(true);
    let detail = countProduct(products)
    setDetailModal(detail)
  };

  const columns = [
    {
      title: "Mã yêu cầu",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Cơ sở yêu cầu",
      dataIndex: "branchName",
      key: "branchName",
    },
    {
      title: "chi tiết đơn",
      key: "info",
      render: (transport) => <Button onClick={() => showModal(transport.products)}>Chi tiết</Button>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "requestedDate",
      key: "requestedDate",
    },
    {
      title: "Loại yêu cầu",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: ({status, color}) => (
        <Tag color={color}>{status}</Tag>
      ),
    },
  ];
  // data popup
  const columnsModels = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const getRequests = async () => {
    let requests = await distributorAPI.getRequests();
    requests = requests.map((req, ind) => {
      return {
        ...req,
        status: { status: req.status, color: convertStatusToColor(req.status) },
        branchName: req.to.branchName,
        id: ind + 1,
        requestedDate: convertDate(req.requestedDate),
      };
    });
    setRequests(requests);
  };

  useEffect(() => {
    getRequests();
  }, []);
  return (
    <div>
      <div className="py-4">
        <h3>Lịch sử yêu cầu</h3>
        <hr />
      </div>
      <div>
        <Table dataSource={requests} columns={columns} />
        <Modal
          title="Chi tiết đơn hàng"
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          <Table
            columns={columnsModels}
            dataSource={detailModal}
            pagination={{
                pageSize: 4
            }}
          />
        </Modal>
      </div>
    </div>
  );
};
export default HistoryRequirement;
