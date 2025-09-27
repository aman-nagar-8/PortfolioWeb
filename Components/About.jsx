import React from 'react'
import Account_links from './Account_links'
import { CiLocationOn } from "react-icons/ci"
import { MdOutlinePhone } from "react-icons/md";
import Button from './Button'


const About = () => {
  return (
    <div className='border-b-[1px] border-zinc-700' >
    <div className='h-[92vh] w-[1100px] m-auto flex justify-between border-zinc-700'>
        <div className='h-[92vh] w-[700px] flex flex-col' >
            <div>
                <h1 className='font-bold text-[40px] mt-35 mb-5 ml-5' >Hi ,I'm Aman</h1>
            </div>
            <div className='ml-5' >
                <p className='font-thin text-zinc-400' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae alias ullam autem architecto nisi atque veniam error commodi qui minus velit molestiae reprehenderit placeat, quam optio harum, dolores sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat perspiciatis minima, omnis ex deserunt.</p>
            </div>
            <div className='flex justify-end mr-10 mt-2'>
                <Button title={"About Me"} back_ground_color={"bg-zinc-300"} btn_width={"w-[90px]"} />
            </div>
            <div className='ml-15 mt-8 mb-5 flex flex-col gap-2' >
                <div className='flex gap-2' >
                   <CiLocationOn />
                    <h2>Indore , MP</h2>
                </div>
                <div className='' >
                    <div className='flex gap-2' >
                    <MdOutlinePhone />
                    <h2>Available for new project/work</h2>
                </div>
                </div>
            </div>
            <div className='ml-15 mt-8' >
                <Account_links w={"40px"} h={"30px"} />
            </div>
        </div>
        <div className='h-[92vh] w-[390px] flex mt-40 items-center flex-col' >
            <div className='flex ' >
                <div className='w-55 h-60 border-2 border-red rounded-tl-[37px]' ></div>
                <div className='w-7 h-55 mt-[29px] ml-2 bg-zinc-500' ></div>
            </div>
            <div className='w-56 ml-8 h-7 bg-zinc-500' ></div>

        </div>
    </div>
    </div>
  )
}

export default About
