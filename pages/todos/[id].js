import { useRouter } from "next/router";
import React from "react";

const Todo = () => {
  const [title, setTitle] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const { id } = router.query;
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((json) => setTitle(json.title));
    }
  }, [router.isReady]);

  return <div>Todo: {title}</div>;
};

export default Todo;
