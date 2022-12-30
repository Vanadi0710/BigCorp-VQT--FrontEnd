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
    getItem("Hoạt động", "sb", <UnorderedListOutlined />, [
        getItem("Xử lý sản phẩm lỗi", "activity"),
    ]),
    getItem("Yêu cầu", "sub1", <UnorderedListOutlined />, [
        getItem("Xử lý yêu cầu", "handle-requests"),
        getItem("Lịch sử yêu cầu", "history-requirement"),
    ]),

    getItem("Thống kê", "sub2", <UnorderedListOutlined />, [
        getItem("Kho", "store"),
        getItem("Thống kê sản phẩm", "warranty-static"),

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
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
        />
    );
};
export default SideBar;
