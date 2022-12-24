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
    getItem("Yêu cầu", "sub1", <UnorderedListOutlined />, [
        getItem("Nhận hàng", "comfirm-product"),
        getItem("Tạo yêu cầu", "create-require"),
        getItem("Kho", "store"),
    ]),

    getItem("Thống kê", "sub2", <UnorderedListOutlined />, [
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
