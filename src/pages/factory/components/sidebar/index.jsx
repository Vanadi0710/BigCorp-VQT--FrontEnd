import React from "react";
import { AppstoreOutlined, UnorderedListOutlined, SettingOutlined, ShopOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem("Hoạt động ", "sub1", <UnorderedListOutlined />, [
        getItem("Sản xuất hàng ", "manufacture"),

    ]),
    getItem("Yêu cầu", "sub2", <UnorderedListOutlined />, [
        getItem("Nhập hàng", "input-product"),
        getItem("Xuất hàng  ", "output-product"),
        getItem("Xử lý yêu cầu  ", "make-require"),

    ]),

    getItem("Thống kê  ", "sub3", <UnorderedListOutlined />, [
        getItem("Kho", "factories-store"),
        getItem("Thống kê sản lượng", "static-sales"),
        getItem("Thống kê sản phẩm lỗi", "static-error"),
    ])
];
const SideBar = ({setCurrentRoute}) => {
    const navigate = useNavigate();

    return (

        <Menu
            onClick={({key}) => {
                navigate(key)
                setCurrentRoute(key)
            }}
            style={{
                width: 256,
            }}
            defaultSelectedKeys={["factories"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
        />
    );
};
export default SideBar;
