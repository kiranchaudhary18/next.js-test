"use client"
import { useEffect, useState } from "react";

export default function DeletePostPage({ params }) {
  const { id } = params;
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => setResData(data));
  }, [id]);

  return (
    <div>
      <h1>DELETE Request - /api/delete/{id}</h1>
      <pre>{JSON.stringify(resData, null, 2)}</pre>
    </div>
  );
}
