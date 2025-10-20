"use client"
import React from 'react'
import { useState } from 'react'


const message_input = () => {
  const [name , setname] = useState("");
  const [mess , setmess] = useState("");
  const add_message = async (e)=>{
     console.log(name , mess)
    const res =  await fetch("/api/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({name , mess})
     });
     const res_mess = await res.json();
     setname("");
     setmess("");
     console.log(res_mess)
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
                className="w-60 h-10 m-2 p-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none  focus:ring-zinc-800 "
                placeholder="Name"
              />
              
              <textarea onChange={(e)=> setmess(e.target.value)} name='mess' value={mess} placeholder="Message"  className="w-80 md:w-80 h-20 m-2 p-2 rounded-lg border border-zinc-700 focus:outline-none bg-zinc-900 "   ></textarea>
              <button  className="w-18 h-8 ml-2 bg-green-600 cursor-pointer rounded-lg" >Add</button>
            </form>                   
          </div>
  )
}

export default message_input
