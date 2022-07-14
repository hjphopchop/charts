import React, { useRef } from 'react'
import Layout from '../components/Layout'
import { Bar, } from "react-chartjs-2";
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

import { ArcElement, Chart } from 'chart.js';
import { GenerateDate } from '../interfaces';

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

 const data =  {
  
     labels: ["0-2", "2-4", "4-6", "6-8", "8-10"],
     datasets: [
       {
         label: "IGOR",
         data: [12, 19, 3, 5, 2, 3],
       },
     ],
   
 };

 const options = {
    plugins: {
        legend: {
            display: true,
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
            display: false
        }
    }
 }

export default function FirstTask({ answers }: any) {
  console.log(answers);

  return (
    <Layout>
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar data={data} width={400} height={200} options={options} />
      </div>
    </Layout>
  );
}
 export async function getServerSideProps() {
   const res = await fetch("http://localhost:3000/api/data");
   const answers = await res.json();
   return {
     props: { answers },
   };
 }
