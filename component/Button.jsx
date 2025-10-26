"use client"
import React from 'react'


const Button = ({ task ,title , back_ground_color, btn_width}) => {
  return (
    <button onClick={task} className={` ${btn_width}   h-8 rounded-md text-white dark:text-black bg-zinc-800 ${back_ground_color} text-[14px] md:text-1xl hover:bg-zinc-500  dark:hover:bg-zinc-200 cursor-pointer`}>{title}</button>
  )
}

export default Button
