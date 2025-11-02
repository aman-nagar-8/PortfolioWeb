"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import Logo_action from "./logo_action";
import { IoReorderThreeOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { GoProject } from "react-icons/go";

const Navbar = () => {
  const pathname = usePathname();
  const [logo, set_logo] = useState(false);
  const logo_action = () => {
    set_logo(!logo);
  };

  const [nav_window, set_nav_window] = useState(true);
  function mobile_navbar_action() {
    set_nav_window(!nav_window);
  }
  //  useEffect(() => {
  //      const handleclick = (event) => {
  //        if (popupRef.current && !popupRef.current.contains(event.target)) {
  //         set_nav_window(true);
  //       }
  //      }
  //    if(!nav_window){
  //       document.addEventListener("click", handleclick)
  //    }
  //    return () => {
  //     document.removeEventListener("click", handleclick)
  //    }
  //   } , [!nav_window])
  const resume = () => {
    console.log("bhai resume ");
  };

  const UrlLinkes = [
    { name: "Home", link: "/", pages: "$" },
    { name: "About", link: "/about", pages: "$" },
    { name: "Project", link: "/project", pages: "/project" },
    { name: "Blogs", link: "/blog", pages: "/blog" },
    { name: "Contact", link: "/contact", pages: "$" },
  ];
  return (
    <>
      <div
        className={`bg-white/80 dark:bg-black/80 w-[100vw] md:w-[99vw] border-b-[1px] border-b-zinc-300 dark:border-b-zinc-700  z-50 flex md:justify-around items-center sticky top-0 ${
          nav_window ? "" : "bg-zinc/900"
        }`}
      >
        <div
          onClick={logo_action}
          className="cursor-pointer w-30 h-10  md:w-37.5 md:h-10  relative"
        >
          {" "}
          <Image
            priority={false}
            fill
            src={"/logo-2.png"}
            alt="Logo"
            className="invert-100 dark:invert-0"
          />
        </div>
        <div className="hidden md:flex">
          <div className="flex ">
            {UrlLinkes.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className={`${
                  pathname == link.link
                    ? "text-black dark:text-white "
                    : "text-zinc-600 dark:text-zinc-400 "
                }  m-2 font-light hover:text-black dark:hover:text-white`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="ml-6 mt-1 md:static">
            <div className="hidden md:flex">
              <Button
                task={resume}
                title={"Resume"}
                back_ground_color={"dark:bg-white"}
                btn_width={"w-[90px]"}
              />
            </div>
          </div>
        </div>
        <div className="w-[calc(100vw-140px)] relative md:hidden">
          <IoReorderThreeOutline
            onClick={mobile_navbar_action}
            className="relative left-44"
            style={{ width: "38px", height: "38px" }}
          />
        </div>
      </div>
      <div
        onClick={logo_action}
        className={`${
          logo
            ? "w-[100vw] h-[100vh] bg-black/0 backdrop-blur-sm fixed top-0 left-0 z-50"
            : ""
        }`}
      >
        {logo ? <Logo_action /> : ""}
      </div>
      <div className="relative w-full">
        <div
          className={`transition-all overflow-hidden  duration-500 ease-in-out fixed top-0 left-0 z-40 w-[100vw] bg-zinc-300/97 dark:bg-zinc-900/97 ${
            nav_window ? " h-0 -translate-y-10 " : "h-60  translate-y-10"
          }`}
        >
          <div className="flex flex-col fixed right-5">
            {UrlLinkes.map((link, index) => (
              <div
                key={index}
                className={` m-auto my-1 p-1 px-5 w-[90vw] text-end `}
              >
                <Link
                  href={link.link}
                  className={`${
                    pathname === link.link
                      ? "text-zinc-700 dark:text-white font-bold"
                      : "text-zinc-600 dark:text-zinc-400"
                  } `}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="md:hidden w-[100vw] h-15 bg-zinc-700 fixed bottom-0 z-50 overflow-hidden h-f " >
        <div className="flex gap-3" >
            <FaHome className="w-7 h-7" />
            <GoProject className="w-7 h-7" />
        </div>

      </div> */}
    </>
  );
};

export default Navbar;
