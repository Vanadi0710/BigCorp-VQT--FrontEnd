import './index.scss';
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {Avatar, Badge, Button, Dropdown, message, Space, Tooltip} from 'antd';
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: 'Đổi mật khẩu',
        key: 'modifi',

    },
    {
        label: 'Đăng xuất',
        key: 'logout',
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick,
};
const Header = () => {
    return (
        <div className='header-nav header-menu'>
             <div className="row">
                 <div className="col-10 py-4 px-5 d-flex align-items-center">
                     <img className="logo-header" src={require("../../assets/images/logo/logo.png")}/>
                     <h3>Product</h3>
                 </div>
                 <div className="col-2 py-4">

                 <Dropdown menu={menuProps}>
                    <Button>
                       <Space>
                          Xin chào bạn Lường vinh
                        <DownOutlined />
                       </Space>
                     </Button>
                 </Dropdown>

                 </div>
             </div>
        </div>
    );
}
export default Header;