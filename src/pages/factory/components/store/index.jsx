import React, { useState, useEffect } from "react";
import { Divider, Image, Radio, Select, Table } from "antd";
import Search from "antd/es/input/Search";
import factoryAPI from "../../../../api/factory.api";
import { convertDate } from "../../../../utils/convertType";
import Store from "../../../../components/store";

const FactoryStore = () => {
  const [products, setProducts] = useState([]);
  const onSearch = (value) => console.log(value);
  const handleDropdownChange = ({value}) => {
    console.log(value)
     getProducts(value)
  };

  const getProducts = async (status = 'IN_STOCK') => {
    let products = await factoryAPI.getDevices(false, status);
    products = products.map((product, index) => {
      return {
        ...product,
        productName: product.product?.productName,
        producedDate: convertDate(product.producedDate),
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
      <div className="py-4">
        <h3>Store</h3>
      </div>
      <hr />

      <div className="row py-3">
        <div className="col-3">
          <Select
            labelInValue
            defaultValue={{
              value: "IN_STOCK",
              label: "Đã nhập",
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
                label: "Sản phẩm lỗi ",
              },
            ]}
          />
        </div>
        <div className="col-3">
          <Search
            placeholder="Nhập từ muốn search"
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
      <Store products={products} />
    </div>
  );
};
export default FactoryStore;
