import React, {useEffect, useState} from "react";
import {Select} from "antd";
import Search from "antd/es/input/Search";

const StoreWarranty =() => {
    const [products, setProducts] = useState([]);
    const onSearch = (value) => console.log(value);

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

        </div>
    );
}
export default StoreWarranty