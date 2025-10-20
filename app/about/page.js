"use client"
import React from "react";
import Account_links from "@/component/Account_links";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";
import Education_card from "@/component/about/education_card";
import Message_input from "./Message_input";
import Show_message from "./show_message";

const page = () => {
  const md = true;
  const educations = [
    {
      name: "B-Tech(CSE)",
      year: "2024-28",
      school: "CDGI Indore - RGPV University",
      det: "Currently pursuing 2nd year with a focus on core computer science concepts like DSA, DBMS, and OOPs",
      mark: "CGPA - 7.0",
    },
    {
      name: "12th",
      year: "2023-24",
      school: "SSVM Rajgarh - MP Board ",
      det: "",
      mark: "CGPA - 8.74",
    },
    {
      name: "10th",
      year: "2021-22",
      school: "SSVM Rajgarh - MP Board ",
      det: "",
      mark: "CGPA - 9.16",
    },
  ];
  return (
    <div>
      <div className=" mb-10">
        <div className="md:h-[55vh] w-[100vw] md:w-[1100px] m-auto flex flex-col-reverse md:flex-row justify-between border-zinc-700">
          <div className="md:h-[92vh] w-[100vw] md:w-[700px] flex flex-col">
            <div>
              <h1 className="font-bold text-[25px] md:text-[40px] mt-10 md:mt-35 mb-5 ml-5">
                {"Hi ,I'm Aman"}
              </h1>
            </div>
            <div className="ml-5">
              <p className="font-thin text-[14px] md:text-1xl text-zinc-800 dark:text-zinc-400">
                {
                  " A Computer Science Engineering student from RGPV with a strong interest in full-stack development and AI-based problem solving.I enjoy creating real-world tech solutions and continuously learning new technologies."
                }
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
        <div className="w-[100vw] md:w-[1100px] m-auto  font-bold text-[18px]">
          <h2 className="p-4 text-[20px] text-zinc-700 dark:text-zinc-200">
            Education
          </h2>
          <div className="flex px-5">
            <div className="">
              {educations.map((edu, index) => (
                <Education_card edu={edu} key={index} />
              ))}
            </div>
            <div className="w-10 h-98 mt-10 p-2.5 flex flex-col  items-center bg-red">
              <div className="w-5 mt-5 h-5 bg-yellow-500"></div>

              <div className="h-17 w-0 border-l-2 border-yellow-400"></div>
              <div className="h-10 w-0 border-l-2 border-green-400"></div>
              <div className="w-5 h-5 bg-green-500"></div>
              <div className="h-20 w-0 border-l-2 border-green-500"></div>
              <div className="w-5 h-5 bg-green-500"></div>
              <div className="h-10 w-0 border-l-2 border-zinc-500"></div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] md:w-[1100px] m-auto font-bold text-[18px]">
          <h2 className="p-4 text-[20px] text-zinc-700 dark:text-zinc-200">
            Experiance
          </h2>
        </div>
        <div className="w-[92vw] md:w-[1000px] m-auto font-bold text-[18px] bg-zinc-200 rounded-xl dark:bg-zinc-900  p-2">
          <h2 className="p-2 text-[17px] text-zinc-700 dark:text-zinc-200">
            Hackathons
          </h2>
          <div className="w-35 ml-8 h-10 rounded-2xl bg-zinc-300 dark:bg-zinc-700 "></div>
        </div>
        <div className="w-[92vw] md:w-[1000px] m-auto font-bold text-[18px] bg-zinc-200 rounded-xl dark:bg-zinc-900 mt-7 p-2">
          <h2 className="p-2 text-[17px] text-zinc-700 dark:text-zinc-200">
            Open-source contributions
          </h2>
          <div className="w-35  ml-8 h-10 rounded-2xl bg-zinc-300 dark:bg-zinc-700"></div>
        </div>
        <div>
          <div className="w-[100vw] md:w-[1100px] m-auto font-bold text-[18px]">
            <h2 className="p-4 text-[20px] text-zinc-700 dark:text-zinc-200">
              Interest
            </h2>
          </div>
          <div className="w-[92vw] md:w-[1000px] m-auto font-bold text-[18px] bg-zinc-200 rounded-xl dark:bg-zinc-900 mt-2">
            <p className="text-[14px] md:text-[15px] font-normal p-2">
              {
                "I’m passionate about exploring emerging technologies, especially in AI, system design, and full-stack development. I love participating in hackathons, collaborating on innovative ideas, and learning through hands-on projects."
              }
            </p>
          </div>
        </div>
        <div className="w-[92vw] md:w-[1100px] m-auto  mt-7">
          <p className="text-[14px] text-zinc-500 font-medium text-center md:text-[17px]">
            Outside of tech, I enjoy exploring UI/UX design, listening to music,
            and reading about startups and new innovations.
          </p>
        </div>
        <div className="w-[92vw] md:w-[1100px] m-auto text-[17px] mt-7">
          <p className="text-[14px] md:text-[17px] text-center">
            {
              "I’m always open to collaborations, new opportunities, and discussions about innovative ideas."
            }
            <br />
            {"Let’s connect: "}{" "}
          </p>
          <div className="w-full flex justify-center mt-5">
            <Account_links w={md ? "40px" : "28px"} h={md ? "30px" : "22px"} />
          </div>
        </div>
        <div className="w-[100vw] md:w-[1100px] m-auto font-bold text-[18px]">
          <h2 className="p-4 text-[20px] text-zinc-700 dark:text-zinc-200">
            Message for me
          </h2>
          <div>
            <Message_input/>
          </div>
          <div className="mt-5 ml-5 md:ml-12" >
            <Show_message/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
