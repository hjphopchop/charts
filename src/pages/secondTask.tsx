import React from "react";
import Layout from "src/layout/Layout";
import {PowerfullBar} from "src/components/PowerfullBar";
import {SimpleBar} from "src/components/SimpleBar"
import { MedianCharts } from "src/types";
import { interceptionData, medianData } from "src/utils/logic";

interface FirstTaskProps {
  lowHightCharts: Array<number>;
  medianCharts: MedianCharts;
}

export default function FirstTask({
  lowHightCharts,
  medianCharts,
}: FirstTaskProps) {
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
  const medianCharts = medianData(answers, 1);
  const lowHightCharts = interceptionData(answers, 1);
  return {
    props: { lowHightCharts, medianCharts },
  };
}
