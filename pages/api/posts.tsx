import { connectToDatabase } from "../../util/mongodb";

async function posts(req, res) {
  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find({}).limit(20).toArray();
  res.json(posts);
}

export default posts;
