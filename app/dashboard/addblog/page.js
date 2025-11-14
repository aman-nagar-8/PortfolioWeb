"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { TbReload } from "react-icons/tb";
import Image from "next/image";

const Addblog_page = () => {
  const [title, settitle] = useState("");
  const [intro, setintro] = useState("");
  const [tag, settag] = useState([]);
  const [title_img, settitle_img] = useState([]);
  const [topic, settopic] = useState([]);
  const [created_At, setcreated_At] = useState("");

  const [new_tag, setnew_tag] = useState("");
  const [tag_delete_btn_diseble, settag_delete_btn_diseble] = useState(true);
  const [title_img_message, settitle_img_message] = useState("No Image ");
  const [choose_title_img, setchoose_title_img] = useState();
  const [new_topic_title, setnew_topic_title] = useState("");
  const [new_topic_detail, setnew_topic_detail] = useState("");
  const [topic_delete_btn_diseble, settopic_delete_btn_diseble] =
    useState(true);
  const [select_topic_index, setselect_topic_index] = useState();
  const [message, setmessage] = useState("No Update");


  const update_blog = async ()=>{
  const res = await fetch(`/api/addblog` , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({title , intro , topic  , tag , title_img , created_At})
     });
      const updated_res = await res.json();
      setmessage(updated_res.message);
 }


  const add_blog_btn = () => {
    setmessage("Project Undating...")
    //   await update_blog();
  };

  const add_tag_button = () => {
    if (new_tag.trim() == "") return;
    settag([...tag, new_tag.trim()]);
    setnew_tag("");
  };

  const delete_tag_button = (select_tag) => {
    const updated_tag = tag.filter((arr_tag) => arr_tag !== select_tag);
    settag(updated_tag);
    settag_delete_btn_diseble(true);
    setnew_tag("");
  };

  const onclick_on_tag = (index) => {
    let value = tag[index];
    setnew_tag(value);
    settag_delete_btn_diseble(false);
  };

  const handleUpload_title_img = async () => {
    settitle_img_message("Adding image...");
    if (!choose_title_img)
      return settitle_img_message("Select an image first!");

    const formData = new FormData();
    formData.append("image", choose_title_img); // key must match backend field name

    const res = await fetch("/api/addimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    settitle_img_message(data?.message || "Upload failed...");
    settitle_img(data?.cloudinaryUrl);
  };

  const handleChange_title_img = (e) => {
    setchoose_title_img(e.target.files[0]);
  };

  const add_topic_button = () => {
    if (new_topic_title.trim() == "") return;
    if (new_topic_detail.trim() == "") return;
    const new_topic = { title: new_topic_title, detail: new_topic_detail };
    settopic([...topic, new_topic]);
    setnew_topic_title("");
    setnew_topic_detail("");
  };
  const delete_topic_button = (index) => {
    const updated_topic = topic.filter((_, i) => i !== index);
    settopic(updated_topic);
    settopic_delete_btn_diseble(true);
    setnew_topic_detail("");
    setnew_topic_title("");
  };

  const onclick_on_topic = (index) => {
    settopic_delete_btn_diseble(false);
    setselect_topic_index(index);
    let value = topic[index];
    setnew_topic_title(value?.title);
    setnew_topic_detail(value?.detail);
  };

  return (
    <div className="text-zinc-800 mt-10 md-mt-0 pl-5">
      <div className="p-2 font-medium">
        <h3>
          <Link href={"/dashboard/allblogs"} className="hover:text-green-700">
            AllBlogs
          </Link>
          {" > Blog"}
        </h3>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add_blog_btn;
          }}
          action=""
          className="flex flex-col md:flex-row gap-5"
        >
          <div>
            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Blog Title -</p>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 md:w-90 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="title..."
              />
            </div>
            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Blog intro -</p>
              <textarea
                value={intro}
                onChange={(e) => setintro(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 md:w-160 h-45 md:h-35 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="Intro..."
              />
            </div>

            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] mb-10 text-zinc-500 mt-5 p-4 rounded-lg">
              <div className="flex justify-between">
                <p>Features -</p>
                <div className="w-10 h-8  border border-zinc-400  rounded-lg flex justify-center items-center ">
                  <TbReload
                    // onClick={reload_features_button}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full flex-wrap  gap-2 border mt-1.5 border-zinc-300 p-3 rounded-lg">
                {topic?.map((topic, index) => (
                  <div
                    onClick={() => onclick_on_topic(index)}
                    key={index}
                    className="border w-[22.5vw] p-1 cursor-pointer hover:border-zinc-600 border-zinc-400 rounded-lg "
                  >
                    <h4 className="font-medium text-zinc-600">
                      {topic?.title}
                    </h4>
                    <h4 className="font-normal text-zinc-500">
                      {topic?.detail}
                    </h4>
                  </div>
                ))}
              </div>
              <input
                value={new_topic_title}
                onChange={(e) => setnew_topic_title(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 md:w-80 md:ml-2 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add title..."
              />
              <textarea
                value={new_topic_detail}
                onChange={(e) => setnew_topic_detail(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 md:w-120 h-40 md:h-30 md:ml-2  border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add detail..."
              />
              <button
                type="button"
                onClick={add_topic_button}
                className="w-15 py-2 bg-green-400 rounded-lg cursor-pointer  text-zinc-800 md:ml-3"
              >
                Add
              </button>
              {topic_delete_btn_diseble ? (
                ""
              ) : (
                <button
                  type="button"
                  onClick={() => delete_topic_button(select_topic_index)}
                  className="w-15 py-2 border border-zinc-400  rounded-lg cursor-pointer hover:border-zinc-600 text-zinc-800 ml-2"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          <div>
            <div className="border border-zinc-300 w-[90vw] md:w-[400px] text-zinc-500 mt-5 p-4 rounded-lg">
              <div className="flex justify-between">
                <p>Tags -</p>
                <div className="w-10 h-8  border border-zinc-400  rounded-lg flex justify-center items-center ">
                  <TbReload
                    // onClick={reload_ts_button}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap  gap-2 border mt-1.5 border-zinc-300 p-3 rounded-lg">
                {tag.map((tag, index) => (
                  <div
                    onClick={() => onclick_on_tag(index)}
                    key={index}
                    className="border p-1 cursor-pointer hover:border-zinc-600 border-zinc-400 rounded-lg "
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <input
                value={new_tag}
                onChange={(e) => setnew_tag(e.target.value)}
                className="bg-zinc-100 rounded-lg w-40 ml-2 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add..."
              />
              <button
                type="button"
                onClick={add_tag_button}
                className="w-15 py-2 bg-green-400 rounded-lg cursor-pointer  text-zinc-800 ml-3"
              >
                Add
              </button>
              {tag_delete_btn_diseble ? (
                ""
              ) : (
                <button
                  type="button"
                  onClick={() => delete_tag_button(new_tag)}
                  className="w-15 py-2 border border-zinc-400  rounded-lg cursor-pointer hover:border-zinc-600 text-zinc-800 ml-2"
                >
                  Delete
                </button>
              )}
            </div>
            <div className="border border-zinc-300 w-[90vw] md:w-[400px] text-zinc-500 md:mt-5 p-4 rounded-lg">
              <p>Created At -</p>
              <input
                value={created_At}
                onChange={(e) => setcreated_At(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="Date..."
              />
            </div>
            <div className="border border-zinc-300 w-[90vw] md:w-[400px] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Profile Image URI -</p>
              <div className="w-full my-4 rounded-lg border-zinc-300 h-50 border relative">
                {title_img == "" ? (
                  <div className="mt-18 ml-23 text-zinc-400">
                    No Profile image{" "}
                  </div>
                ) : (
                  <Image
                    fill
                    src={title_img}
                    alt="no Image"
                    className="rounded-lg"
                  />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="block w-70 md:w-90 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={handleChange_title_img}
              />
              <div className="flex gap-5">
                <button
                  type="button"
                  onClick={handleUpload_title_img}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Image
                </button>
                <div className="pt-1.5 px-4 border mt-4 rounded-lg text-sm border-zinc-300">
                  {title_img_message}
                </div>
              </div>
            </div>
            <div className="border border-green-300 p-2 mb-15 md:mb-0 mt-4 rounded-lg">
              <div className="flex gap-3 ">
                <button
                  type="submit"
                  className="bg-green-600 p-2 w-50 rounded-lg mt-3 cursor-pointer"
                >
                  Add New Blog
                </button>
                <div className="w-10 h-8  border border-zinc-400 mt-3 rounded-lg flex justify-center items-center ">
                  <TbReload
                    // onClick={reload_project_button}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className=" w-70 md:w-80 mt-8 rounded-lg h-25 border p-2 border-zinc-200">
                {message}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addblog_page;
