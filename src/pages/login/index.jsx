import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss';
const LogIn = () => {
    return (
        <div className="body">
            <div className="wrapper">
                <section className="form login">
                    <h2 className="text-center">Đăng nhập hệ thống</h2>

                    <div className="error-text">
                        Xin vui lòng kiểm tra lại dữ liệu phập vào!

                    </div>
                    <form action="#" method="">
                        <div className="field input">
                            <label>Email Address</label>
                            <input type="text" name="email" placeholder="Enter your email" ></input>
                        </div>
                        <div className="field input">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password"></input>
                        </div>
                        <div className="field button">
                            <input type="submit" name="submit" value="Đăng nhập"></input>
                        </div>
                    </form>

                    <a className="back_home forgot_password text-center" >Quên mật khẩu ?</a>
                </section>

            </div>

        </div>
    )

};
export default LogIn;