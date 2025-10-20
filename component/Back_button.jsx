"use client"
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
const Back_button = () => {
    const router = useRouter();
    const handleback=()=>{
        router.back();
    }
  return (
    <div onClick={handleback} className='w-8 h-8 cursor-pointer rounded-2xl flex justify-center items-center hover:bg-zinc-700' > <IoIosArrowRoundBack className='w-7 h-7' /></div>
  )
}

export default Back_button
