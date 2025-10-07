
"use client"
import React from 'react'
import { useState } from 'react'
const Dark_Mode = () => {
    const [action , setAction] = useState(false);
    const btnAction = () => {
        document.documentElement.classList.toggle('dark');
        setAction(!action)
    }
  return (
    <div onClick={btnAction} className=' bg-zinc-200 dark:bg-zinc-700 w-10 h-5 rounded-2xl flex items-center  p-1' >
      <div className={`bg-black w-4 h-4 rounded-4xl ${action? "translate-x-4":"translate-x-[0]"}  duration-75`} ></div>
    </div>
  )
}

export default Dark_Mode
