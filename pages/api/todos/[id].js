// pages/api/todos/[id].js

export default async function handler(req, res) {
  const { query } = req;
  const { id } = query;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const todo = await response.json();

  res.status(200).json(todo);
}
