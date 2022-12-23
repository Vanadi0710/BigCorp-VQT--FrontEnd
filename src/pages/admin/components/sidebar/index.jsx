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
  getItem("Quản lý", "sub1", <UnorderedListOutlined />, [
    getItem("Quản lý tài khoản", "accounts"),
    getItem("Quản lý sản phẩm", "manage-product"),

  ]),
  getItem("Tổng hợp ", "sub2", <UnorderedListOutlined />, [
    getItem("Checking sản phẩm", "checking-product"),
    getItem("Thống kê sản phẩm", "statistics-product"),
  ]),
  getItem("Thống kê  ", "sub3", <UnorderedListOutlined />, [
    getItem("Cơ xản suất", "report-factories"),
    getItem("Đại lý ", "report-distributors"),
    getItem("Bảo hành", "report-warranty-centers"),
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
