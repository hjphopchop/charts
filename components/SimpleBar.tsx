import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 1,
      borderColor: "rgba(47,97,68,1)",
      fill: "start",
      backgroundColor: "rgba(47,47,68,0.3)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxis: {
      display: true,
    },
    yAxis: {
      display: false,
    },
  },
};
interface SimplebarProps {
  lowHightCharts: Array<number>;
}
export default function SimpleBar({ lowHightCharts }: SimplebarProps) {
  const data = {
    labels: ["0-2", "2-4", "4-6", "6-8", "8-10"],
    datasets: [
      {
        data: lowHightCharts,
        backgroundColor: "rgb(46, 147, 242)",
      },
    ],
  };
  return (
    <Bar
      className="my-5"
      data={data}
      height={"1vh"}
      width={"5vw"}
      options={options}
    />
  );
}
