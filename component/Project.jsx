"use client";
import React from "react";
import Image from "next/image";
import Project_cards from "./Project_cards";
import Project_det_card from "./Project_det_card";
import { useEffect, useState } from "react";
import Project_card_ani from "@/component/Project_card_ani"

const Project = () => {
  const [md, set_md] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 768) {
      set_md(true);
    } else{
      set_md(false);
    }
  }, []);
  const Allprojects = [
    {
      img: "/project-2.png",
      title: "School Mangement System",
      para: "A website to manege students and teacher data with full functionality",
    },
    {
      img: "/project-1.png",
      title: "Problem Solving",
      para: "Showcase your problem solving strenght",
    },
    {
      img: "/project-3.png",
      title: "Understanding class and functions in c++",
      para: "doing oops concepts",
    },
  ];
  const Allproperties = [
    {
      wid: md?"w-[300px]":"w-[200px]",
      hei: md?"h-[320px]":"h-[250px]",
      righ: "right-0",
      bott: md?"bottom-0":"bottom-10",
      rot: "rotate-[-0deg]",
      z: "z-30",
    },
    {
      wid: md?"w-[320px]":"w-[200px]",
      hei: md?"h-[320px]":"h-[250px]",
      righ: "right-20",
      bott: md?"bottom-10":"bottom-20",
      rot: "rotate-[-3deg]",
      z: "z-20",
    },
    {
      wid: md?"w-[320px]":"w-[200px]",
      hei: md?"h-[320px]":"h-[250px]",
      righ: "right-40",
      bott: md?"bottom-20":"bottom-30",
      rot: "rotate-[-5deg]",
      z: "z-10",
    },
  ];
  return (
    <div className="border-b-[1px] border-b-zinc-300 dark:border-zinc-700 ">
      <h1 className="text-center font-bold text-2xl mt-5">Projects</h1>
      <div className="flex flex-col-reverse md:flex-row w-[100vw] md:w-[1500px]  md:m-auto justify-center gap-7  flex-wrap">
        <Project_det_card/>
        <div className="relative h-[300px]   md:h-[450px] w-[100vw] mt-10 md:mt-0 md:w-[500px]">
          {/* {Allprojects.map((project, index) => (
            <Project_cards
              key={index}
              data={project}
              pro={Allproperties[index]}
            />
          ))} */}
          
          <Project_card_ani/>
           
        </div>
      </div>
    </div>
  );
};

export default Project;
