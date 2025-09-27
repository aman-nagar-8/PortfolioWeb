import React from 'react'
import Project_cards from './Project_cards'
import Button from './Button'

const Projects = () => {
  return (
    <div className='border-b-[1px] border-zinc-700 pb-10 '  >
        <h2 className='text-center text-3xl font-bold m-2.5' >Projects</h2> 
        <div className='w-[1100px] m-auto' >
            {[...Array(3)].map((_, i) => (
                <Project_cards key={i} />
            ))}
        </div>
        <div className='w-[800px] m-auto flex justify-end' >
          <Button title={"See All Projects"} back_ground_color={"bg-zinc-300"}  btn_width={"w-[150px]"}/>
        </div>
    </div>
  )
}

export default Projects
