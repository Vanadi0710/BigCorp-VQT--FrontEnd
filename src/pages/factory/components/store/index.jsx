import React, { useState, useEffect } from "react";
import { Divider, Image, Radio, Select, Table } from "antd";
import Search from "antd/es/input/Search";
import factoryAPI from "../../../../api/factory.api";
import { convertDate, convertProductStatusType } from "../../../../utils/convertType";
import Store from "../../../../components/store";

const FactoryStore = () => {
  const [products, setProducts] = useState([]);
  const onSearch = (value) => console.log(value);
  const handleDropdownChange = ({value}) => {
     getProducts(value)
  };

  const getProducts = async (status = 'IMPORTED_STORE') => {
    let products = await factoryAPI.getDevices(false, status);
    products = products?.map((product, index) => {
      return {
        ...product,
        productName: product.product?.productName,
        producedDate: convertDate(product.producedDate),
        key: index + "-" + product._id + "-" + product?.product?.productName,
        id: index + 1,
        status: convertProductStatusType(product.status)
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
              value: "IMPORTED_STORE",
              label: "Đã nhập",
            }}
            style={{
              width: 300,
            }}
            onChange={handleDropdownChange}
            options={[
              {
                value: "IMPORTED_STORE",
                label: "Đã nhập",
              },
              {
                value: 'FAILED_SENT_TO_FACTORY',
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
