import { connectToDatabase } from "../../../util/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req, res) {
  const { db } = await connectToDatabase();

  const query = {};
  const projection = {};
  const posts = await db
    .collection("posts")
    .find(query, projection)
    .limit(20)
    .toArray();
  return res.json(posts);
}
