"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Blog_card = ({blog}) => {
    const router = useRouter();
    const blog_id = blog._id;
    const handleclick = ()=>{
        router.push(`/blog/${blog_id}`);
    }
  return (
    <div onClick={handleclick} className='w-[300px] md:w-[350px]  m-auto md-0 bg-zinc-100 hover:bg-zinc-200 rounded-2xl dark:bg-zinc-900 hover:dark:bg-zinc-800 p-1 md:p-5 cursor-pointer' >
        <div className='w-[270px] h-[240px] mx-2 md:m-0 md:w-[310px] md:h-[280px] relative' >
            <Image fill src={blog?.title_img} alt='blog-img' className='rounded-[7px]'/>
        </div>
        <div className='pt-4 pl-2 md:pl-0 ' >
            <p className='text-[10px] md:text-[13px] text-zinc-600 dark:text-zinc-400' >{blog?.created_At}</p>
            <h3 className='text-[14px] md:text-[17px]' >{blog?.title}</h3>
            <p className='text-zinc-500 line-clamp-3 text-[12px] md:text-[14px]' >{blog?.intro}</p>
        </div>
        <div className='mt-2 pl-2  md:pl-0 flex flex-wrap gap-2' >
            {blog?.tag.map((tag , index)=>(
            <div key={index} className=' text-[10px] flex justify-center items-center text-zinc-600 dark:text-zinc-300 p-1 h-5 border-[0.5px] rounded-lg border-zinc-500' >{tag}</div>
            ))}
        </div>
    </div>
  )
}

export default Blog_card
