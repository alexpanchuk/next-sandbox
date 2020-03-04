import { NextApiRequest, NextApiResponse } from "next";

export type DateResponse = {
  date: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");

  res.json({ date });
};
