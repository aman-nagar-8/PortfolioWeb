import React from "react";
import Account_links from "@/component/Account_links";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";
import Education_card from "@/component/about/education_card";

const page = () => {
  const educations = [1 , 2, 3]
  return (
    <div>
      <div className="border-b-[1px] border-zinc-700 ">
        <div className="md:h-[55vh] w-[100vw] md:w-[1100px] m-auto flex flex-col-reverse md:flex-row justify-between border-zinc-700">
          <div className="md:h-[92vh] w-[100vw] md:w-[700px] flex flex-col">
            <div>
              <h1 className="font-bold text-[25px] md:text-[40px] mt-10 md:mt-35 mb-5 ml-5">
                Hi ,I'm Aman
              </h1>
            </div>
            <div className="ml-5">
              <p className="font-thin text-[14px] md:text-1xl text-zinc-400">
                {" "}
                A Computer Science Engineering student from RGPV with a strong
                interest in full-stack development and AI-based problem solving.
                I enjoy creating real-world tech solutions and continuously
                learning new technologies.
              </p>
            </div>
            <div className="flex justify-end mr-10 mt-2"></div>
            <div className=" ml-5 md:ml-15 mt-8 mb-5 text-[14px] md:text-1xl flex flex-col gap-2">
              <div className="flex gap-2">
                <CiLocationOn />
                <h2>Indore , MP</h2>
              </div>
              <div className="">
                <div className="flex gap-2">
                  <MdOutlinePhone />
                  <h2>Available for new project/work</h2>
                </div>
              </div>
            </div>
            <div className="ml-5 mt-2 md:ml-15 md:mt-8 mb-5">
              {/* <Account_links w={md?"40px":"28px"} h={md?"30px":"22px"} /> */}
            </div>
          </div>
          <div className="md:h-[92vh] w-[390px] flex mt-10 md:mt-40 items-center flex-col">
            <div className="flex ">
              <div className="w-55 h-60 border-2 border-red rounded-tl-[37px] overflow-hidden">
                <Image width={220} height={240} src={"/P.jpg"} alt="Profile" />
              </div>
              <div className="w-7 h-55 mt-[29px] ml-2 bg-zinc-500"></div>
            </div>
            <div className="w-56 ml-8 h-7 bg-zinc-500 "></div>
          </div>
        </div>
        <div className="w-[100vw] md:w-[1100px] m-auto font-bold text-[18px]">
          <h2 className="p-4 text-[20px] text-zinc-200">Education</h2>
          <div>
            {educations.map((e , index)=>(
            <Education_card key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
