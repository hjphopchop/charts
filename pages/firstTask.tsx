import React from "react";
import Layout from "../components/Layout";
import PowerfullBar from "../components/PowerfullBar";
import SimpleBar from "../components/SimpleBar";
import { interceptionData, medianData } from "../utils/logic";

export default function FirstTask({ lowHightCharts, medianCharts }: any) {
  console.log(medianCharts);
  return (
    <Layout>
      <div className="container mx-auto py-10 px-10">
        <SimpleBar className="py-5" lowHightCharts={lowHightCharts} />
        <PowerfullBar className="py-5" medianCharts={medianCharts} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const answers = await res.json();
  const medianCharts = medianData(answers, 0);
  console.log(`median ${medianCharts}`);
  const lowHightCharts = interceptionData(answers, 0);
  return {
    props: { lowHightCharts, medianCharts },
  };
}
