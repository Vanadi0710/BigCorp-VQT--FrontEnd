import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./index.scss";
import { onLogOut, onSignIn } from "../../redux/action/auth.action";
import { useDispatch } from "react-redux";

const LogIn = ({ notify }) => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
     await dispatch(onSignIn(values)).unwrap();
    } catch (err) {
      notify(err, "ERROR");
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <h2 className="text-center py-4">Đăng nhập hệ thống</h2>
        <div className="px-5">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <label>
              <h6>Email:</h6>
            </label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Email không được bỏ trống !",
                },
              ]}
            >
              <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Nhập email...." />
            </Form.Item>
            <label>
              <h6>Password:</h6>
            </label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Mật khẩu không được bỏ trống !",
                },
              ]}
            >
              <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Nhập password...." />
            </Form.Item>

            <div className="text-center">
              <Form.Item>
                <a className="login-form-forgot" href="">
                  Quyên mật khẩu ?
                </a>
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                  Đăng nhập hệ thống
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
