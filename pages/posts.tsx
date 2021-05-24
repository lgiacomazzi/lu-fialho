import { connectToDatabase } from "../util/mongodb";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find({}).limit(20).toArray();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <p>{post._id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
