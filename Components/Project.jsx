import React from "react";
import Image from "next/image";
import Project_cards from "./Project_cards";
import Project_det_card from "./Project_det_card";

const Project = () => {
  const check_md = () => {
    if (window.innerWidth >= 768) {
      return true;
    } else {
      return false;
    }
  }
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
      wid: "w-[320px]",
      hei: "h-[320px]",
      righ: "right-0",
      bott: "bottom-0",
      rot: "rotate-[-0deg]",
      z: "z-30",
    },
    {
      wid: "w-[320px]",
      hei: "h-[320px]",
      righ: "right-20",
      bott: "bottom-10",
      rot: "rotate-[-3deg]",
      z: "z-20",
    },
    {
      wid: "w-[320px]",
      hei: "h-[320px]",
      righ: "right-40",
      bott: "bottom-20",
      rot: "rotate-[-5deg]",
      z: "z-10",
    },
  ];
  return (
    <div className="border-b-[1px] border-zinc-700 ">
      <h1 className="text-center font-bold text-2xl mt-5">Projects</h1>
      <div className="flex flex-col-reverse md:flex-row w-[100vw] md:w-[1500px]  m-auto justify-center gap-7  flex-wrap">
        <Project_det_card/>
        <div className="relative h-[450px] w-[500px]">
          {Allprojects.map((project, index) => (
            <Project_cards
              key={index}
              data={project}
              pro={Allproperties[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
