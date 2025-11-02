import React from 'react'
import Project_card from './Project_card'

const Project_page = async () => {
 const res = await fetch(`${process.env.PORTFOLIO_BASE_URL}/api/projects`, {
  cache: "no-store", // or next: { revalidate: 60 }
});
const data = await res.json();
const projects = data.projects


  return (
    <div className='w-full md:w-[1100px] m-auto md:p-8 ' > 
    <div className='flex gap-2 text-2xl font-bold mt-5 md:mt-0 ' >
      <h2>Project</h2>
      <h3 className='text-blue-400' >Showcase</h3>
    </div>
    <div className='py-7 flex-col md:flex-row flex flex-wrap gap-5  ' >
      
      {projects.map((project , index)=>(
      <Project_card project={project} key={index}/>
      ))}
      
    </div>
    </div>
  )
}

export default Project_page;

