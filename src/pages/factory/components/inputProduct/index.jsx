import {Button, Form, Input, InputNumber, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";

const InputProduct = () => {
    return (
        <div>
            <div className="py-4">
                <h3>Nhập sản phẩm</h3>
            </div>
           <hr/>
           <div>
                <div>
                    <h4>Thông tin chung</h4>
                </div>
               <div className="row py-4">
                   <div className="col-5">
                       <Form  layout="vertical">
                           <Form.Item name="name" label="Nhập tên sản phẩm">
                               <Input placeholder=" Nhập tên sản phẩm ..." />
                           </Form.Item>
                           <Form.Item name="number" label="Nhập số lượng">
                               <InputNumber />
                           </Form.Item>
                           <Form.Item label="ảnh mô tả" valuePropName="fileList">
                               <Upload action="/upload.do" listType="picture-card">
                                   <div>
                                       <PlusOutlined />
                                       <div
                                           style={{
                                               marginTop: 8,
                                           }}
                                       >
                                           Upload
                                       </div>
                                   </div>
                               </Upload>
                           </Form.Item>

                       </Form>
                   </div>
                   <div className="col-1"> </div>
                   <div className="col-5">
                       <Form  layout="vertical">
                           <Form.Item name="code" label="Nhập mã sản phẩm">
                               <Input placeholder=" Nhập Mã sản phẩm ..." />
                           </Form.Item>
                           <Form.Item name="note" label="Ghi chú">
                               <TextArea rows={3} placeholder=" Ghi chú ..."/>
                           </Form.Item>
                       </Form>

                   </div>


               </div>
               <Button type="primary">Xác nhận</Button>

           </div>
        </div>
    );
}
export default  InputProduct