import React from "react";

const education_card = ({edu}) => {
  return (
    <div className="w-[85vw] md:w-[30vw] h- md:h mx-auto md:ml-15 bg-zinc-200 dark:bg-zinc-700 rounded-[10px] my-5 p-2">
      <div className="flex relative">
        <h3 className="text-[16px] font-bold">{edu.name}</h3>
        <p className="text-[14px] text-green-500  absolute top-1.5 right-5">
         {edu.year}
        </p>
      </div>
      <p className="font-normal text-[14px] text-zinc-800 dark:text-zinc-300">
        {edu.school}
      </p>
      <p className="font-normal text-[14px] text-zinc-500 dark:text-zinc-400">
        {edu.det}
      </p>
      <p className="text-[15px] text-zinc-600 dark:text-zinc-300">{edu.mark}</p>
    </div>
  );
};

export default education_card;
