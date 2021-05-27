import axios from "axios";
import { connectToDatabase } from "../../../util/mongodb";

export default async function (req, res) {
  const query = {};

  const projection = {};

  const { db } = await connectToDatabase();
  const portfolios = await db
    .collection("portfolios")
    .find(query, projection)
    .limit(20)
    .toArray();

  return res.json(portfolios);
}
