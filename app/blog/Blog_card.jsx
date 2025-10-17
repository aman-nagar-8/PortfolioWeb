"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Blog_card = ({index}) => {
    const tags = ["H-1B" , "Current Affairs"]
   const router = useRouter();
    const blog_id = index;
    const handleclick = ()=>{
        console.log("blog page")
        router.push(`/blog/${blog_id}`);
    }
  return (
    <div onClick={handleclick} className='w-[300px] h-[370px] md:w-[350px] md:h-[450px] m-auto md-0   rounded-2xl bg-zinc-900  p-1 md:p-5 cursor-pointer' >
        <div className='w-[270px] h-[240px] mx-2 md:m-0 md:w-[310px] md:h-[280px] relative' >
            <Image fill src={"/blog-1.png"} alt='blog-1' className='rounded-[7px]'/>
        </div>
        <div className='pt-4 pl-2 md:pl-0 ' >
            <p className='text-[10px] md:text-[13px] text-zinc-400' >30 Sep 2025</p>
            <h3 className='text-[14px] md:text-[18px]' >Impact of H-1B visa on india</h3>
            <p className='text-zinc-500  text-[12px] md:text-[14px]' >Discuse about the indians which are working on US, impact of H-1B visa  </p>
        </div>
        <div className='mt-2 pl-2  md:pl-0 flex flex-wrap gap-2' >
            {tags.map((tag , index)=>(
            <div key={index} className=' text-[9px] text-zinc-300 p-1 h-5 border-[0.5px] rounded-lg border-zinc-500' >{tag}</div>
            ))}
        </div>
    </div>
  )
}

export default Blog_card
