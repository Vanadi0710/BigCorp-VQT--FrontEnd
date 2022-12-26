import {Tabs} from "antd";
import FactoryComponent from "./components/factoryComponent";
import WarrantyComponent from "./components/warrantyComponent";


const Requirement = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div>
            <div className="py-4">
                <h3>Xử lý yêu cầu</h3>
            </div>
            <hr/>
            <div>
                <Tabs
                    defaultActiveKey="1"
                    onChange={onChange}
                    size="large"
                    items={[
                        {
                            label: `Cơ sở xản suất`,
                            key: 'factory',
                            children: <FactoryComponent/>,
                        },
                        {
                            label: `Trung tâm bảo hành`,
                            key: 'warranty',
                            children: <WarrantyComponent/>,
                        },

                    ]}
                />
            </div>
        </div>
    );
}
export default Requirement