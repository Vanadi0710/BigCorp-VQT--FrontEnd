import {Button, Input, List, Select} from "antd";
import React from "react";

const WarrantyMent = () => {
    const data = [
        {
            key: '1',
            title: 'Macbook',
        }
    ];
    return (
        <div>
            <div className="row py-3">
                <div className="col-5">
                    <div>
                        <span style={{color: "red"}}>Lưu ý : nếu sản phẩm không có mã khách hàng thì từ chối bảo hành !</span>
                    </div>
                    <h5>Nhập mã sản phẩm thu hồi</h5>
                    <Input className="my-2" placeholder="Nhập mã sản phẩm ...." />
                    <div className="py-4">
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a>{item.title}</a>}
                                    />
                                </List.Item>

                            )}

                        />
                    </div>
                    <hr/>

                    <Button type="primary">Xác nhận</Button>
                </div>

                <div className="col-3">
                    <span style={{color: "white"}}>.</span>
                    <h5>Nhập mã hhách hàng</h5>
                    <Input className="my-2" placeholder="Nhập mã khách hàng ...." />


                </div>
                <div className="col-3">
                    <span style={{color: "white"}}>.</span>
                    <h5>Trọn trung tâm bảo hành</h5>
                    <Select className="py-2"
                        showSearch
                        placeholder="chọn cơ sở bảo hành"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'A',
                                label: 'trung tâm A',
                            },
                            {
                                value: 'B',
                                label: 'trung tâm B',
                            },
                            {
                                value: 'C',
                                label: 'trung tâm C',
                            },
                            {
                                value: 'D',
                                label: 'trung tâm D',
                            },
                        ]}
                    />

                </div>

            </div>
        </div>
    )
}
export default WarrantyMent