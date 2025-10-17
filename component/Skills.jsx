import React from "react";
import Image from "next/image";

const Skills = () => {
  const images = [
    { src: "/html-5.png", alt: "HTMl" ,cl:"" },
    { src: "/css-3.png", alt: "CSS" ,cl:""},
    { src: "/js.png", alt: "JS" ,cl:"" },
    { src: "/science.png", alt: "React" ,cl:""},
    { src: "/icons8-tailwindcss-48.png", alt: "TailWind" ,cl:""},
    { src: "/icons8-node-js-48.png", alt: "Node" ,cl:""},
    { src: "/icons8-express-js-16.png", alt: "Express" ,cl:"invert-0 dark:invert-100" },
    { src: "/java.png", alt: "Java" ,cl:""},
    { src: "/next.svg", alt: "Next" ,cl:"invert-0 dark:invert-100"},
    { src: "/c-.png", alt: "C++" ,cl:""},
  ];

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-center m-5">Skills</h2>
      <div className="flex w-[100vw] md:w-[800px] justify-center m-auto  gap-7 flex-wrap">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col  items-center gap-2">
            <div className="w-7 h-7 md:w-12 md:h-12 relative">
              <Image fill src={img.src} alt={img.alt} className={`${img.cl}`}/>
            </div>
            <p className="text-[14px] md:text-1xl" >{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
