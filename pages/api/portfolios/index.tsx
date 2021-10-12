import { connectToDatabase } from "../../../util/mongodb";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { ObjectID } from "mongodb";


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

export async function getPortfolioById(id) {
  const _id = new ObjectID(id);
  const { db } = await connectToDatabase();

  const query = { _id };

  const portfolio = await db.collection("portfolios").findOne(query);

  const serializedPortfolio = JSON.parse(JSON.stringify(portfolio));
  // console.log(JSON.parse(JSON.stringify(portfolios)));

  return serializedPortfolio;
}
