import React from "react";
import Image from "next/image";
import Project_cards from "./Project_cards";

const Project = () => {
    const Allprojects = [1,2,3 , 4 , 5, 6];
  return (
    <div className="border-b-[1px] border-zinc-700">
      <h1 className="text-center font-bold text-2xl mt-5">Projects</h1>
      <div className="flex  gap-5 w-[1200px] m-auto flex-wrap  mb-10">
        {Allprojects.map((project , index)=>(
            <Project_cards key={index} />
        ))}
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Project;
