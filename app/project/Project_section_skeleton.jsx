"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Project_card_skeleton = ({project}) => {
   const techstack = [1 , 2, 3, 4, 5]
  return (
    <div className='w-[350px] md:w-[470px]  dark:bg-zinc-800 md:bg-zinc-950 rounded-xl cursor-pointer bg-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-3' >
      <div className='w-full h-[270px] bg-zinc-600 rounded-xl relative' >

      </div>
      <div>
         <div className='text-lg font-bold my-1' >
             <div className='w-[290px] h-7 mt-3 mr-5 bg-zinc-600 rounded-lg mb-3' ></div>
         </div>
         <div className='text-[11px] my-2 flex gap-2 flex-wrap mb-3' >
          {techstack.map((tech , index)=>(
              <div key={index} className='w-[53px] h-[29px] border border-zinc-300 text-zinc-300  rounded-lg' >
              </div>
          ))}

         </div>
         <div>
             <div className='text-[12px] text-zinc-300' >
                <div className='w-[full] h-15 bg-zinc-600 rounded-lg ' ></div>
             </div>
         </div>
      </div>
    </div>
  )
}

export default Project_card_skeleton