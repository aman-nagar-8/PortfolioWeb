"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TbReload } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Link from "next/link";

const about_page = () => {
  const router = useRouter();
  const reload_button = ()=>{
    setmessage("Reloading...")
    User_data();
  }

  const [user, setuser] = useState({
    title: " ",
    intro: " ",
    location: " ",
    mess: " ",
  });
  const [title, settitle] = useState("Loading...");
  const [intro, setintro] = useState("Loading...");
  const [location, setlocation] = useState("Loading...");
  const [mess, setmess] = useState("Loading...");
  const [id , setid] = useState(" id");
  const [message , setmessage] = useState("No Change");

  const User_data = async () => {
    console.log("use function is working");
    const res = await fetch("/api/user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res_user = await res.json();
    setuser(res_user.data[0]);
    console.log(res_user.data[0]);
  };

  const update_user = async () => {
    setmessage("Updating...");
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, intro, location, mess ,id }),
    });
    const User = await res.json();
    setmessage(User.message);
  };

  const update_button = async () => {
    console.log("function runnn...");
     update_user();
  };

  useEffect(() => {
    User_data();
  }, []);

  useEffect(() => {
    settitle(user.title);
    setintro(user.intro);
    setlocation(user.location);
    setmess(user.mess);
    setid(user._id);
    setmessage("Data loaded")
    console.log("User updated:", user);
  }, [user]);

  return (
    <div className="text-zinc-800 pl-5">
      <div className="p-2 font-medium">
        <h3><Link href={"/dashboard"} className="hover:text-green-700" >Home</Link>
          {" > About"}</h3>
      </div>
      <div className="flex gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            update_button();
          }}
          className="flex gap-5 "
        >
          <div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>welcome message -</p>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-600 mt-5 p-4 rounded-lg">
              <p>Introduction -</p>
              <textarea
                value={intro}
                onChange={(e) => {
                  setintro(e.target.value);
                }}
                className="bg-zinc-100 w-[44vw] h-25 rounded-lg border-1 mt-3 text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-600 mt-5 p-4 rounded-lg">
              <p>Location -</p>
              <input
                value={location}
                onChange={(e) => {
                  setlocation(e.target.value);
                }}
                className="bg-zinc-100 w-70 rounded-lg h-12 border-1 mt-3 text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-600 mt-5 p-4 rounded-lg">
              <p>availability -</p>
              <input
                value={mess}
                onChange={(e) => {
                  setmess(e.target.value);
                }}
                className="bg-zinc-100 w-70 rounded-lg h-12 border-1 text-zinc-800 mt-3 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
          </div>
        <div>
          <div className="flex gap-3" >
          <button
            type="submit"
            className="bg-yellow-500 p-2 w-50 rounded-lg mt-5 cursor-pointer"
          >
            Update
          </button>
          <div className="w-10 h-8  border border-zinc-400 mt-5 rounded-lg flex justify-center items-center " >
            <TbReload onClick={reload_button} className="cursor-pointer" />
          </div>
          </div>
          <div className="w-80 mt-8 rounded-lg h-25 border p-2 border-zinc-200">{message}</div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default about_page;
