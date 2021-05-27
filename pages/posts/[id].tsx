import axios from "axios";

export async function getStaticPaths() {
  console.log(">Static Paths Generation");
  const response = await axios.get("http://localhost:3000/api/posts");
  const posts = response.data;
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
  const response = await axios.get(
    `http://localhost:3000/api/posts/${context.params.id}`
  );
  const post = response.data;

  return {
    props: post,
  };
}

export default function Post(post) {
  return (
    <div>
      <h1>{post.title}</h1>
      <span>{post.body}</span>
    </div>
  );
}
