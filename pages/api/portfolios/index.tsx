import { connectToDatabase } from "../../../util/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();

  const query = {};
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

  return portfolios;
}
