import React from "react";
import Layout from "../components/Layout";
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

import { GenerateDate } from "../interfaces";

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

export default function FirstTask(
  { lowHightCharts }: any,
  { answers }: GenerateDate
) {
  const data = {
    labels: ["0-2", "2-4", "4-6", "6-8", "8-10"],
    datasets: [
      {
        data: lowHightCharts,
      },
    ],
  };
  console.log(answers);

  return (
    <Layout>
      <div className="w-1/2 text-center">
        <h2>Bar Example (custom size)</h2>
        <Bar data={data} options={options} />
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const answers = await res.json();
  const interceptionData = (obj: Array<GenerateDate>) => {
    const lowHigh: Array<any> = [];
    obj.map((item) => {
      item.answers.map((item) => {
        if (item.type === 0) {
          lowHigh.push((item.low + item.high) / 2);
        }
      });
    });

    return formationData(lowHigh);
  };

  const formationData = (arr: Array<number>) => {
    const array = [0, 0, 0, 0, 0];
    arr.map((item: number) => {
      switch (true) {
        case item >= 8:
          ++array[4];
          break;
        case item >= 6:
          ++array[3];
          break;
        case item >= 4:
          ++array[2];
          break;
        case item >= 2:
          ++array[1];
          break;
        case item >= 0:
          ++array[0];
          break;
        default:
          break;
      }
    });
    return array;
  };
  const lowHightCharts = interceptionData(answers);
  return {
    props: { lowHightCharts, answers },
  };
}
