import React from 'react'
import Image from 'next/image'

const Blog_card = () => {
  return (
    <div className='w-[200px] h-[300px] md:w-[350px] md:h-[400px]  rounded-2xl bg-zinc-200 dark:bg-stone-800 p-2.5 md:p-5 cursor-pointer' >
        <div className='w-[180px] h-[180px] md:w-[310px] md:h-[280px] relative' >
            <Image fill src={"/blog-1.png"} alt='blog-1' className='rounded-[7px]'/>
        </div>
        <div className='pt-4' >
            <p className='text-[10px] md:text-[13px] text-zinc-400' >30 Sep 2025</p>
            <h3 className='text-[14px] md:text-[18px]' >Impact of H-1B visa on india</h3>
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
