import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Post: {id}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getServerSideProrps(context) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const post = await response.json();
  console.log("Hello!");

  return { props: { post } };
}
