import React from 'react'
import Image from 'next/image'

const Project_cards = ({pro , data}) => {
  return (
     <div className={`border-[1px] absolute bg-black border-zinc-600 ${pro.wid} ${pro.z} ${pro.hei} ${pro.rot} ${pro.bott} ${pro.righ} mt-5 rounded-[10px] cursor-pointer`} >
              <div className={`${pro.wid} h-[220px] relative overflow-hidden`} >
                <Image
                  fill
                  className='rounded-t-[10px] object-cover '
                  src={data.img}
                  alt="project1"
                />
              </div>
              <div className='p-2.5' >
                <h2 className="font-bold text-[18px]" >{data?.title}</h2>
                <p className=" text-zinc-500" >{data?.para} </p>
              </div>
            </div>
  )
}

export default Project_cards
