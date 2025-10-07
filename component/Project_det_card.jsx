import React from "react";
import Image from "next/image";
import Button from "./Button";

const Project_det_card = () => {
  return (
    <div className="w-[100vw] md:w-[700px] md:h-[550px] cursor-pointer my-5 ">
      <div className="h-[50px] flex items-center justify-center">
        <h2 className="md:text-[20px] font-bold">School Mangment System</h2>
      </div>
      <div className="md:h-[350px] mb-2.5 flex flex-wrap gap-1 md:gap-2.5 p-2.5 overflow-hidden">
        <div className="w-[120px] h-[100px] md:w-[250px] md:h-[150px] relative">
          <Image
            fill
            src={"/project-1-all/1.png"}
            className="inline rounded-[5px] w-62.5"
            alt="4"
          />
        </div>
        <div className="w-[120px] h-[100px] md:w-[250px] md:h-[150px] relative" >
          <Image
            fill
            src={"/project-1-all/2.png"}
            alt="1"
            className="rounded-[5px]"
          />
        </div>
        <div className="w-[80px] h-[100px] md:w-[150px] md:h-[150px] relative" >
          <Image
           fill
            src={"/project-1-all/7.png"}
            alt="1"
            className="rounded-[5px]"
          />
        </div>
        <div className="w-[120px] h-[100px] md:w-[250px] md:h-[150px] relative" >
          <Image
            fill
            src={"/project-1-all/9.png"}
            alt="2"
            className="rounded-[5px]"
          />
        </div>
        <div className=" w-[58px] h-[50px] md:w-[120px] md:h-[100px] relative overflow-hidden ">
          <Image
            fill
            src={"/project-1-all/4.png"}
            alt="3"
            className="object-cover object-center rounded-[5px]"
          />
        </div>
        <div className="w-[58px] h-[50px] md:w-[120px] relative md:h-[100px] overflow-hidden">
          <Image
            fill
            src={"/project-1-all/5.png"}
            alt="3"
            className="object-cover object-center rounded-[5px]"
          />
        </div>
        <div className="w-[80px] h-[100px] md:w-[150px] relative md:h-[166px] overflow-hidden">
          <Image
            fill
            src={"/project-1-all/10.png"}
            alt="3"
            className="object-cover rounded-[5px]"
          />
        </div>
      </div>
      <div className="text-center h-[120px] flex flex-col justify-center gap-7 items-center">
        <p className="w-[350px] text-[14px] md:text-1xl text-zinc-500">
          A Website for <strong className="text-zinc-200">student</strong> to
          see <strong className="text-zinc-200">Attedance</strong>,{" "}
          <strong className="text-zinc-200">Marks</strong>,{" "}
          <strong className="text-zinc-200">Fee</strong>,{" "}
          <strong className="text-zinc-200">notics</strong> and other things in
          one place
        </p>
        <Button
          title={"View More Projects"}
          btn_width={"w-[200px]"}
          back_ground_color={"bg-zinc-200"}
        />
      </div>
    </div>
  );
};

export default Project_det_card;
