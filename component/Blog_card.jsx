"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Blog_card = ({blog}) => {
  const router = useRouter();
  const blog_id = blog._id
  const handleclick=()=>{
   router.push(`/blog/${blog_id}`)
  }
  return (
    <div onClick={handleclick} className='w-[200px] md:w-[350px]  rounded-2xl bg-zinc-200  dark:bg-zinc-800  cursor-pointer relative' >
      {/* <div className={`w-[200px] absolute hover:z-10 h-[300px] md:w-[350px] md:h-[400px]  rounded-2xl hover:bg-stone-800/50 `} ><div>See More</div></div> */}
        <div className='w-[180px] h-[180px] md:w-[310px] md:h-[280px] relative  m-[10px_10px_0px_10px] md:m-[20px_20px_0px_20px]' >
            <Image fill src={blog?.title_img} alt='blog-1' className='rounded-[7px]'/>
        </div>
        <div className='pt-4 m-[0_10px_10px_10px] md:m-[0_20px_20px_20px] ' >
            <p className='text-[10px] md:text-[13px] text-zinc-400' >{blog?.created_At}</p>
            <h3 className='text-[14px] md:text-[18px]' >{blog?.title}</h3>
            {/* <p className='text-zinc-500  text-[12px] md:text-[14px]' >Discuse about the indians which are working on US, impact of H-1B visa  </p> */}
        </div>
        {/* <div className='p-2 cursor-pointer' >
            Read More
            <Image className='invert inline ml-1.5 hover:w-4 hover:h-3' width={12} height={12} src={"/next.png"} />
        </div> */}
    </div>
  )
}

export default Blog_card
