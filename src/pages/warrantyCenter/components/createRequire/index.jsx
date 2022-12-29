import {Tabs} from "antd";
import Recover from "./recover";
import ResponseProduct from "./responseProduct";

const CreateRequire = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div>
            <div className="py-4">
                <h3>Tạo yêu cầu</h3>
            </div>
            <hr/>
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                size="large"
                items={[
                    {
                        label: `Tạo yêu cầu bảo hành xong`,
                        key: 'response',
                        children: <ResponseProduct/>,
                    },
                    {
                        label: `Tạo yêu cầu thu hồi `,
                        key: 'recover',
                        children: <Recover/>,
                    },

                ]}
                />
        </div>
    );
}
export default CreateRequire;