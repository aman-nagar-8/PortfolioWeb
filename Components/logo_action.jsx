import React from 'react'
import Image from 'next/image'

const logo_action = () => {
  return (
    <div >
       <div className='w-170 h-80 bg-zinc-800 fixed top-50 left-100 rounded-2xl' >
            <div></div>
            <div className='flex h-70 items-center justify-center flex-col' >
            <div><Image width={150} height={40} src={"/logo-2.png"} alt="Logo"/></div>
            <div className='p-4' ><p className='text-zinc-300' > I am working on a project that solves real-world problems and makes life easier for users. The focus is on creating something practical and useful. My goal is to deliver a product that truly helps people.</p></div>
            </div>
       </div>
    </div>
  )
}

export default logo_action
