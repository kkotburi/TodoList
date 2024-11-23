import { useRouter } from "next/router";
import React from "react";

const todo = () => {
  const [title, setTitle] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const { id } = router.query;
    if (id) {
      // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      fetch(`/api/todos/${id}`)
        .then((response) => response.json())
        .then((json) => setTitle(json.title));
    }
  });

  return <div>Todo: {title}</div>;
};

export default todo;
