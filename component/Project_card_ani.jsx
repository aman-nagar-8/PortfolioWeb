import CardSwap, { Card } from "@/component/motion/CardSwap";
import Image from "next/image";
import React from "react";

const Project_card_ani = () => {
  const Allprojects = [
    {
      img: "/project-2.png",
      title: "School Mangement System",
      para: "A website to manege students and teacher data with full functionality",
    },
    {
      img: "/project-1.png",
      title: "Problem Solving",
      para: "Showcase your problem solving strenght",
    },
    {
      img: "/project-3.png",
      title: "Understanding class and functions in c++",
      para: "doing oops concepts",
    },
  ];
  return (
    <div
      className=" w-[170px] h-[140px] md:w-[350px] md:h-[390px] relative "
    >
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        {Allprojects.map((card, index) => (
          <Card key={index}>
            <div
              className={`h-[250px] md:h-[250px] relative overflow-hidden`}
            >
              <Image
                fill
                className="rounded-t-[10px] object-cover "
                src={card.img}
                alt="project1"
              />
            </div>
            <div className='p-2.5' >
                <h2 className="font-bold md:text-[18px]" >{card?.title}</h2>
                <p className="text-[14px] md:text-1xl text-zinc-500" >{card?.para} </p>
              </div>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
};

export default Project_card_ani;
