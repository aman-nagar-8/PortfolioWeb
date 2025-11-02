import About from "@/component/About.jsx";
import About_client from "@/component/About_client";

import Skills from "@/component/Skills.jsx";

import Project from "@/component/Project.jsx";
import Blogs from "@/component/Blogs.jsx";
export default function Home() {
  
  return (
    
    <div>
    <About_client/>
    <Project/>
    <Skills/>
    <Blogs/>
    </div>
  );
}
