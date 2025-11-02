"use client";
import React from "react";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { MdWorkHistory } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";
import { TbArticleFilled } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useState } from "react";

const side_bar = () => {
  const route = useRouter();
  const [logout_mess, setlogout_mess] = useState(false)
  const Logout = async () => {
    setlogout_mess(true);
    await fetch("/api/auth/logout");
    route.push("/");
  };

  const pathname = usePathname();
  const nav_links = [
    {
      title: "Home",
      icon: <TiHome />,
      page_link: [
        { name: "About", link: "/dashboard/about" },
        { name: "Project", link: "" },
        { name: "Skill", link: "" },
        { name: "Blog", link: "" },
      ],
    },
    {
      title: "About",
      icon: <MdPersonSearch />,
      page_link: [
        { name: "About", link: "" },
        { name: "Eduction", link: "" },
        { name: "Experince", link: "" },
        { name: "Interest", link: "" },
      ],
    },
    {
      title: "Projects",
      icon: <MdWorkHistory />,
      page_link: [
        { name: "All Projects", link: "/dashboard/allprojects" },
        { name: "Add Project", link: "/dashboard/addproject" },
        { name: "Delete", link: "/dashboard/delete" },
      ],
    },
    {
      title: "Blogs",
      icon: <TbArticleFilled />,
      page_link: [
        { name: "All Blogs", link: "" },
        { name: "Add Blog", link: "" },
        { name: "Delete", link: "" },
      ],
    },
  ];

  return (
    <div className="w-[250px] h-full bg-zinc-100 text-zinc-800  border border-zinc-300 py-3 sticky top-5 left-0">
      <div>
        <h3 className="text-2xl w-full pl-5 pt-1 pb-3 border-b border-zinc-300 font-bold ">
          DashBoard
        </h3>
      </div>
      <div>
        {nav_links.map((links, index) => (
          <div key={index}>
            <div className="w-full pl-5 py-1 text-green-700 text-sm font-medium hover:bg-zinc-200 flex gap-2 cursor-pointer">
              <div className="flex justify-center items-center">
                {links.icon}
              </div>
              <div className="py-0.5">{links.title}</div>
              <div className="w-full relative flex justify-center items-center">
                <MdArrowDropDown className="absolute top-1 right-10" />
              </div>
            </div>
            <div>
              {links.page_link.map((link, index) => (
                <div
                  key={index}
                  className={`${
                    pathname === link.link ? "bg-zinc-200" : ""
                  } w-full  pl-10 py-2 text-[12px] hover:bg-zinc-200 cursor-pointer`}
                >
                  <Link href={link.link}>{link.name}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div onClick={Logout} className="w-full pl-5 py-1 text-green-700 text-sm font-medium hover:bg-zinc-200 flex gap-2 cursor-pointer">
              <div className="flex justify-center items-center">
             <RiLogoutBoxLine />
              </div>
              <div className="py-0.5 w-full">{logout_mess?"Loging out...":"Logout"}</div>
            </div>
      </div>
    </div>
  );
};

export default side_bar;
