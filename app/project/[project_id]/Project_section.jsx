import React from 'react'

const project_section = ({feature}) => {
  return (
    <div className={`w-[330px] md:w-[500px] border border-zinc-600 mx-auto md:mx-0 p-1.5 md:p-5 rounded-lg gap-4 md:gap-8 flex`} >
       <div className='w-70 h-35 md:w-100 md:h-40 bg-zinc-600 rounded-xl' >
       </div>
       <div className='w-100 ' >
            <h4 className='font-medium text-sm md:text-[16px]' >{feature?.title}</h4>
             <p className='text-zinc-400 text-[11px] md:font-sm' >{feature?.detail}</p>
       </div>
    </div>
  )
}

export default project_section
