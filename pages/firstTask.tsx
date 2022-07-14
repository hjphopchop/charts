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
import { interceptionData } from "../utils/logic";

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

  const lowHightCharts = interceptionData(answers);
  return {
    props: { lowHightCharts, answers },
  };
}
