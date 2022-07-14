import { GenerateDate } from "../interfaces";

export const interceptionData = (obj: Array<GenerateDate>) => {
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