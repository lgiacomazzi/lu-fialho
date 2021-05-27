import axios from "axios";
import Link from "next/link";

export async function getStaticProps(context) {
  var baseUrl = "http://localhost:3000";
  if (process.env.VERCEL_URL) {
    baseUrl = process.env.VERCEL_URL;
  }

  console.log(baseUrl);

  const response = await axios.get(baseUrl + "/api/posts");
  const posts = response.data;
  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts = [] }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/posts/${post._id}`}>
              <a>{post.title}</a>
            </Link>
            <h3>{post.body}</h3>
            <span>{post._id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
