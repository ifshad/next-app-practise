import Link from 'next/link'
import React from 'react'

export default function SideBar() {
  return (
    <div className='text-stone-800 w-full'>
      <div className='mb-4'>
        <ul>
          <li><Link href="/">Profile</Link></li>
          <li><Link href="/">Page 1</Link></li>
          <li><Link href="/">Page 2</Link></li>
          <li><Link href="/">Page 3</Link></li>
        </ul>
      </div>
      <div className='mb-4'>
        <ul>
          <li><Link href="/">Friend 1</Link></li>
          <li><Link href="/">Friend 2</Link></li>
          <li><Link href="/">Friend 3</Link></li>
          <li><Link href="/">Advertisement</Link></li>
        </ul>
      </div>
      <div className='mb-4'>
        <ul>
          <li><Link href="/">Friend 1</Link></li>
          <li><Link href="/">Friend 2</Link></li>
          <li><Link href="/">Friend 3</Link></li>
          <li><Link href="/">Advertisement</Link></li>
        </ul>
      </div>
      <div className='mb-4'>
        <ul>
          <li><Link href="/">Friend 1</Link></li>
          <li><Link href="/">Friend 2</Link></li>
          <li><Link href="/">Friend 3</Link></li>
          <li><Link href="/">Advertisement</Link></li>
        </ul>
      </div>
    </div>
  )
}
