"use client"
import React, { useState } from 'react'
import Project_card from './Project_card'
import { useEffect } from 'react'


const Project_page =  () => {
  const [projects , setprojects] = useState([]);
 const get_project = async ()=>{
   const res = await fetch("/api/projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res_project = await res.json();
    console.log(res_project.projects); 
    setprojects(res_project.projects)
 }

 useEffect(() => {
   get_project();
 }, [])
 

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
