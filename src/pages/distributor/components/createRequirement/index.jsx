import {Tabs} from "antd";
import WarrantyComponent from "../requirement/components/warrantyComponent";
import CreateRecover from "./components/createRecover";
import WarrantyMent from "./components/warrantyment";
const CreateRequirement = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div>
            <div className="py-4">
                <h3>Tạo yêu cầu</h3>
            </div>
            <hr/>
            <div>
                <Tabs
                    defaultActiveKey="1"
                    onChange={onChange}
                    size="large"
                    items={[
                        {
                            label: `Tạo yêu cầu thu hồi`,
                            key: 'recover',
                            children: <CreateRecover/>,
                        },
                        {
                            label: `Tạo yêu cầu bảo hành`,
                            key: 'warranty',
                            children: <WarrantyMent/>,
                        },

                    ]}
                />
            </div>
        </div>
    );
}
export default CreateRequirement