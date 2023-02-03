import { NextApiRequest, NextApiResponse } from "next";
;
import { GenerateDate } from "src/types";
import { data } from "src/data/testData";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GenerateDate[]>
) {
  return res.status(200).json(data);
}
