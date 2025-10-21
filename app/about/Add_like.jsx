"use client"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GoThumbsup } from "react-icons/go";

const add_like = ({ id, like}) => {
  const [likes , setlikes] = useState(like);
      
      const like_added = likes+1;
      const add_like_function = async (id) => {
        const res = await fetch("/api/add_like", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, like_added }),
        });
        const new_likes = await res.json();
        console.log(new_likes.likes);
        setlikes(new_likes.likes);
      };
  
      // to add like function add this to second div : onClick={()=>{add_like_function(id )}}
  
  return (
    <div  className="flex flex-col justify-center items-center">
        <div onClick={()=>{add_like_function(id )}} >
           <GoThumbsup  className="text-zinc-500 hover:cursor-pointer" />
        </div>
      <div className="font-normal text-[10px] text-zinc-400">{likes}</div>
    </div>
  );
};

export default add_like;
