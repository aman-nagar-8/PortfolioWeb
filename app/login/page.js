"use client"
import React from 'react'
import { useEffect } from 'react';

const page = () => {
  // const title = "Hi,I'm Aman";
  // const intro = "i am web developer and designer specializing in java and the MERN stack with Tailwind CSS for building responsive and modern websites. I focus on creating innovative solutions that solve real-world problems and deliver seamless digital experiences for clients.";
  // const location = "Indore MP";
  // const mess = "Available for new project/work";

  const title = "School Mangement System";
  const intro = "A website to manege students and teacher data with full functionality";
  const techstack = ["HTML" , "CSS" , "JS" , "Node.js" , "express.js" , "MongoDB"];
  const github = "no link";
  const demo = "no link";
  const title_img = "/project-2.png";
  const images = ["/project-2.png"];
  const features = [{
    title:"Attendance System",
    detail : "students can see monthly attendance and percent as well",
    image : "/Project-1-all/10.png"
  }];
  const created_At = "20-09-25";

  const update_user = async ()=>{
    console.log("user upding")
      const res = await fetch("/api/user" , {
        method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({title , intro , location , mess})
     });
      const User = await res.json();
      console.log(User);
  }

 const update_project = async ()=>{
  console.log(" project adding");
  const res = await fetch("/api/projects" , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({title , intro , techstack , github , demo , title_img , images , features , created_At})
     });
      const projects = await res.json();
      console.log(projects);

 }

//   useEffect(() => {
// //    update_user();
//       update_project();
//   }, [])
   

  return (
    <div>
      <h2>This is a login page</h2>
    </div>
  )
}

export default page
