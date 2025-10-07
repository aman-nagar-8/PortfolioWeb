import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Account_links = ({ h, w }) => {
  return (
    <div className="flex gap-2.5 cursor-pointer ">
      <Link href={"https://www.linkedin.com/in/aman-nagar-64a678366/"}>
        <TbBrandLinkedinFilled style={{ height: h, width: w }} />
      </Link>
      <Link href={"https://github.com/aman-nagar-8"}>
        <BsGithub style={{ height: h, width: w }} />
      </Link>
      <Link href={"x.com"}>
        <FaXTwitter style={{ height: h, width: w }} />
      </Link>
    </div>
  );
};

export default Account_links;
