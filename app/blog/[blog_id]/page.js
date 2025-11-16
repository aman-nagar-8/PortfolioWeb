import React from "react";
import Back_button from "@/component/Back_button";

// export async function generateStaticParams() {
//   const blogs = [{id:"0"} , {id:"1"} , {id:"2"}]

//   return blogs.map((blog) => ({
//     blog_id: blog.id,
//   }));
// }

const page = async ({ params }) => {
  const { blog_id } = await params;
  const res = await fetch(
    `${process.env.PORTFOLIO_BASE_URL}/api/blog/${blog_id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const blog = data.blog;
  return (
    <div className="w-full p-3 md:w-[1100px] m-auto ">
      <Back_button />
      <div className="my-4">
        <h2 className="text-2xl font-bold">{blog?.title}</h2>
        <div className="w-40 h-20 my-4">
          <div className="my-2">
            <p>{blog?.created_At}</p>
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10 border bg-green-500 rounded-lg "></div>
            <h4>Aman Nagar</h4>
          </div>
        </div>
        <p className="text-zinc-600 dark:text-zinc-300">{blog?.intro}</p>

        <div>
          {blog.topics.map((topic, index) => (
            <div key={index} >
              <h3 className="text-lg md:text-[20px] font-medium text-zinc-800 dark:text-zinc-100 py-4">
                {topic.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                {topic.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
