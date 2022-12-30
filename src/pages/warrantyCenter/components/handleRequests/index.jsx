import { Button, Modal, Tag } from "antd";
import React, { useState, useEffect } from "react";
import { Table } from "antd";
import distributorAPI from '../../../../api/distributor.api'

import {
  convertDate,
  convertStatusToColor,
  convertTransportType,
} from "../../../../utils/convertType";
import { countProduct } from "../../../../utils/billDetail";

const HandleRequest = () => {
  //model open info đơn hàng
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [detailModal, setDetailModal] = useState([]);

  const showModal = (products) => {
    setIsModalOpen(true);
    let detail = countProduct(products);
    setDetailModal(detail);
  };

  const columns = [
    // mã đơn , tên cơ sở yêu cầu , trạng thái , chi tiết , action
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Mã đơn",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tên cơ sở yêu cầu",
      dataIndex: "branchName",
      key: "branchName",
    },
    {
      title: "Loại yêu cầu",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Ngày yêu cầu",
      dataIndex: "requestedDate",
      key: "requestedDate",
    },
    {
      title: "Trạng thái  ",
      dataIndex: "status",
      key: "status",
      render: ({ status, color }) => <Tag color={color}>{status}</Tag>,
    },

    {
      title: "Thông tin",
      key: "info",
      render: (transport) => (
        <Button onClick={() => showModal(transport.products)}>Chi tiết</Button>
      ),
    },
    {
      key: "action",
      render: (req) => (
        <>
          <Button onClick={() => handleReq(req)} >
            Xác nhận
          </Button>
          <Button className="ms-2" onClick={() => handleReq(req)} danger>
            Xác nhận
          </Button>
        </>
      ),
    },
  ];
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
    let requests = await distributorAPI.getReqNeedApprove();
    requests = requests.map((req, ind) => {
      return {
        ...req,
        status: { status: req.status, color: convertStatusToColor(req.status) },
        branchName: req.from.branchName,
        type: convertTransportType(req.type),
        id: ind + 1,
        requestedDate: convertDate(req.requestedDate),
      };
    });
    setRequests(requests);
  };

  const handleReq = async (req) => {
    
  };

  useEffect(() => {
    getRequests();
  }, []);
  return (
    <div>
      <div className="py-4">
        <h3>Danh sách yêu cầu</h3>
      </div>
      <hr />
      <Table columns={columns} dataSource={requests} />
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
            pageSize: 4,
          }}
        />
      </Modal>
    </div>
  );
};
export default HandleRequest;
