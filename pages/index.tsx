import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PowerfullBar from '../components/PowerfullBar'
import SimpleBar from '../components/SimpleBar'

import { interceptionData, medianData } from '../utils/logic'


export default function Home({lowHightCharts, medianCharts}) {
  return (
    <Layout>
      <div className="w-1/2 text-center">
        <h2>Bar Example (custom size)</h2>
        <SimpleBar lowHightCharts={lowHightCharts} />
        <PowerfullBar medianCharts={medianCharts} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const answers = await res.json();
  const medianCharts = medianData(answers, -1);
  console.log(`median ${medianCharts}`);
  const lowHightCharts = interceptionData(answers, -1);
  return {
    props: { lowHightCharts, medianCharts },
  };
}

