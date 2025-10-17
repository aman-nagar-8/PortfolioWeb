import React from 'react'
import Image from 'next/image'

const Project_cards = ({pro , data}) => {
  return (
     <div className={`border-[1px] absolute bg-zinc-100 dark:bg-black  border-zinc-600 ${pro.wid} ${pro.z} ${pro.hei} ${pro.rot} ${pro.bott} ${pro.righ}  rounded-[10px] cursor-pointer`} >
              <div className={`${pro.wid} h-[120px] md:h-[220px] relative overflow-hidden`} >
                <Image
                  fill
                  className='rounded-t-[10px] object-cover '
                  src={data.img}
                  alt="project1"
                />
              </div>
              <div className='p-2.5' >
                <h2 className="font-bold md:text-[18px]" >{data?.title}</h2>
                <p className="text-[14px] md:text-1xl text-zinc-500" >{data?.para} </p>
              </div>
            </div>
  )
}

export default Project_cards
