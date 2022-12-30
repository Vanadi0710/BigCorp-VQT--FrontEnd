import React, { useState, useEffect } from "react";
import { Table, Button, Select } from "antd";
import ProductDetailsModal from "../../../../components/productDetails";
import productAPI from "../../../../api/product.api";
import Search from "antd/es/input/Search";
import { PAGE_SIZE } from "../../../../constants";
import { convertDate } from "../../../../utils/convertType";
import { useSelector } from "react-redux";

const DistributorStore = () => {
  const { account } = useSelector((state) => state.auth);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productIsPicked, setProductIsPicked] = useState();
  const [products, setProducts] = useState([]);

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
      title: "Ngày chuyển đến",
      dataIndex: "date",
      key: "date",
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

  const handleDropdownChange = ({ value }) => {
    let status =
      value === "IN_STOCK"
        ? [
            "TAKE_TO_DISTRIBUTOR_BY_FACTORY",
            "TAKE_TO_DISTRIBUTOR_BY_WARRANTY_CENTER",
          ]
        : ["FAILED_NEED_TO_WARRANTY_CENTER", "FAILED_NEED_TO_SUMMON"];
    getProducts(status);
  };

  const getProducts = async (
    status = [
      "TAKE_TO_DISTRIBUTOR_BY_FACTORY",
      "TAKE_TO_DISTRIBUTOR_BY_WARRANTY_CENTER",
      "FAILED_NEED_TO_WARRANTY_CENTER",
      "FAILED_NEED_TO_SUMMON",
    ]
  ) => {
    let products = await productAPI.getInstancesByBranchId({
      branchId: account.branch,
      status,
    });
    products = products?.map((product, index) => {
      return {
        ...product,
        productName: product.product?.productName,
        date: convertDate(product.updatedAt),
        key: index + "-" + product._id + "-" + product?.product?.productName,
        id: index + 1,
      };
    });
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="pt-3 pb-2 px-3">
        <h3>Kho</h3>
      </div>
      <hr />
      <div className="row py-3">
        <div className="col-3">
          <Select
            labelInValue
            defaultValue={{
              value:'',
              label: "Tất cả",
            }}
            style={{
              width: 300,
            }}
            onChange={handleDropdownChange}
            options={[
              {
                value: "IN_STOCK",
                label: "Đã nhập",
              },
              {
                value: "FAILED",
                label: "Sản phẩm lỗi",
              },
            ]}
          />
        </div>
        <div className="col-3">
          <Search
            placeholder="Nhập từ muốn search"
            // onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={products}
        pagination={{ pageSize: PAGE_SIZE }}
      />
      {isProductModalOpen && (
        <ProductDetailsModal
          setIsProductModalOpen={setIsProductModalOpen}
          product={productIsPicked}
        />
      )}
    </div>
  );
};
export default DistributorStore;
