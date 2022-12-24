import { Form, Table } from "antd";
import React, { useState, useEffect } from "react";
import productAPI from "../../../../../api/product.api";
import { PAGE_SIZE } from "../../../../../constants";
import { useNavigate } from "react-router-dom";

const ManageProduct = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Hãng sản phẩm",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (product) => (
        <button
          onClick={() => redirectToProductDetails(product)}
          className="btn btn-primary"
        >
          chi tiết
        </button>
      ),
    },
  ];

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const redirectToProductDetails = (product) => {
    navigate(`/products/${product._id}`);
  };

  const getProducts = async () => {
    let products = await productAPI.getProducts();
    products = products.map((product, index) => {
      return {
        ...product,
        brand: product?.productLine?.brand,
        key: index,
        id: index + 1,
      };
    });
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Form component={false}>
      <div>
        <h3 className="py-3">Quản lý sản phẩm</h3>
        <hr />
      </div>
      <Table
        columns={columns}
        dataSource={products}
        size="small"
        pagination={{
          pageSize: PAGE_SIZE,
        }}
      />
    </Form>
  );
};
export default ManageProduct;
