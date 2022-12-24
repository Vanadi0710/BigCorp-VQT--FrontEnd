import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsChart = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };
  return (
    <>
    <h3 className="text-center mt-4 mb-4">Biểu đồ thống kê của {title}</h3>
    <Bar options={options} data={data} />
    </>
  )
};

export default StatsChart;
