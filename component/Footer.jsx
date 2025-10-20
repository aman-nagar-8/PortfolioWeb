import React from "react";
import Link from "next/link";
import Account_links from "./Account_links";
import Image from "next/image";
import Dark_Mode from "./Dark_Mode";

const Footer = () => {
  const navLinks = [
    { href: "/", name: "About" },
    { href: "/", name: "Projects" },
    { href: "/", name: "Skills" },
    { href: "/", name: "Blogs" },
    { href: "/", name: "Certificates" },
    { href: "/", name: "Education" },
  ];

  
  const CompanyLinks = [
    { href: "/", name: "About" },
    { href: "/", name: "Contect Us" },
    { href: "/", name: "Careers" },
  ];

  return (
    <div className="border-t-[1px] border-zinc-300 dark:border-zinc-700">
      <div className="w-[90vw] md:w-[1100px] m-auto h-[300px] p-2.5 md:pt-10">
        <div className="grid grid-cols-3 md:flex gap-2.5 md:gap-20">
          <div className="col-span-3" >
            <div className="w-30 h-8 md:w-37.5 md:h-10 relative" >
              <Image priority={false} fill src={"/logo-2.png"} alt="Logo"  className="invert-100 dark:invert-0"  />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Content</h3>
            <div>
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-zinc-500 text-[13px] md:text-[15px] m-1.5 md:m-2 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  <Link href={link.href}>{link.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Company</h3>
            <div>
              {CompanyLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-zinc-500 text-[13px] md:text-[15px] m-1.5 md:m-2 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  <Link href={link.href}>{link.name}</Link>
                </div>
              ))}
            </div>
          </div>
         
          <div>
            <h3 className="font-bold text-zinc-600 dark:text-zinc-400 text-sm">Contact</h3>
            <p className="text-zinc-600 dark:text-zinc-200 text-[13px] md:text-sm ml-1.5">Aman@gmail.com</p>
            <p className="text-zinc-600 dark:text-zinc-200 text-[13px] md:text-sm ml-1.5">+91 1234567890</p>
            <p className="text-zinc-600 dark:text-zinc-200 text-[13px] md:text-sm ml-1.5 ">Indore , MP</p>
          </div>
          {/* <div>
            <Dark_Mode/>
          </div> */}
        </div>
        <div className="h-[50px] mt-10">
          <Account_links w={"20px"} h={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
