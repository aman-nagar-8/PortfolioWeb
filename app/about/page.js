// "use client";
import React from "react";
import Account_links from "@/component/Account_links";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";
import Education_card from "@/component/about/education_card";
import Message_Input from "./Message_input";
import Show_Message from "./show_message";
import BlurText from "@/component/motion/BlurText";
import HackathonCard from "@/component/about/Hackathon_card";
import OpenSourceCard from "@/component/about/OpenSourceCard";
import CertificateCard from "./CertificateCard";

const page = () => {
  const educations = [
    {
      name: "B-Tech(CSE)",
      year: "2024-28",
      school: "CDGI Indore - RGPV University",
      det: "Currently pursuing 2nd year with a focus on core computer science concepts like DSA, DBMS, and OOPs",
      mark: "CGPA - 7.0",
      image: "/CDGI-Logo.png",
    },
    {
      name: "12th",
      year: "2023-24",
      school: "SSVM Rajgarh - MP Board ",
      det: "",
      mark: "CGPA - 8.74",
      image: "/SSVM-Logo.png",
    },
    {
      name: "10th",
      year: "2021-22",
      school: "SSVM Rajgarh - MP Board ",
      det: "",
      mark: "CGPA - 9.16",
      image: "/SSVM-Logo.png",
    },
  ];

  const hackathons = [
    {
      title: "SnowHacks 2026",
      role: "Backend Developer",
      duration: "2026",
      logo: "/snowHacks-logo.png",
      description:
        "Developed a solution for [problem statement] using MERN stack.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
      status: "Participant",
      certificate: "/certificates/sih.pdf",
      github: "",
      live: "",
      outcome: "Won 1st place in the regional round.",
      location: "Indore, India",
    },
  ];

  const openSourceProjects = [
    {
      project: "Soroban state lens",
      totalPRs: 3,
      repo: "https://github.com/Vynix-Labs/Soroban-state-lens",
      contributions: [
        {
          pr: "#228",
          title: "Trap focus and support Escape-close in the mobile sidebar",
          status: "Merged",
        },
        {
          pr: "#261",
          title: "Add active contract state to global store with tests",
          status: "Merged",
        },
        {
          pr: "#274",
          title: "Add watchlist route with empty state and inspect navigation",
          status: "Merged",
        },
      ],
      tech: ["Node.js", "React", "TypeScript", "Tailwind CSS", "TanStack"],
    },
  ];

  const certificates = [
  {
    title: "Introduction to generative AI",
    issuer: "Simplilearn",
    date: "2026",
    credential: "ABC123",
    certificate: "https://drive.google.com/file/d/1INUMfoWKX3lj2ejYmqHFmAGNvbwF_Fbc/view?usp=drive_link",
    logo: "/simplilearn-logo.png",
    skills: ["Gemini", "Gemini API", "REST API"],
  },
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    date: "2026",
    certificate: "https://drive.google.com/file/d/1oHE-5fm4i0YNWmauh7FV0wjxsnF0xuvR/view?usp=drive_link",
    logo: "/java.png",
    skills: ["Java", "OOP", "Collections"],
  },
];
  return (
    <div>
      <div className=" mb-10">
        <div className="md:h-[55vh] w-[100vw] md:w-[1100px] m-auto flex flex-col-reverse md:flex-row justify-between border-zinc-700">
          <div className="md:h-[92vh] w-[100vw] md:w-[700px] flex flex-col">
            <div>
              <h1 className="font-bold text-[25px] md:text-[40px] mt-10 md:mt-35 mb-5 ml-5">
                <BlurText
                  text="Hi ,I'm Aman"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-2xl md:text-[40px] font-bold "
                />
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
        {/* Education */}
        <section className="w-full max-w-[1100px] mx-auto px-4 py-12">
          <h2 className="mb-10 text-xl font-bold text-zinc-800 dark:text-zinc-100">
            Education
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-zinc-700" />

            <div className="space-y-5">
              {educations.map((edu, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border-2 border-green-500">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>

                  {/* Card */}
                  <Education_card edu={edu} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Experience */}
        <section className="w-full max-w-[1100px] mx-auto px-4 py-12">
          <h2 className="p-4 text-xl font-bold text-zinc-700 dark:text-zinc-200">
            Experience
          </h2>

          <div className="w-[92vw] md:w-[1000px] m-auto font-bold  bg-zinc-200 rounded-xl dark:bg-zinc-900  p-4">
            <h2 className="p-[0px_8px_10px_8px] text-lg text-zinc-700 dark:text-zinc-200">
              Hackathons
            </h2>
            <div className="">
              <HackathonCard hackathon={hackathons[0]} />
            </div>
          </div>
          <div className="w-[92vw] md:w-[1000px] m-auto font-bold  bg-zinc-200 rounded-xl dark:bg-zinc-900 mt-7 p-4">
            <h2 className="p-[0px_8px_10px_8px] text-lg text-zinc-700 dark:text-zinc-200">
              Open-source contributions
            </h2>
            <div>
              {openSourceProjects.map((project, index) => (
                <div key={index} className="mt-4">
                  <OpenSourceCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Certificate */}
        <section className="w-full max-w-[1100px] mx-auto px-4 py-12">
          <h2 className="p-4 text-xl font-bold text-zinc-700 dark:text-zinc-200">
            Certificates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="mt-4">
              <CertificateCard cert={cert} />
              </div>
            ))}
          </div>
        </section>
        {/* Interest */}
        <div>
          <div className="w-[100vw] md:w-[1100px] m-auto font-bold text-[18px]">
            <h2 className="p-4 text-[20px] text-zinc-700 dark:text-zinc-200">
              Interest
            </h2>
          </div>
          <div className="w-[92vw] p-2 md:w-[1000px] m-auto font-bold text-[18px] bg-zinc-200 rounded-xl dark:bg-zinc-900 mt-2">
            <p className="text-[14px] md:text-[15px] font-normal p-2">
              {
                "I’m passionate about exploring emerging technologies, especially in AI, system design, and full-stack development. I love participating in hackathons, collaborating on innovative ideas, and learning through hands-on projects.Outside of tech, I enjoy exploring UI/UX design, listening to music, and reading about startups and new innovations."
              }
            </p>
          </div>
        </div>

        <div className="w-[92vw] md:w-[1100px] m-auto text-[17px] mt-7">
          <p className="text-[14px] md:text-[17px] text-center text-zinc-500">
            {
              "I’m always open to collaborations, new opportunities, and discussions about innovative ideas."
            }
            <br />
            {"Let’s connect: "}{" "}
          </p>
          <div className="w-full flex justify-center mt-5">
            <Account_links />
          </div>
        </div>
        {/* Guestbook */}
        <section className="w-full max-w-[1100px] mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Guestbook</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Leave feedback, suggestions, or just say hello 👋
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[380px_1fr]">
            <Message_Input />
            <Show_Message />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
