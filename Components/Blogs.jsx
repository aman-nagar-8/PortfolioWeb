import React from 'react'
import Blog_card from './Blog_card'

const Blogs = () => {
    const blog_data = [1 ];
  return (
    <div className='w-[100vw] md:w-[1100px] h-[500px] m-auto mb-5'  >
        <h3 className='text-center text-[20px] font-bold p-5' >Blogs</h3>
         <div className='w-full flex items-center justify-center gap-5' >
            {blog_data.map((_, i) => (
              <Blog_card key={i} />
            ))}
         </div>
    </div>
  )
}

export default Blogs
