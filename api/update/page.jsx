"use client"
import { useEffect, useState } from "react";

export default function UpdatePostPage({ params }) {
  const { id } = params;
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title: "Updated Title", body: "Updated Body", userId: 1 })
    })
      .then(res => res.json())
      .then(data => setResData(data));
  }, [id]);

  return (
    <div>
      <h1>PUT Request - /api/update/{id}</h1>
      <pre>{JSON.stringify(resData, null, 2)}</pre>
    </div>
  );
}
