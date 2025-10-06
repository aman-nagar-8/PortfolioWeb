import React from 'react'
import Image from 'next/image'

const Blog_card = () => {
  return (
    <div className='w-[350px] h-[400px]  rounded-2xl' >
        <div className='w-[350px] h-[300px] relative' >
            <Image fill src={"/blog-1.png"} alt='blog-1' className='rounded-[7px]'/>
        </div>
        <div className='pt-4' >
            <p className='text-[13px] text-zinc-400' >30 Sep 2025</p>
            <h3 className='text-[18px]' >Impact of H-1B visa on india</h3>
            <p className='text-zinc-500 text-normal' >Discuse about the indians which are working on US, impact of H-1B visa  </p>
        </div>
        {/* <div className='p-2 cursor-pointer' >
            Read More
            <Image className='invert inline ml-1.5 hover:w-4 hover:h-3' width={12} height={12} src={"/next.png"} />
        </div> */}
    </div>
  )
}

export default Blog_card
