import Image from "next/image";
import Navbar from "@/components/navbar";
import About from "@/components/About";

import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import Blogs from "@/components/Blogs";
export default function Home() {
  return (
    <>
    <About/>
    <Project/>
    <Skills/>
    <Blogs/>
    </>
  );
}
