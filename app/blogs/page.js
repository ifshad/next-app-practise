import Link from "next/link";
import React from "react";

const blogs = [{
    id: 1,
    title: 'Blog 1',
    description: 'blog 1 post will appear here...'
},
{
    id: 2,
    title: 'Blog 2',
    description: 'blog 2 post will appear here...'
}]

export default function Blogs() {
    return (
        <div>
            <h1>Blogs</h1>
            {
                blogs.map(blog => <ul key={blog.id}><li><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li></ul>)
            }
        </div>
    );
}