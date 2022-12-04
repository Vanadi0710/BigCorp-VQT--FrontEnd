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
  getItem("Danh sách", "sub1", <UnorderedListOutlined />, [
    getItem("List cơ sở sản xuất", "/factories"),
    getItem("List đại lý phân phối ", "/distributors"),
    getItem("List trung tâm bảo hành ", "/warranty-centers"),
  ])
];
const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Menu
            onClick={({ key }) => {
              navigate(key);
              console.log(key)
            }}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["/factories"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <main className="col-md-10">
      
        </main>
      </div>
      <Outlet />
    </div>
  );
};
export default SideBar;
