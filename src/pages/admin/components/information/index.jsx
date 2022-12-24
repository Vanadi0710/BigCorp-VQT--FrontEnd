import React, { useState } from 'react';
import { Image } from 'antd';
const Information = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div className="py-4">
                <h3>Thông tin chi tiết sản phẩm</h3>
            </div>
            <hr/>
            <div className="row d-flex align-items-center py-5">
                <div className="col-4">
                    <h4>Ảnh sản phẩm</h4>
                    <>
                        <Image
                            preview={{
                                visible: false,
                            }}
                            width={400}
                            src={require("../../../../assets/images/anh1.jpg")}
                            onClick={() => setVisible(true)}
                        />
                        <div
                            style={{
                                display: 'none',
                            }}
                        >
                            <Image.PreviewGroup
                                preview={{
                                    visible,
                                    onVisibleChange: (vis) => setVisible(vis),
                                }}
                            >
                                <Image src={require("../../../../assets/images/anh1.jpg")} />
                                <Image src={require("../../../../assets/images/anh2.jpg")} />
                                <Image src={require("../../../../assets/images/anh3.jpg")} />
                            </Image.PreviewGroup>
                        </div>
                    </>


                </div>
                <div className="col-8">
                    <h4>Thông số cấu hình</h4>


                    

                </div>
            </div>
            <div className="container">
                <h3>Thống kê</h3>
            </div>
        </div>
    )
}
export default Information