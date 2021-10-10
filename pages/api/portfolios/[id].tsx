import { connectToDatabase } from "../../../util/mongodb";
import { ObjectID } from "mongodb";

export default async function (req, res) {
  const _id = new ObjectID(req.query.id);
  const { db } = await connectToDatabase();

  const query = {
    _id,
  };

  const projection = {
    title: 0,
  };

  if (req.method === 'POST') {
    const update = req.body;
    const portfolio = await db.collection("portfolios").findOneAndUpdate(query, { $set: update });

    return res.json("ok");

  } else {
    const portfolio = await db.collection("portfolios").findOne(query, projection);

    return res.json(portfolio);
  }


}