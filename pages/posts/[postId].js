import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  return <div>Page: {router.query.postId}</div>;
};

export default Page;
