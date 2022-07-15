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
import { MedianCharts } from "../interfaces";

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
      borderColor: "rgba(0, 0, 0,0.7)",
      fill: "start",
      backgroundColor: "rgba(0,47,97,0.6)",
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
export interface PowerfullBarProps {
  medianCharts: MedianCharts;
}

export default function PowerfullBar({ medianCharts }: PowerfullBarProps) {
  const names = Object.keys(medianCharts);
  const data: any = {
    labels: [],
    datasets: [],
  };
  let fullDataset: Array<number> = [];
  names.map((item: string) => {
    for (let i = 0; i < medianCharts[item].length; i++) {
      data.labels.push(item);
    }
    fullDataset = fullDataset.concat(medianCharts[item]);
  });
  data.datasets.push({
    data: fullDataset,
    backgroundColor: "rgb(230, 80, 80)",
  });

  console.log(fullDataset);

  return (
    <Bar
      className="my-10"
      data={data}
      height={"1vh"}
      width={"5vw"}
      options={options}
    />
  );
}
