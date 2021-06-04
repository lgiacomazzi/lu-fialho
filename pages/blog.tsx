import { getAllPosts } from "./api/posts";

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
}

const Portfolio = ({ posts }) => {
  return (
    <div className="container">
      <h2>Blog</h2>
      {posts?.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};

export default Portfolio;
