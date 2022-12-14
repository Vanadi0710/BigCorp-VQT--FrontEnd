import React from "react";
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  ShopOutlined,
} from "@ant-design/icons";
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
    getItem("Nhập vào kho ", "input-store"),
  ]),
  getItem("Yêu cầu", "sub2", <UnorderedListOutlined />, [
    getItem("Xử lý yêu cầu ", "handle-requests"),
    getItem("Lịch sử yêu cầu", "all-requests"),
  ]),
  "TAKE_TO_PRODUCT_BY_FACTORY",
  "TAKE_TO_PRODUCT_BY_WARRANTY_CENTER",
  getItem("Thống kê  ", "sub3", <UnorderedListOutlined />, [
    getItem("Kho", "store"),
    getItem("Thống kê", "statistic"),
  ]),
];
const SideBar = ({ setCurrentRoute }) => {
  const navigate = useNavigate();

  return (
    <Menu
      onClick={({ key }) => {
        navigate(key);
        setCurrentRoute(key);
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
