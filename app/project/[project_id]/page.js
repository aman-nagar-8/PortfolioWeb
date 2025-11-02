import React from "react";
import Project_section from "./Project_section";
import Link from "next/link";
import Back_button from "@/component/Back_button";

const page = async ({ params }) => {
  const {project_id} = await params
  const res = await fetch(
    `${process.env.PORTFOLIO_BASE_URL}/api/projects/${project_id}`,
    {
      cache: "no-store", 
    }
  );
  const data = await res.json();
  const project = data.project;

  return (
    <div className="w-[100vw] pl-3 md:w-[1100px] m-auto  ">
      <div>
        <Back_button />
      </div>
      <div>
        <div className="text-xl md:text-2xl font-bold mt-3">
          <h2 className="">{project?.title} </h2>
        </div>
        <div className="mt-2 text-sm text-zinc-300">
          Created At - {project?.created_At}
        </div>
        <div className="flex gap-3 mt-3">
          <div className="w-10 h-10 rounded-lg bg-green-500 "></div>
          <div>
            <h4>Aman Nagar</h4>
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm md:text-[16px]">
        <div className="text-zinc-400 mb-3 md:mb-0">
          GitHub Link -
          <Link
            className="text-blue-300 ml-2"
            target="_blank"
            rel="noopener noreferrer"
            href={project?.github || ""}
          >
            {project?.github}
          </Link>
        </div>
        <div className="text-zinc-400">
          Demo Link -
          <Link
            className="text-blue-300 ml-2"
            target="_blank"
            rel="noopener noreferrer"
            href={project?.demo || ""}
          >
            {project?.demo}
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 gap-2 md:gap-3 text-[12px] md:text-sm items-center">
        {"TeckStack - "}
        {project?.techstack.map((skill, index) => (
          <div key={index} className="p-2 border border-zinc-500 rounded-lg ">
            {skill}
          </div>
        ))}
      </div>
      <div className="mt-5 text-sm md:text-[16px] text-zinc-300">
        <h2 className="text-zinc-500 mb-2 mr-2 ">About - </h2>
        {project?.intro}
      </div>
      <div className=" mt-5 mb-10 ">
        <h2 className="text-zinc-500 mb-4 ">Features - </h2>
        <div className="flex flex-wrap gap-5 md:gap-10">
          {project.features.map((feature, index) => (
            <Project_section key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
