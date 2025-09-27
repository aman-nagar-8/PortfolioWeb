import React from 'react'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";



const Account_links = ({h , w}) => {
  return (
    <div className='flex gap-2.5 cursor-pointer '>
      <TbBrandLinkedinFilled style={{height:h, width:w}} />
      <BsGithub style={{height:h, width:w}} />
      <FaXTwitter style={{height:h, width:w}} />
    </div>
  )
}

export default Account_links
