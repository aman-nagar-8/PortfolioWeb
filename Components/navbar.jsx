"use client"
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo_action from "./logo_action";

const Navbar = () => {
  const [logo, set_logo] = useState(false)
   const [navbar_mobile, set_navbar_mobile] = useState(true)
 const logo_action = () => {
    set_logo(!logo)
 }

  const UrlLinkes = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Blogs", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <>
    <div className="bg-black/70 border-b-[1px] border-b-zinc-700  z-50 flex justify-end md:justify-around items-center sticky top-0">
      <div onClick={logo_action} className="cursor-pointer"> <Image width={150} height={40} src={"/logo-2.png"} alt="Logo"/></div>
      <div className="flex" >
      <div className="hidden md:flex " >
        {UrlLinkes.map((link, index) => (
          <Link href={link.link} key={index} className="m-2 text-zinc-400 font-light hover:text-white">
            {link.name}
          </Link>
        ))}
      </div>
      <div className="ml-6" >
      <Button title={"Resume"} back_ground_color={"bg-white"} btn_width={"w-[90px]"} />
      <button className="ml-10 md:hidden" >#</button>
      </div>
      </div>
    </div>
    <div onClick={logo_action} className={`${logo? "w-[100vw] h-[100vh] bg-black/0 backdrop-blur-sm fixed top-0 left-0 z-50":""}`}>{logo?<Logo_action/>:""}</div>
        </>
  );
};

export default Navbar;
