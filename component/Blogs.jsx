import React from 'react'
import Blog_card from './Blog_card'

const Blogs = () => {
    
    const blog_data = [1 , 2, 3, 4, 5, 6, 7];

  return (
    <div className='w-[100vw] md:w-[1100px] h-[500px] border-t-[1px] p-5 md:p-0 m-auto mb-5  border-b-zinc-300 dark:border-zinc-700'  >
        <h3 className='text-center text-[20px] font-bold p-5' >Blogs</h3>
         <div className='w-[1100px] flex md:items-center md:justify-center no-scrollbar gap-5 overflow-x-auto' >
            {blog_data.map((_, i) => (
              <Blog_card key={i} index={i} />
            ))}
         </div>
    </div>
  )
}

export default Blogs
