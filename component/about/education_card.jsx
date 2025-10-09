import React from "react";

const education_card = () => {
  return (
    <div className="w-[85vw] md:w-[30vw] h-36 md:h-32 mx-auto md:ml-15 bg-zinc-700 rounded-[10px] my-5 p-2">
      <div className="flex relative">
        <h3 className="text-[17px] font-bold">B-Tech(CSE)</h3>
        <p className="text-[14px] text-green-500  absolute top-1.5 right-5">
          2024-28
        </p>
      </div>
      <p className="font-normal text-[15px] text-zinc-300">
        CDGI Indore - RGPV University
      </p>
      <p className="font-normal text-[14px] text-zinc-400">
        Currently pursuing 2nd year with a focus on core computer science
        concepts like DSA, DBMS, and OOPs
      </p>
      <p className="text-[15px] text-zinc-300">CGPA -</p>
    </div>
  );
};

export default education_card;
