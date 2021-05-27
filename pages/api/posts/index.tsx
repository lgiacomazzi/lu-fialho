import axios from "axios";
import { connectToDatabase } from "../../../util/mongodb";

export default async function (req, res) {
  const query = {};

  const projection = {};

  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find(query, projection)
    .limit(20)
    .toArray();

  return res.json(posts);
}
