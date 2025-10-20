import React from 'react'
import Project_section from './Project_section';

export async function generateStaticParams() {
  const projects = [{id:"0"} , {id:"1"} , {id:"2"}]

  return projects.map((Project) => ({
    project_id: Project.id,
  }));
}

const page = () => {
  return (
    <div className='w-[1100px] m-auto ' >
        <div className='text-2xl font-bold' >
            <h2 className='text-center' >School mangment project </h2>
        </div>
       <div className='mt-8' >
            <Project_section dire={""} />
            <Project_section dire={"flex-row-reverse"} />
             <Project_section dire={""} />
       </div>
    </div>
  )
}

export default page
