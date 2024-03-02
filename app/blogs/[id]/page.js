import React from 'react'

export default function Blog({params}) {
    const {id, title, description} = params;
    console.log(id)
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
