import { connectToDatabase } from "../../../util/mongodb";
import { ObjectID } from "mongodb";

async function post(req, res) {
  const _id = ObjectID(req.query.id);

  const query = {
    _id,
  };

  const projection = {
    title: 0,
  };

  const { db } = await connectToDatabase();
  const post = await db.collection("posts").findOne(query, projection);
  return res.json(post);
}

export default post;
