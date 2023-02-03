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
import { MedianCharts } from "src/types";
import { options } from "./options";

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
