"use client"
import { useEffect, useState } from "react";

export default function CreatePostPage() {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Hello", body: "Next.js API test", userId: 1 })
    })
      .then(res => res.json())
      .then(data => setResData(data));
  }, []);

  return (
    <div>
      <h1>POST Request - /api/create</h1>
      <pre>{JSON.stringify(resData, null, 2)}</pre>
    </div>
  );
}
