import { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data";
import { GenerateDate } from "../../../interfaces";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GenerateDate[]>
) {
  return res.status(200).json(data);
}
