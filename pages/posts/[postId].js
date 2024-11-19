import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  return <div>Page: {router.query.postId}</div>;
};

export default Page;
