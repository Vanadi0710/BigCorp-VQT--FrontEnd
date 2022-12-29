import { UnorderedListOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import React from "react";

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
  getItem("Thu ngân", "sub1", <UnorderedListOutlined />, [getItem("Bán hàng", "cashier"), getItem("Lịch sử giao dịch", "history-cashier")]),
  getItem("Yêu cầu", "sub2", <UnorderedListOutlined />, [
    getItem("Xử lý yêu cầu ", "handle"),
    getItem("Tạo yêu cầu ", "create-require"),
    getItem("Lịch sử yêu cầu ", "history-require"),
  ]),
  getItem("Tổng hợp ", "sub3", <UnorderedListOutlined />, [
    getItem("Kho", "store"),
    getItem("Thống kê doanh số", "statistics-require"),
    getItem("Phân tích doanh số", "analyse-product"),
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
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default SideBar;
