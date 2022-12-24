import {UnorderedListOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {Menu} from "antd";
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
    getItem("Thu ngân", "sub2", <UnorderedListOutlined />, [
        getItem("Bán hàng", "cashier"),
        getItem("Hoá đơn", "history-cashier"),

    ]),
    getItem("Yêu cầu", "sub2", <UnorderedListOutlined />, [
        getItem("Nhập hàng", "cashier"),
        getItem("Tạo yêu cầu ", "history-cashier"),

    ]),
    getItem("Tổng hợp ", "sub2", <UnorderedListOutlined />, [
        getItem("Kho", "store"),
        getItem("Thống kê doanh số", "comfirm-require"),
        getItem("Phân tích doanh số", "statistics-product"),
    ]),

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
