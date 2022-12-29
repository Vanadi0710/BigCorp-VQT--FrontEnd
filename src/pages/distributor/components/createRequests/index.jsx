import { Tabs } from "antd";
import CreateRecover from "./components/requestSummon";
import WarrantyMent from "./components/requestToWarratyCenter";
import CreateRequireFactory from "./components/requestToFactory";

const CreateRequirement = ({notify}) => {
  const onChange = (key) => {
    console.log(key);
  };
 
  return (
    <div className="ps-2">
      <div className="pt-4 pb-1">
        <h3>Tạo yêu cầu</h3>
      </div>
      <hr />
      <div>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          size="large"
          items={[
            {
              label: `Tạo yêu cầu thu hồi`,
              key: "recover",
              children: <CreateRecover />,
            },
            {
              label: `Tạo yêu cầu bảo hành`,
              key: "warranty",
              children: <WarrantyMent />,
            },
            {
              label: `Tạo yêu cầu nhập`,
              key: "factory",
              children: <CreateRequireFactory notify={notify} />,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default CreateRequirement;
