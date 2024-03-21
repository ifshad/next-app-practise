import Link from "next/link";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    description: "blog 1 post will appear here...",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "blog 2 post will appear here...",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen border-2 border-red-100">
      <div className="m-10 border-2">
        <h1>Blogs</h1>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
