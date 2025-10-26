"use client"
import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import { LuMessageSquareDiff } from "react-icons/lu";


const message_input = () => {
  const [name , setname] = useState("");
  const [mess , setmess] = useState("");
  const [loading , setloading] = useState(false);

  const add_message = async (e)=>{
      setloading(true);
      const date = dayjs().format("DD MMM YYYY");
      if(name.trim() === "" || mess.trim() === ""){
        const fill_err = "fill the all fields"
        setloading(false);
        return ;
      }
    const res =  await fetch("/api/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({name , mess , date})
     });
     const res_mess = await res.json();
     setname("");
     setmess("");
     setloading(false)
  }
  return (
    <div className="w-full md:w-[500px] text-sm ml-3 md:ml-10 font-normal flex">
            <form onSubmit={(e)=>{
               e.preventDefault();
               add_message(e);

            }} action="" className='flex flex-col' >
              <input
                onChange={(e)=>{setname(e.target.value)}}
                value={name}
                name='name'
                type="text"
                className="w-60 h-10 m-2 p-2 rounded-lg bg-zinc-200 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-700 focus:outline-none  focus:ring-zinc-800 "
                placeholder="Name"
              />
              
              <textarea onChange={(e)=> setmess(e.target.value)} name='mess' value={mess} placeholder="Message"  className="w-80 md:w-80 h-20 m-2 p-2 rounded-lg border border-zinc-400 dark:border-zinc-700 focus:outline-none bg-zinc-200 dark:bg-zinc-900 "   ></textarea>
              <button  className={` ${loading ? "bg-green-400":"bg-green-600 "} w-18 h-8 ml-2 flex justify-center gap-1.5 items-center cursor-pointer rounded-lg`} ><LuMessageSquareDiff style={{width:"22px" , height:"22px"}} /><p>add</p></button>
            </form>                   
          </div>
  )
}

export default message_input
