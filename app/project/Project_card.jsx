"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const project_card = ({project}) => {
    const router = useRouter();
    const project_expl_page = ()=>{
        router.push(`/project/${project._id}`);
    }
  return (
    <div onClick={project_expl_page} className='w-[350px] md:w-[470px] h-[420px] dark:bg-zinc-800 md:bg-zinc-950 rounded-xl cursor-pointer bg-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-3' >
      <div className='w-full h-[270px] bg-pink-300 rounded-xl relative' >
        <Image fill src={project?.title_img} alt='img' className='rounded-xl' />

      </div>
      <div>
         <div className='text-lg font-bold my-1' >
             <h3>{project?.title}</h3>
         </div>
         <div className='text-[11px] my-2 flex gap-2 flex-warp' >
          {project.techstack.map((tech , index)=>(
              <div key={index} className='w-15 h-5 border border-zinc-300 text-zinc-300 flex items-center justify-center rounded-2xl' >
                {tech}
              </div>
          ))}

         </div>
         <div>
             <div className='text-sm text-zinc-300' >
                <p>{project?.intro}</p>
             </div>
         </div>
      </div>
    </div>
  )
}

export default project_card
