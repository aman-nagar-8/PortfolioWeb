import React from 'react'
import Image from 'next/image'

const Project_cards = () => {
  return (
     <div className="border-[1px] border-zinc-700 p-5 w-[315px] h-[400px] mt-10 rounded-[10px] hover:border-zinc-500 cursor-pointer hover:bg-zinc-900" >
              <div>
                <Image
                  width={420}
                  height={450}
                  src="/project-1.png"
                  alt="project1"
                />
              </div>
              <div>
                <h2 className="font-bold text-2xl" >School Mangement Peoject</h2>
                <p className="font-medium text-zinc-500" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, esse! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias. </p>
              </div>
            </div>
  )
}

export default Project_cards
