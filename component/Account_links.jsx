import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Account_links = () => {
  return (
    <div className="flex gap-2.5 cursor-pointer  ">
      <Link href={"https://www.linkedin.com/in/aman-nagar-64a678366/"} className="z-30" >
        <TbBrandLinkedinFilled className="w-[28px] h-[22px] md:w-10 md:h-[30px]" />
      </Link>
      <Link href={"https://github.com/aman-nagar-8"}>
        <BsGithub className="w-[28px] h-[22px] md:w-10 md:h-[30px]" />
      </Link>
      <Link href={"x.com"}>
        <FaXTwitter className="w-[28px] h-[22px] md:w-10 md:h-[30px]" />
      </Link>
    </div>
  );
};

export default Account_links;
