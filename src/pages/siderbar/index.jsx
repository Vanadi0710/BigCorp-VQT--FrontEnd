import React from 'react';
import { AppstoreOutlined, UnorderedListOutlined, SettingOutlined , ShopOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import {Route, Routes, useNavigate} from "react-router-dom";
import Rout from "../router";

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

    getItem('Danh sách', 'sub1', <UnorderedListOutlined />, [
        getItem('List cơ sở sản xuất', '/list-product'),
        getItem('List đại lý phân phối ', '/list-dealer'),
        getItem('List trung tâm bảo hành ', '/list-warrant')
    ]),

    getItem('Cơ sở sản xuất', 'sub2', <AppstoreOutlined />, [
        getItem('Kho', '/product/store'),
        getItem('Tạo yêu cầu', '/product/require'),
        getItem('Báo cáo', 'sub3', null, [getItem('Báo cáo sản xuất ', '/product/report')]),
    ]),

    getItem('Đại lý phân phối', 'sub4',<ShopOutlined />, [
        getItem('Kho', '/dealer/store'),
        getItem('Tạo yêu cầu ', '/dealer/require'),
        getItem('Báo cáo', 'sub3', null,
            [
                        getItem('Báo cáo doanh thu ', '/dealer-report/proceeds') ,
                        getItem('Báo cáo sản phẩm lỗi', 'dealer-report/mistake')
            ]),
    ]),

    getItem('Trung tâm bảo hành', 'sub5',  <SettingOutlined />, [
        getItem('Kho', '/warranty/store'),
        getItem('Tạo yêu cầu ', '/warranty/require'),
        getItem('Báo cáo', '/warranty/report')], ),
];
const SiderBar = () => {
    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Menu
                        onClick={({key}) => {
                            navigate(key);
                        }}
                        style={{
                            width: 256,
                        }}
                        defaultSelectedKeys={['/list-product']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                </div>
                <main className="col-md-10">
                    <Rout/>
                </main>
            </div>
        </div>
    );
};
export default SiderBar;
