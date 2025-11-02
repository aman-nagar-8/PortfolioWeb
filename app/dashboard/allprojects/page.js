"use client";
import React from "react";
import Project_card from "./project_card";
import { useState, useEffect } from "react";

const Allproject_page = () => {
  const [skeleton, setskeleton] = useState(false);
  const [projects, setprojects] = useState([]);
  const get_project = async () => {
    setskeleton(true);
    const res = await fetch("/api/projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res_project = await res.json();
    setprojects(res_project.projects);
    setskeleton(false);
  };

  useEffect(() => {
    get_project();
  }, []);

  return (
    <div className="text-zinc-800 md:pl-5 mt-10 md:mt-0 mb-10">
      <div className="p-2 font-medium">
        <h3>{"Project > AllProjects"}</h3>
      </div>
      <div>
        <div className="py-7 flex-col md:flex-row flex flex-wrap gap-5 md:gap-5 ">
          {skeleton ? (
            <div className=" md:w-[380px] h-[380px]   rounded-xl cursor-pointer bg-zinc-100 p-3">
              <div className="w-full h-[230px]  rounded-xl relative bg-zinc-200"></div>
              <div className="mt-2 bg-zinc-200 w-[320px] h-8 rounded-lg "></div>
              <div className="mt-2 bg-zinc-200 w-[320px] h-20 rounded-lg "></div>
            </div>
          ) : (
            projects.map((project, index) => (
              <Project_card project={project} key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Allproject_page;
