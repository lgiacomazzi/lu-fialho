import axios from "axios";
import { connectToDatabase } from "../../util/mongodb";

export async function getStaticPaths() {
  console.log(">Static Paths Generation");
  const query = {};

  const projection = {
    _id: 1,
  };

  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find(query, projection).toArray();

  // var baseUrl = "http://localhost:3000";
  // if (process.env.VERCEL_URL) {
  //   baseUrl = process.env.VERCEL_URL;
  // }

  // console.log(baseUrl);

  // const response = await axios.get(baseUrl + "/api/posts");
  // const posts = response.data;
  // const { db } = await connectToDatabase();
  // const posts = await db.collection("posts").find({}).limit(20).toArray();

  var paths = [];
  for (let i = 0; i < posts.length; i++) {
    paths.push({ params: { id: posts[i]._id.toString() } });
  }

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(">Static Props Generation");
  // const response = await axios.get(
  //   `http://localhost:3000/api/posts/${context.params.id}`
  // );
  var baseUrl = "http://localhost:3000";
  if (process.env.VERCEL_URL) {
    baseUrl = process.env.VERCEL_URL;
  }

  console.log(baseUrl);

  const response = await axios.get(baseUrl + "/api/posts/" + context.params.id);
  const blogPost = response.data;

  return {
    props: blogPost,
  };
}

export default function BlogPage(blogPost) {
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <span>{blogPost.body}</span>
    </div>
  );
}
