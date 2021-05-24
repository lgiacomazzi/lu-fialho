import { connectToDatabase } from "../../util/mongodb";

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find({}).limit(20).toArray();

  var paths = [];
  for (let i = 0; i < posts.length; i++) {
    paths.push({ params: { id: (i + 1).toString() } });
  }

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { db } = await connectToDatabase();
  const post = await db.collection("posts").find({ id });
  console.log(id);
  return {
    props: post,
  };
}

export default function Posts({ post }) {
  return (
    <div>
      <h1>Post</h1>
      <ul>{post}</ul>
    </div>
  );
}
