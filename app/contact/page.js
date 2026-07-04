"use client";

import { FaGithub, FaLinkedin, FaMapMarkerAlt , FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 pb-20">
      {/* poster */}
      <div className="relative mt-4 mb-12 w-[90vw] md:w-[800px] mx-auto h-[75px] md:h-[200px] overflow-hidden rounded-xl">
        <Image
          src="/ContactPage-Poster.png"
          alt="Contact Poster"
          fill
          className="object-cover"
        />
      </div>
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Available for Internships & Collaborations
        </div>

        <h2 className="mt-5 text-4xl md:text-5xl font-bold">
          {"Let's Build Something Together "}
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400">
          Have an internship opportunity, project idea, hackathon invitation, or
          just want to connect? Feel free to reach out.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid gap-8 md:grid-cols-[1fr_500px]">
        {/* Left Side */}
        <div className="rounded-3xl border border-zinc-700 bg-zinc-200 dark:bg-zinc-900 p-6">
          <h3 className="text-3xl font-bold">Aman Nagar</h3>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
            Full Stack Developer focused on MERN Stack, Next.js, APIs, and
            scalable web applications. I enjoy building products, participating
            in hackathons, contributing to open source, and solving real-world
            problems.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 rounded-lg border border-zinc-700 p-3 hover:bg-zinc-800/50 transition"
            >
              <MdEmail className="text-xl text-blue-400" />
              <span>nagarsheetal48@gmail.com</span>
            </a>

            <a
              href="https://github.com/aman-nagar-8"
              target="_blank"
              className="flex items-center gap-3 rounded-lg border border-zinc-700 p-3 hover:bg-zinc-800/50 transition"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/aman-nagar-8"
              target="_blank"
              className="flex items-center gap-3 rounded-lg border border-zinc-700 p-3 hover:bg-zinc-800/50 transition"
            >
              <FaLinkedin className="text-xl text-blue-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://x.com/Aman_Nagar_88"
              target="_blank"
              className="flex items-center gap-3 rounded-xl border border-zinc-700 p-3 hover:bg-zinc-800/50 transition"
            >
              <FaTwitter className="text-xl text-blue-500" />
              <span>Twitter</span>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-700 p-3">
              <FaMapMarkerAlt className="text-xl text-red-500" />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* Quick Stats */}
          {/* <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-zinc-300 dark:bg-zinc-800 p-4 text-center">
              <h4 className="text-xl font-bold">150+</h4>
              <p className="text-xs text-zinc-500">LeetCode Problems</p>
            </div>

            <div className="rounded-xl bg-zinc-300 dark:bg-zinc-800 p-4 text-center">
              <h4 className="text-xl font-bold">5+</h4>
              <p className="text-xs text-zinc-500">Projects</p>
            </div>

            <div className="rounded-xl bg-zinc-300 dark:bg-zinc-800 p-4 text-center">
              <h4 className="text-xl font-bold">3+</h4>
              <p className="text-xs text-zinc-500">Hackathons</p>
            </div>
          </div> */}
        </div>

        {/* Right Side - Email Form */}
        <div className="rounded-3xl border border-zinc-700 bg-zinc-200 dark:bg-zinc-900 p-6">
          <h3 className="text-2xl font-bold" >Send Me an Email</h3>

          <p className="mt-2 text-sm text-zinc-500">
           {"I'll try to respond within 24 hours."}
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-3 outline-none focus:border-green-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-3 outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-3 outline-none focus:border-green-500"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-zinc-700 bg-zinc-100 dark:bg-zinc-800 p-3 outline-none resize-none focus:border-green-500"
            />

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-1.5 font-medium text-white transition hover:bg-green-500"
            >
              <HiMiniPaperAirplane />
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
