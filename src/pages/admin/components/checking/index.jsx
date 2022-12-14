import {Input, Form, Select, Button, } from 'antd';

import React from "react";
import './style.scss';

const CheckingProduct = () => {
    const onSearch = (value) => console.log(value);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }


    return (
        <div className="">
            <h2>Checking sản phẩm</h2>
                <hr/>
                <Form >
                    <div className="row py-3">
                    <div className="col-5 ">
                        <h4>Nhập mã sản phẩm:</h4>
                        <Input size="large" placeholder="Nhập mã sản phẩm...." />

                    </div>
                        <div className="col-2">
                            <h4 className="lable-search">:</h4>
                            <Select
                                size = "large"
                                defaultValue="distributors"
                                style={{
                                    width: 200,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        options: [
                                            {
                                                label: 'Cơ sở sản xuất',
                                                value: 'factories',
                                            },
                                        ],
                                    },
                                    {
                                        options: [
                                            {
                                                label: 'Trung tâm bảo hành',
                                                value: 'warranty',
                                            },
                                        ],
                                    },
                                    {
                                        options: [
                                            {
                                                label: 'Đại lý phân phối',
                                                value: 'distributors',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </div>
                    <div className="col-3 ">
                        <h4 className="lable-search">:</h4>
                        <Button size="large" type="primary">Checking</Button>

                    </div>

                    </div>
                </Form>


        </div>
    );
}
export default CheckingProduct