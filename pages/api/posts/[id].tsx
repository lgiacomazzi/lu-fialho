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

  const post = await db.collection("posts").findOne(query, projection);

  return res.json(post);
}
