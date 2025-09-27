import Image from "next/image";
import Navbar from "@/Components/navbar";
import About from "@/Components/About";
import Projects from "@/Components/Projects2";
import Skills from "@/Components/Skills";
import Footer from "@/Components/Footer";
import Project from "@/Components/Project";
export default function Home() {
  return (
    <>
    <Navbar/>
    <About/>
    <Project/>
    <Skills/>
    <Footer/>
    </>
  );
}
