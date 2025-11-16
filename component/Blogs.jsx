import React from 'react'
import Blog_card from './Blog_card'

const Blogs = async () => {
   const res = await fetch(`${process.env.PORTFOLIO_BASE_URL}/api/blog`, {
    cache: "no-store", // or next: { revalidate: 60 }
  });
  const data = await res.json();
  const blogs = data.blog;  
  
  return (
    <div className='w-[100vw] md:w-[1100px] h-[500px] border-t-[1px] p-5 md:p-0 m-auto mb-5  border-b-zinc-300 dark:border-zinc-700'  >
        <h3 className='text-center text-[20px] font-bold p-5' >Blogs</h3>
         <div className='w-[1100px] flex md:items-center md:justify-center no-scrollbar gap-5 overflow-x-auto' >
            {blogs.map((blog, i) => (
              <Blog_card key={i} blog={blog} />
            ))}
         </div>
    </div>
  )
}

export default Blogs
