import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StatsChart from "../../../../../components/chart";
import { acerProducts, appleProducts, brandTypes, chartColumnColor, dellProducts, lenovoProducts, msiProducts } from "../../../../../constants";
import { Form, Table, Tag, Select } from "antd";
import { STATS_MONTHLY, STATS_YEARLY, STATS_QUARTERLY } from "../../../../../constants/index";
import './index.css';

const ProductChart = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState(STATS_MONTHLY);
  const [filterPeriod, setFilterPeriod] = useState();
  const [filterBrand, setFilterBrand] = useState();
  const [filterProduct, setFilterProduct] = useState();
  const [dropdownProduct, setDropdownProduct] = useState([]);

  const dataChart = {
    labels,
    datasets: [
      {
        label: "đã bán",
        data: labels.map(() => (Math.random() + 1) * 1000),
        backgroundColor: chartColumnColor.color1,
      },
      {
        label: "lỗi",
        data: labels.map(() => (Math.random() + 1) * 1000),
        backgroundColor: chartColumnColor.color2,
      },
      {
        label: "tồn kho",
        data: labels.map(() => (Math.random() + 1) * 1000),
        backgroundColor: chartColumnColor.color3,
      },
    ],
  };

  const onFilterPeriodChange = (value) => {
    switch (value) {
      case "monthly":
        setFilterPeriod("monthly");
        return setLabels(STATS_MONTHLY);
      case "quarterly":
        setFilterPeriod("quarterly");
        return setLabels(STATS_QUARTERLY);
      case "yearly":
        setFilterPeriod("yearly");
        return setLabels(STATS_YEARLY);
      default:
        return;
    }
  };

  const onFilterProductChange = (value) => {
    setFilterBrand(value);
  };

  const onFilterBrandChange = (value) => {
    setFilterBrand(value);
    switch (value) {
      case "lenovo":
        return setDropdownProduct(lenovoProducts);
      case "dell":
        return setDropdownProduct(dellProducts);
      case "acer":
        return setDropdownProduct(acerProducts);
      case "msi":
        return setDropdownProduct(msiProducts);
      case "apple":
        return setDropdownProduct(appleProducts);
      default:
        return;
    }
  };

  const fetchData = async () => {};
  useEffect(() => {}, []);

  return (
    <div className="mt-4 mb-4 pe-3">
      <div>
        <h4 style={{ display: "inline-block", marginRight: "15px" }}>Thống kê theo </h4>
        <Select
          defaultValue="Tháng"
          className="select_month"
          style={{
            width: 100,
          }}
          onChange={onFilterPeriodChange}
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
        <Select
          defaultValue="Tất cả"
          style={{
            width: 120,
            marginLeft: 20,
          }}
          onChange={onFilterBrandChange}
          options={brandTypes.map((brand) => ({
            value: brand.toLowerCase(),
            label: brand,
          }))}
        />
        <Select
          disabled={dropdownProduct.length === 0}
          defaultValue="Tất cả"
          style={{
            width: 200,
            marginLeft: 20,
          }}
          onChange={onFilterProductChange}
          options={dropdownProduct?.map((product) => ({
            label: product,
            value: product,
          }))}
        />
      </div>
      <StatsChart title={"cơ sở sản xuất"} data={dataChart} />
    </div>
  );
};

export default ProductChart;
