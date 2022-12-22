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
        key: '1',

    },
    {
        label: 'Đăng xuất',
        key: '2',
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
                 <div className="col-10 py-4 px-5 d-flex">
                     <img className="logo-header" src={require("../../assets/images/logo/logo.png")}/>
                     <h3>Product</h3>
                 </div>
                 <div className="col-2 py-4">

                     <Dropdown menu={menuProps}>
                         <Button>
                             <Space>
                                  <span className="avatar-item">
                         <Badge count={1}>
                         <Avatar shape="square" icon={<UserOutlined/>}/>
                         </Badge>
                                  </span>
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