import React from "react";
import Project_det_card from "./Project_det_card";
import Project_card_ani from "@/component/Project_card_ani";

const Project = () => {
  return (
    <div className="border-b-[1px] border-b-zinc-300 dark:border-zinc-700 ">
      <h1 className="text-center font-bold text-2xl mt-5">Projects</h1>
      <div className="flex flex-col-reverse md:flex-row w-[100vw] md:w-[1500px]  md:m-auto justify-center gap-7  flex-wrap">
        <Project_det_card />
        <div className="relative h-[300px]   md:h-[450px] w-[100vw] mt-10 md:mt-0 md:w-[500px]">
          <Project_card_ani />
        </div>
      </div>
    </div>
  );
};

export default Project;
