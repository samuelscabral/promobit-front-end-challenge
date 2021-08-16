// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { getGenres } from "utils/apiWrapper";
import { Genre } from "utils/apiWrapper/apiTypes";

type Data = {
  genres: Genre[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const genres = await getGenres();

  res.status(200).json({ genres });
}
