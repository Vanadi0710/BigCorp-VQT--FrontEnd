import React, { useState } from "react";
import { Table, Button } from "antd";
import ProductDetailsModal from "../productDetails";
import productAPI from "../../api/product.api";
import { PAGE_SIZE } from "../../constants";

const Store = ({ products }) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productIsPicked, setProductIsPicked] = useState();

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "ngày sản xuất",
      dataIndex: "producedDate",
      key: "producedDate",
      ellipsis: true,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      ellipsis: true,
    },
    {
      title: "Chi tiết",
      key: "detail",
      render: (product) => (
        <Button
          onClick={async () => {
            setIsProductModalOpen(true);
            let productDetail = await productAPI.getProduct(
              product.product._id
            );
            setProductIsPicked(productDetail);
          }}
          type="primary"
        >
          chi tiết
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={products} pagination={{pageSize: PAGE_SIZE}}/>
      {isProductModalOpen && (
        <ProductDetailsModal
          setIsProductModalOpen={setIsProductModalOpen}
          product={productIsPicked}
        />
      )}
    </div>
  );
};
export default Store;
