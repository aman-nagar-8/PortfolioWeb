import React from 'react'
import Image from 'next/image'

const Button = ({title , back_ground_color, btn_width}) => {
  return (
    <button className={` ${btn_width}   h-8 rounded-md text-black  ${back_ground_color}  hover:bg-zinc-200 cursor-pointer`} >{title}</button>
  )
}

export default Button
