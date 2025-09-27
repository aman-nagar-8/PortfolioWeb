import React from "react";
import Link from "next/link";
import Account_links from "./Account_links";

const Footer = () => {
  const navLinks = [
    { href: "/", name: "About" },
    { href: "/", name: "Projects" },
    { href: "/", name: "Skills" },
    { href: "/", name: "Blogs" },
    { href: "/", name: "Certificates" },
    { href: "/", name: "Education" },
  ];

  const legalLinks = [
    { href: "/", name: "Terms & Conditions" },
    { href: "/", name: "Privacy Policy" },
    { href: "/", name: "Cookies Policy" },
    { href: "/", name: "CopyRight Notification" },
  ];
  const CompanyLinks = [
    { href: "/", name: "About" },
    { href: "/", name: "Contect Us" },
    { href: "/", name: "Careers" },
  ];

  return (
    <div className="border-t-[1px]  border-zinc-700">
      <div className="w-[1100px] m-auto h-[300px]  pt-10">
        <div className="flex gap-20">
          <div>
            <div>Instagram</div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Content</h3>
            <div>
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-zinc-500 m-2 hover:text-zinc-200"
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
                  className="text-zinc-500 m-2 hover:text-zinc-200"
                >
                  <Link href={link.href}>{link.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm ml-2.5">Legal</h3>
            <div>
              {legalLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-zinc-500 m-2 hover:text-zinc-200"
                >
                  <Link href={link.href}>{link.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-zinc-400 text-sm">Contact</h3>
            <p className="text-zinc-200 text-sm m-1.5" >Aman@gmail.com</p>
            <p className="text-zinc-200 text-sm m-1.5" >+91 1234567890</p>
            <p className="text-zinc-200 text-sm m-1.5 ">Indore , MP</p>  
          </div>
        </div>
        <div className="h-[50px] mt-10">
          <Account_links w={"20px"} h={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
