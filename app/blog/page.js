 "use client"
 import Blog_card from '@/app/blog/Blog_card'
import React from 'react'

const page = () => {
   const blog_num = [1 , 2 , 3];
  return (
    <div className=' w-full md:w-[1120px] m-auto p-5' >
      <div>
        <h2 className='text-[20px] font-bold my-5' >Blogs</h2>
        <p></p>
      </div>
      <div className='flex flex-wrap gap-3.5' >
        {blog_num.map((_, index)=>(
        <Blog_card key={index} index={index} />
        ))}
      </div>
    </div>
  )
}

export default page
