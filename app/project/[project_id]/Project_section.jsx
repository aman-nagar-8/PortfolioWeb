import React from 'react'

const project_section = ({dire}) => {
  return (
    <div className={`w-[1000px] h-[300px]  m-auto mb-8 flex ${dire} justify-between items-center`} >
       <div className='w-[400px] h-70 bg-pink-400 rounded-xl' >
       </div>
       <div className='w-100 h-70  flex justify-center items-center' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non magnam facilis quibusdam inventore hic officiis voluptatum itaque fuga! Veniam quod libero voluptatum facere vitae! Odit veritatis repellendus nobis explicabo earum, nihil neque beatae eos voluptas suscipit commodi quo quibusdam.</p>
       </div>
    </div>
  )
}

export default project_section
