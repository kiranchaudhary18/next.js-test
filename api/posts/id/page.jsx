"use client"
import { useEffect, useState } from "react";

export default function PostPage({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>GET by ID - {id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
