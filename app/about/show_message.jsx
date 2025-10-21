"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Add_like from "./Add_like";
import dayjs from "dayjs";

const show_message = () => {
  const [all_mess, setall_mess] = useState([]);
  const [skeleton, setskeleton] = useState(false);
  const ske_arr = [1, 2, 3];

  const get_data = async () => {
    setskeleton(true);
    const res = await fetch("/api/messages", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const messages = await res.json();
    setall_mess(messages.allmes);
    setskeleton(false);
    console.log(messages.allmes);
  };
  //   useEffect(() => {
  //     get_data();
  //   }, []);


  return (
    <div>
      <div>
        <button
          onClick={get_data}
          className="w-25 h-8 font-normal text-sm bg-blue-500 rounded-lg mb-5 cursor-pointer"
        >
          See Messages
        </button>
      </div>
      <div className="w-full md:w-[800px] flex flex-col md:flex-row flex-wrap gap-7">
        {skeleton
          ? ske_arr.map((_, index) => (
              <div
                key={index}
                className=" w-70 md:w-90 h-28 bg-zinc-900 mr-5 p-3 rounded-xl"
              >
                <div className="pb-3 flex gap-2">
                  <div className="w-7 h-7 rounded-lg bg-zinc-500"></div>
                  <div className="w-20 mt-1.5 h-2 bg-zinc-700 rounded-2xl"></div>
                </div>
                <div className="w-50 h-2 bg-zinc-700 rounded-2xl"></div>
              </div>
            ))
          : all_mess.map((mess, index) => (
              <div
                key={index}
                className="w-70 md:w-90 bg-zinc-900 mr-5 p-3 rounded-xl"
              >
                <div className="pb-3 flex gap-2 justify-between">
                  <div className="flex gap-2" >
                    <div className="w-8 h-8 rounded-lg bg-zinc-500"></div>
                    <div>
                      <h4 className="font-bold text-sm">{mess.name}</h4>
                      <h3 className="font-normal text-[10px] text-zinc-400">
                        {dayjs(mess.date).format("DD MMM YYYY")}
                      </h3>
                    </div>
                  </div>
                  <Add_like id={mess._id} like={mess.like} />
                </div>
                <div>
                  <p className="font-normal text-sm">{mess.mess}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default show_message;
