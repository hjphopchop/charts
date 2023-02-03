export type GenerateDate = {
  id: string;
  personal_id: string;
  name: string;
  answers: answers[];
};

type answers = {
  id: string;
  name: string;
  type: number;
  low: number;
  high: number;
  median: number;
};

export type MedianCharts = {
  [name: string]: number[];
};
