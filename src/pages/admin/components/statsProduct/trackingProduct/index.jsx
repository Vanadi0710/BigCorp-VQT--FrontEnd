
import { Input, Form, Select, Button, Tag, Table, Modal } from "antd";

import React, { useState, useEffect } from "react";
import "./style.scss";
import productAPI from "../../../../../api/product.api";
import {
  convertDate,
  convertProductProcessType,
  convertProcessTypeToColor,
} from "../../../../../utils/convertType";
import { PAGE_SIZE } from "../../../../../constants";

const TrackingProduct = () => {
  const [products, setProducts] = useState([]);
  const [productIsPicked, setProductIsPicked] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keySearch, setKeySearch] = useState("");
  const [typeKeySearch, setTypeKeySearch] = useState("productName");
  const [typeSearchBranch, setTypeSearchBranch] = useState("");

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Cơ sở",
      dataIndex: "branchName",
      key: "branchName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày sản xuất",
      dataIndex: "producedDate",
      key: "producedDate",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: ({ status, color }) => (
        <Tag color={color}>{status.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Theo dõi",
      render: (data) => (
        <Button className="btn btn-primary" onClick={() => showModal(data)}>
          KIểm tra
        </Button>
      ),
    },
  ];

  const columnsPopup = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Hoạt động",
      dataIndex: "action",
    },
    {
      title: "Cơ sở / Khách hàng",
      dataIndex: "to",
    },
    {
      title: "Ngày hoạt động",
      dataIndex: "date",
    },
  ];

  const showModal = async (data) => {
    setIsModalOpen(true);
    let product = await productAPI.getProductInstance(data._id);
    product = product?.progress?.map((item, ind) => {
      return {
        id: ind + 1,
        action: convertProductProcessType(item.action),
        to: item.location?.branchName
          ? item.location.branchName
          : item.customer?.customerName
          ? item.customer?.customerName
          : "",
        date: convertDate(item.date),
      };
    });
    setProductIsPicked(product);
  };

  const handleChecking = () => {
    let params = {
      [typeKeySearch]: keySearch,
      branchType: typeSearchBranch,
    };
    getProducts(params);
  };

  const getProducts = async (params = {}) => {
    let data = await productAPI.getProductInstances(params);
    data = data?.map((item, ind) => {
      return {
        ...item,
        productName: item.product.productName,
        id: ind + 1,
        branchName: item?.branch?.branchName,
        status: {
          status: convertProductProcessType(item.status),
          color: convertProcessTypeToColor(item.status),
        },
        producedDate: convertDate(item.producedDate),
      };
    });
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="">
      <h3 className="mt-3">Checking sản phẩm</h3>
      <hr />
      <Form>
        <div className="row py-3">
          <div className="col-5 ">
            <h5>Nhập mã sản phẩm:</h5>
            <Input
              placeholder="Nhập từ khoá tìm kiếm sản phẩm...."
              value={keySearch}
              onChange={(e) => {
                setKeySearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleChecking();
                }
              }}
            />
          </div>
          <div className="col-2">
            <h4 className="lable-search">:</h4>
            <Select
                className="select_term"
              defaultValue="productName"
              style={{
                width: 200,
              }}
              onChange={(value) => setTypeKeySearch(value)}
              options={[
                {
                  label: "Tìm theo tên",
                  value: "productName",
                },
                {
                  label: "Tìm theo mã",
                  value: "model",
                },
              ]}
            />
          </div>
          <div className="col-2">
            <h4 className="lable-search">:</h4>
            <Select
              className="select_factoty"
              defaultValue="Tất cả"
              style={{
                width: 200,
              }}
              onChange={(value) => setTypeSearchBranch(value)}
              options={[
                {
                  label: "Tất cả",
                  value: "",
                },
                {
                  label: "Cơ sở sản xuất",
                  value: "FACTORY",
                },
                {
                  label: "Trung tâm bảo hành",
                  value: "WARRANTY_CENTER",
                },
                {
                  label: "Đại lý phân phối",
                  value: "DISTRIBUTOR",
                },
              ]}
            />
          </div>
          <div className="col-3 ">
            <h4 className="lable-search">:</h4>
            <Button  className="btn-checking" type="primary" onClick={handleChecking}>
              Checking
            </Button>
          </div>
        </div>
      </Form>
      <hr />
      <Table columns={columns} dataSource={products} />

      <Modal
        title="Checking"
        open={isModalOpen}
        width={600}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Table
          columns={columnsPopup}
          dataSource={productIsPicked}
          pagination={{
            pageSize: 4,
          }}
        />
      </Modal>
    </div>
  );
};
export default TrackingProduct;
