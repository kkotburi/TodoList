import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <div>Loading…</div>;

  return (
    <div>
      Post:{post.id}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
    // fallback: false,
    // fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return {
    props: { post },
    revalidate: 10,
  };
}
