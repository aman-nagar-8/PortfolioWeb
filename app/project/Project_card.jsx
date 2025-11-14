"use client"
import React from "react";
import { redirect } from "next/navigation";
import Image from "next/image";

const project_card = ({ project }) => {
  const project_expl_page = () => {
    redirect(`/project/${project._id}`);
  };
  return (
    <div
      onClick={project_expl_page}
      className="w-[350px] md:w-[470px] bg-zinc-200 dark:bg-zinc-800  rounded-xl cursor-pointer  hover:bg-zinc-300 dark:hover:bg-zinc-800 p-3"
    >
      <div className="w-full h-[270px] bg-pink-300 rounded-xl relative">
        <Image fill src={project?.title_img} alt="img" className="rounded-xl" />
      </div>
      <div>
        <div className="text-lg font-bold my-1">
          <h3>{project?.title}</h3>
        </div>
        <div className="text-[11px] my-2 flex gap-2 flex-wrap">
          {project.techstack.map((tech, index) => (
            <div
              key={index}
              className="px-2 py-1  border border-zinc-600 dark:border-zinc-300 text-zinc-600 dark:text-zinc-300  rounded-lg"
            >
              {tech}
            </div>
          ))}
        </div>
        <div>
          <div className="text-[12px] text-zinc-600 dark:text-zinc-300">
            <p>{project?.intro}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project_card;
