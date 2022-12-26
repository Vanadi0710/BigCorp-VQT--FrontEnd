import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StatsChart from "../../../../components/chart";
import { chartColumnColor } from "../../../../constants";
import { Form, Table, Tag, Select } from "antd";
import {
  STATS_MONTHLY,
  STATS_YEARLY,
  STATS_QUARTERLY,
} from "../../../../constants/index";

const FactoryStatistic = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState(STATS_MONTHLY);
  const [filter, setFilter] = useState();

  const dataChart = {
    labels,
    datasets: [
      {
        label: "sản xuất",
        data: labels.map(() => (Math.random() + 1) * 1000),
        backgroundColor: chartColumnColor.color1,
      },
      {
        label: "xuất kho",
        data: labels.map(() => (Math.random() + 1) * 1000),
        backgroundColor: chartColumnColor.color2,
      },
    ],
  };

  const onFilterChange = (value) => {
    switch (value) {
      case "monthly":
        return setLabels(STATS_MONTHLY);
      case "quarterly":
        return setLabels(STATS_QUARTERLY);
      case "yearly":
        return setLabels(STATS_YEARLY);
      default:
        return;
    }
  };

  const fetchData = async () => {};
  useEffect(() => {}, []);

  return (
    <div className="mt-4 mb-4 pe-3">
      <div>
        <h4 style={{ display: "inline-block", marginRight: "15px" }}>
          Thống kê theo{" "}
        </h4>
        <Select
          size="large"
          defaultValue="Tháng"
          style={{
            width: 100,
          }}
          onChange={onFilterChange}
          options={[
            {
              label: "Tháng",
              value: "monthly",
            },
            {
              label: "Quý",
              value: "quarterly",
            },
            {
              label: "Năm",
              value: "yearly",
            },
          ]}
        />
      </div>
      <StatsChart title={"cơ sở sản xuất"} data={dataChart} />
    </div>
  );
};

export default FactoryStatistic;
