import { connectToDatabase } from "../../../util/mongodb";

async function post(req, res) {
  const { db } = await connectToDatabase();
  const post = await db.collection("posts").find({ id: req.query.id });
  res.json(post);
}

export default post;
