"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const project_card = () => {
    const router = useRouter();
    const project_id = 1;
    const project_expl_page = ()=>{
        router.push(`/project/${project_id}`);
    }
  return (
    <div onClick={project_expl_page} className='w-[350px] md:w-[470px] h-[420px] bg-zinc-800 md:bg-zinc-950 rounded-xl cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 p-3' >
      <div className='w-full h-[270px] bg-pink-300 rounded-xl' >

      </div>
      <div>
         <div className='text-lg font-bold my-1' >
             <h3>School Mangment</h3>
         </div>
         <div className='text-[11px] my-2' >
              <div className='w-15 h-5 border flex items-center justify-center rounded-2xl' >
                Node.js
              </div>
         </div>
         <div>
             <div className='text-sm ' >
                <p>A website to manege students and teacher data with full functionality</p>
             </div>
         </div>
      </div>
    </div>
  )
}

export default project_card
