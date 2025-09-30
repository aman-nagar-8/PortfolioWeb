"use client"
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
   const [navbar_mobile, set_navbar_mobile] = useState(true)
  const UrlLinkes = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Login", link: "/login" },
    { name: "SignUp", link: "/signup" },
  ];
  return (
    <div className="bg-black/70 border-b-[1px] border-b-zinc-700 p-1.5 z-50 flex justify-around items-center sticky top-0">
      <div className="font-bold text-2xl">Instagram</div>
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
  );
};

export default Navbar;
