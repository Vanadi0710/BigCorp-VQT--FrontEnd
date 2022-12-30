import {Tabs} from "antd";
import ProductError from "./productError";
import ResponseProduct from "./productDoWarraty";
import ProductDoWarraty from "./productDoWarraty";
import ProductFixed from "./productFixed";
import NotFixed from "./notFixed";

const Activity = ({notify}) => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div>
            <div className="py-4">
                <h3>Activity - TODO</h3>
            </div>
            <hr/>
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                size="large"
                items={[
                    {
                        label: `Sản  phẩm lỗi`,
                        key: 'ProductError',
                        children: <ProductError notify={notify}/>,
                    },
                    {
                        label: `Sản phẩm đang bảo hành `,
                        key: 'ProductDoWarraty',
                        children: <ProductDoWarraty notify={notify}/>,
                    },
                    {
                        label: `Sản phẩm đã xửa xong`,
                        key: 'ProductFixed',
                        children: <ProductFixed notify={notify}/>,

                    },
                    {
                        label: `Sản phẩm không thể xửa`,
                        key: 'NotFixed',
                        children: <NotFixed notify={notify}/>,
                    }

                ]}
                />
        </div>
    );
}
export default Activity;