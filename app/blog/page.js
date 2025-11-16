import Blog_card from "@/app/blog/Blog_card";
import React from "react";

const Blog_page = async () => {
  const res = await fetch(`${process.env.PORTFOLIO_BASE_URL}/api/blog`, {
    cache: "no-store", // or next: { revalidate: 60 }
  });
  const data = await res.json();
  const blogs = data.blog;

  const blog_num = [1];
  return (
    <div className=" w-full md:w-[1120px] m-auto p-5">
      <div>
        <h2 className="text-[20px] font-bold my-5">Blogs</h2>
        <p></p>
      </div>
      <div className="flex flex-wrap gap-3.5">
        {blogs.map((blog , index) => (
          <Blog_card key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog_page;
