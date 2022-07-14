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
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
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

export default function PowerfullBar({ medianCharts }: any) {
  const names = Object.keys(medianCharts);

  const data = {
    labels: [],
    datasets: [],
  };
  let fullDataset: any = [];
  names.map((item) => {
    for (let i = 0; i < medianCharts[item].length; i++) {
      data.labels.push(item);
    }
    fullDataset = fullDataset.concat(medianCharts[item]);
  });
  console.log(fullDataset);
  data.datasets.push({ data: fullDataset });

  console.log(medianCharts);
  console.log(data);

  return <Bar data={data} options={options} />;
}
