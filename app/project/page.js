import React from 'react'
import Project_card from './Project_card'

const page = () => {
  return (
    <div className='w-[1100px] m-auto  p-8 ' > 
    <div className='flex gap-2 text-2xl font-bold' >
      <h2>Project</h2>
      <h3 className='text-blue-400' >Showcase</h3>
    </div>
    <div className='py-7 flex flex-wrap gap-1' >
      <Project_card/>
      <Project_card/>
      <Project_card/>
      
    </div>
    </div>
  )
}

export default page
