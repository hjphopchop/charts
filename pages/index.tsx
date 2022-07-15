import type { NextPage } from "next";
import Layout from "../components/Layout";
import PowerfullBar from "../components/PowerfullBar";
import SimpleBar from "../components/SimpleBar";
import { MedianCharts } from "../interfaces";

import { interceptionData, medianData } from "../utils/logic";

interface HomeProps {
  lowHightCharts: Array<number>;
  medianCharts: MedianCharts;
}
export default function Home({ lowHightCharts, medianCharts }: HomeProps) {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-10">
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
  const lowHightCharts = interceptionData(answers, -1);
  return {
    props: { lowHightCharts, medianCharts },
  };
}
