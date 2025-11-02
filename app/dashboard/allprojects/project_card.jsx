"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const project_card = ({project}) => {
    const router = useRouter();
    const project_id = project._id;
    const project_expl_page = ()=>{
        router.push(`/dashboard/allprojects/${project_id}`);
    }
  return (
    <div onClick={project_expl_page} className='w-[350px] md:w-[380px]    rounded-xl cursor-pointer bg-zinc-100 hover:bg-zinc-200  p-3' >
      <div className='w-full h-[230px] z-10 rounded-xl relative' >
        <Image fill src={project?.title_img} alt='img' className='rounded-xl' />

      </div>
      <div>
         <div className='text-lg font-bold my-1' >
             <h3>{project?.title}</h3>
         </div>
         <div className='text-[11px] my-2 flex gap-2 w-[350px] flex-wrap' >
          {project.techstack.map((tech , index)=>(
              <div key={index} className='px-2 h-5 border border-zinc-500 text-zinc-600  rounded-2xl' >
                {tech}
              </div>
          ))}

         </div>
         <div>
             <div className='text-[12px] text-zinc-600' >
                <p>{project?.intro}</p>
             </div>
         </div>
      </div>
    </div>
  )
}

export default project_card
