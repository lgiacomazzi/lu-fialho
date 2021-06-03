import { connectToDatabase } from "../../../util/mongodb";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function (req: VercelRequest, res: VercelResponse) {
  const { db } = await connectToDatabase();

  const query = req.query;
  const projection = {};

  const portfolios = await db
    .collection("portfolios")
    .find(query, projection)
    .toArray();

  return res.json(portfolios);
}

export async function getAllPortfolios() {
  const { db } = await connectToDatabase();

  const query = {};
  const projection = {};

  const portfolios = await db
    .collection("portfolios")
    .find(query, projection)
    .toArray();

  const serializedPortfolios = JSON.parse(JSON.stringify(portfolios));
  // console.log(JSON.parse(JSON.stringify(portfolios)));

  return serializedPortfolios;
}
