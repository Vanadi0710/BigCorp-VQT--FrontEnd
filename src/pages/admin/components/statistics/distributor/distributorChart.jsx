import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StatsChart from "../../../../../components/chart";
import { chartColumnColor } from "../../../../../constants";
import { Form, Table, Tag, Select } from "antd";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
];

export const dataChart = {
  labels,
  datasets: [
    {
      label: "fail",
      data: labels.map(() => (Math.random() + 1) * 1000),
      backgroundColor: chartColumnColor.color4,
    },
    {
      label: "sale",
      data: labels.map(() => (Math.random() + 1) * 1000),
      backgroundColor: chartColumnColor.color1,
    },
    {
      label: "sold",
      data: labels.map(() => (Math.random() + 1) * 1000),
      backgroundColor: chartColumnColor.color2,
    },
    {
      label: "store",
      data: labels.map(() => (Math.random() + 1) * 1000),
      backgroundColor: chartColumnColor.color3,
    },
  ],
};

const DistributorChart = () => {
  const { branchId } = useParams();
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [filter, setFilter] = useState();

  const fetchData = async () => {};
  useEffect(() => {}, []);

  return (
    <div className="mt-4 mb-4 pe-3">
      <div>
        <h4 style={{display: "inline-block", marginRight: '15px'}}>Thống kê theo </h4>
        <Select
        size="large"
          defaultValue="Tháng"
          style={{
            width: 100,
          }}
          onChange={() => console.log(42)}
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
            }
          ]}
        />
      </div>
      <StatsChart title={"Thống kê cơ sở sản phân phối"} data={dataChart} />
    </div>
  );
};

export default DistributorChart;
