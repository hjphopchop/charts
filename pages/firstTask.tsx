import React from "react";
import Layout from "../components/Layout";
import SimpleBar from "../components/SimpleBar";
import { interceptionData } from "../utils/logic";


export default function FirstTask({ lowHightCharts }:any) {
  return (
    <Layout>
      <div className="w-1/2 text-center">
        <h2>Bar Example (custom size)</h2>
        <SimpleBar lowHightCharts={lowHightCharts} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const answers = await res.json();

  const lowHightCharts = interceptionData(answers);
  return {
    props: { lowHightCharts},
  };
}
