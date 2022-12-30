import "./index.scss";
import { useState } from "react";
import {DownOutlined, StepBackwardOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Button, Dropdown, Space, Modal, Drawer} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { onLogOut } from "../../redux/action/auth.action";
import branchAPI from "../../api/branch.api";
import { convertBranchType } from "../../utils/convertType";
import SideBar from "../../pages/admin/components/sidebar";
// import SideBar from "../../distributor/admin/components/sidebar";
// import SideBar from "../../warrantyCenter/admin/components/sidebar";
const Header = () => {
  // open menu
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  // end open menu
  const { account } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [branch, setBranch] = useState({});
  const dispatch = useDispatch();

  const showModal = async () => {
    setIsModalOpen(true);
    await getBranch();
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDropDownClick = async (e) => {
    if (e.key === "info") showModal();
    else if (e.key === "logOut") dispatch(onLogOut());
  };

  const items = [
    {
      label: "Tài khoản",
      key: "info",
    },
    {
      label: "Đăng xuất",
      key: "logOut",
    },
  ];
  const menuProps = {
    items:
      account.role === "ADMIN"
        ? items.filter((item) => item.key !== "info")
        : items,
    onClick: handleDropDownClick,
  };

  const getBranch = async () => {
    const _branch = await branchAPI.getBranch(account.branch);
    setBranch(_branch);
  };

  return (
    <div className="header-nav header-menu">
      <div className="row">
        <div className="col-10 py-4 px-5 d-flex">
          <img
            className="logo-header"
            src={require("../../assets/images/logo/logo.png")}
            alt="product"
          />
          <h3>Bigcorp Corporation</h3>
          <Button className="button_menu" onClick={showDrawer} ><UnorderedListOutlined /></Button>
        </div>
        <div className="col-2 py-4 menu_infor">
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Xin chào {account.username}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h5>Thông tin tài khoản</h5>
        <p className="ps-4">
          <b>Tên người dùng: </b> &nbsp; {account.username}
        </p>
        <h5 className="mt-4">Cơ sở quản lý</h5>
        <p className="ps-4">
          <b>Tên cơ sở:</b>&nbsp; {branch.branchName}
        </p>
        <p className="ps-4">
          <b>Loại cơ sở:</b>&nbsp; {convertBranchType(branch.branchType)}
        </p>
        <p className="ps-4">
          <b>Địa chỉ:</b>&nbsp; {branch.address}
        </p>
        <p className="ps-4">
          <b>Số điện thoại:</b>&nbsp; {branch.phone}
        </p>
        <p className="ps-4">
          <b>Quy mô:</b>&nbsp; {branch.members}
        </p>
      </Modal>
      <Drawer
          placement={placement}
          width={300}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button  onClick={onClose}>
                <StepBackwardOutlined />
              </Button>
            </Space>
          }
      >
       <SideBar/>
        {/*<SideBar/>*/}
        {/*<SideBar/>*/}
      </Drawer>
    </div>
  );
};
export default Header;
