"use client"
import React from "react";
import Account_links from "./Account_links";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import Button from "./Button";
import Image from "next/image";
import BlurText from "./motion/BlurText";
import Particles from "@/component/motion/Bg_motion";
import { useRouter } from "next/navigation";

const About = ({data}) => {
  const router = useRouter();
  // const [user, setuser] = useState({});
  const user = data;

//   const res = await fetch(`${process.env.PORTFOLIO_BASE_URL}/api/user`, {
//   cache: "no-store", // or next: { revalidate: 60 }
// });
// const data = await res.json();
// const user = data.data[0];

  
  const User_data = async () => {
    console.log("use function is working")
    const res = await fetch("/api/user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res_user = await res.json();
    setuser(res_user.data[0]);
  };

  const about_page = () => {
    router.push("/about");
  };
  return (
    <div className="border-b-[1px] border-b-zinc-300 dark:border-zinc-700 relative">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="md:h-[92vh] w-[100vw] md:w-[1100px] m-auto flex flex-col-reverse md:flex-row justify-between z-10 border-zinc-700">
        <div className="md:h-[92vh] w-[100vw] md:w-[700px] flex flex-col">
          <div>
            <h1 className="font-bold text-[25px] md:text-[40px]  mt-10  md:mt-35 mb-5 ml-5">
              <BlurText
                text={user?.title}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl md:text-[40px] font-bold "
              />
            </h1>
          </div>
          <div className="ml-5">
            <p className="font-thin text-[14px] md:text-1xl dark:text-zinc-400">
              {/* {" "}
              I am a{" "}
              <strong className="dark:text-zinc-200 ">
                web developer
              </strong> and{" "}
              <strong className="dark:text-zinc-200">designer</strong>{" "}
              specializing in{" "}
              <strong className="dark:text-zinc-200">Java</strong> and the{" "}
              <strong className="dark:text-zinc-200">MERN stack</strong>, with
              Tailwind CSS for building responsive and modern websites. I focus
              on creating innovative solutions that solve real-world problems
              and deliver seamless digital experiences for clients. */}
              {user?.intro}
            </p>
          </div>
          <div className="flex justify-end mr-10 mt-2">
            <Button
              task={about_page}
              title={"About Me"}
              back_ground_color={"dark:bg-zinc-300"}
              btn_width={"w-[90px]"}
            />
          </div>
          <div className=" ml-5 md:ml-15 mt-8 mb-5 text-[14px] md:text-1xl flex flex-col gap-2">
            <div className="flex gap-2">
              <CiLocationOn />
              <h2>{user?.location}</h2>
            </div>
            <div className="">
              <div className="flex gap-2">
                <MdOutlinePhone />
                <h2>{user?.mess}</h2>
              </div>
            </div>
          </div>
          <div className="ml-5 mt-2 md:ml-15 md:mt-8 mb-5">
            <Account_links />
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
    </div>
  );
};

export default About;
