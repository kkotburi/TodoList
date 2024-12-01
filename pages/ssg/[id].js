import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      Post: {post.id}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    // `http://jsonplaceholder.typicode.com/posts/${params.id}`
    `http:/localhost:4000/posts/${params.id}`
  );
  const post = await response.json();

  return {
    props: { post }, // will be passed to the page component as props
    // revalidate: 5,
  };
}
