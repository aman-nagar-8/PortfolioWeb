"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { TbReload } from "react-icons/tb";

const page = () => {
  const params = useParams();
  // const ts = ["HTML", "CSS", "JS", "Node js", "MongoDB"];
  // const feat = [{ title: "attendance system", detail: "about attendance" }];

  const [title, settitle] = useState("loading...");
  const [features, setfeatures] = useState([]);
  const [intro, setintro] = useState("loading...");
  const [demo, setdemo] = useState("loading...");
  const [github, setgithub] = useState("loading...");
  const [created_At, setcreated_At] = useState("loading...");
  const [title_img, settitle_img] = useState("loading...");
  const [techstack, settackstack] = useState([]);
  const [images, setimages] = useState([]);

  const [message , setmessage] = useState("project Loaded!..");

  const [new_ts, setnew_ts] = useState("");
  const [ts_delete_btn_diseble, setts_delete_btn_diseble] = useState(true);
  const [features_delete_btn_diseble, setfeatures_delete_btn_diseble] = useState(true);

  const [new_features_title, setnew_features_title] = useState("");
  const [new_features_detail, setnew_features_detail] = useState("");

  const [projects, setprojects] = useState([]);

  const get_project = async () => {
    const res = await fetch(`/api/projects/${params.project_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res_project = await res.json();
    setprojects(res_project.project);
  };

  useEffect(() => {
    get_project();
  }, []);

  useEffect(() => {
    settitle(projects?.title || "");
    setintro(projects?.intro || "");
    setdemo(projects?.demo || "");
    setgithub(projects?.github || "");
    setcreated_At(projects?.created_At || "");
    setfeatures(projects?.features || []);
    settackstack(projects?.techstack || []);
    settitle_img(projects?.title_img || "");
    setimages(projects?.images || []);
  }, [projects]);

  const add_ts_button = () => {
    if (new_ts.trim() == "") return;
    settackstack([...techstack, new_ts.trim()]);
    setnew_ts("");
  };

  const add_features_button = () => {
    if (new_features_title.trim() == "") return;
    if (new_features_detail.trim() == "") return;
    const new_feat = { title: new_features_title, detail: new_features_detail };
    setfeatures([...features, new_feat]);
    setnew_features_title("");
    setnew_features_detail("");
  };

  const onclick_on_ts = (index) => {
    setts_delete_btn_diseble(false);
    let value = techstack[index];
    setnew_ts(value);
  };

  const onclick_on_features = (index) => {
    setfeatures_delete_btn_diseble(false);
    let value = features[index];
    setnew_features_title(value?.title);
    setnew_features_detail(value?.detail);
  };

  const delete_ts_button = (skill) => {
    const updated_ts = techstack.filter((arr_skill, i) => arr_skill !== skill);
    settackstack(updated_ts);
    setts_delete_btn_diseble(true);
    setnew_ts("");
  };

  const delete_features_button = (title, detail) => {
    const updated_features = features.filter(
      (arr_feat, i) => arr_feat.title !== title
    );
    setfeatures(updated_features);
    setfeatures_delete_btn_diseble(true);
    setnew_features_detail("");
    setnew_features_title("");
  };

  const reload_ts_button = () => {
    setnew_ts("Reloading");
    settackstack(ts);
    setnew_ts("");
  };

  const reload_project_button = () => {
    setmessage("Project Reloaded!...");
    get_project();
  };

  const reload_features_button = () => {
    setfeatures(feat);
    setnew_features_detail("");
    setnew_features_title("");
  };


  const update_project = async ()=>{
  console.log(" project adding");
  const res = await fetch(`/api/projects/${params.project_id}` , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({title , intro , techstack , github , demo , title_img , images , features , created_At})
     });
      const updated_res = await res.json();
      console.log(updated_res);
      setmessage(updated_res.message);
      setprojects(updated_res.project);
 }

 const update_project_btn = async ()=>{
      setmessage("Project Undating...")
      await update_project();
 }

  return (
    <div className="text-zinc-800 pl-5">
      <div className="p-2 font-medium">
        <h3>
          <Link
            href={"/dashboard/allprojects"}
            className="hover:text-green-700"
          >
            Allprojects
          </Link>
          {" > project"}
        </h3>
      </div>
      <div className="flex gap-5">
        <form onSubmit={(e)=>{e.preventDefault(); update_project_btn();}} action="" className="flex gap-5">
          <div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Project Name -</p>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Project intro -</p>
              <textarea
                value={intro}
                onChange={(e) => setintro(e.target.value)}
                className="bg-zinc-100 rounded-lg w-160 h-35 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Github Link -</p>
              <input
                value={github}
                onChange={(e) => setgithub(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Demo Link -</p>
              <input
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[50vw] mb-10 text-zinc-500 mt-5 p-4 rounded-lg">
              <div className="flex justify-between">
                <p>Features -</p>
                <div className="w-10 h-8  border border-zinc-400  rounded-lg flex justify-center items-center ">
                  <TbReload
                    onClick={reload_features_button}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap  gap-2 border mt-1.5 border-zinc-300 p-3 rounded-lg">
                {features.map((feature, index) => (
                  <div
                    onClick={() => onclick_on_features(index)}
                    key={index}
                    className="border w-[22.5vw] p-1 cursor-pointer hover:border-zinc-600 border-zinc-400 rounded-lg "
                  >
                    <h4 className="font-medium text-zinc-600">
                      {feature.title}
                    </h4>
                    <h4 className="font-normal text-zinc-500">
                      {feature.detail}
                    </h4>
                  </div>
                ))}
              </div>
              <input
                value={new_features_title}
                onChange={(e) => setnew_features_title(e.target.value)}
                className="bg-zinc-100 rounded-lg w-80 ml-2 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add title..."
              />
              <textarea
                value={new_features_detail}
                onChange={(e) => setnew_features_detail(e.target.value)}
                className="bg-zinc-100 rounded-lg w-120 h-30 ml-2  border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add detail..."
              />
              <button
                type="button"
                onClick={add_features_button}
                className="w-15 py-2 bg-green-500 rounded-lg cursor-pointer  text-zinc-800 ml-3"
              >
                Add
              </button>
              {features_delete_btn_diseble ? (
                ""
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    delete_features_button(
                      new_features_title,
                      new_features_detail
                    )
                  }
                  className="w-15 py-2 border border-zinc-400  rounded-lg cursor-pointer hover:border-zinc-600 text-zinc-800 ml-2"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          <div>
            <div className="border border-zinc-300 w-[400px] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Created At -</p>
              <input
                value={created_At}
                onChange={(e) => setcreated_At(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[400px] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Profile Image URI -</p>
              <input
                value={title_img}
                onChange={(e) => settitle_img(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[400px] text-zinc-500 mt-5 p-4 rounded-lg">
              <div className="flex justify-between">
                <p>Tech Stack -</p>
                <div className="w-10 h-8  border border-zinc-400  rounded-lg flex justify-center items-center ">
                  <TbReload
                    onClick={reload_ts_button}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap  gap-2 border mt-1.5 border-zinc-300 p-3 rounded-lg">
                {techstack.map((skill, index) => (
                  <div
                    onClick={() => onclick_on_ts(index)}
                    key={index}
                    className="border p-1 cursor-pointer hover:border-zinc-600 border-zinc-400 rounded-lg "
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <input
                value={new_ts}
                onChange={(e) => setnew_ts(e.target.value)}
                className="bg-zinc-100 rounded-lg w-40 ml-2 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add..."
              />
              <button
                type="button"
                onClick={add_ts_button}
                className="w-15 py-2 bg-green-500 rounded-lg cursor-pointer  text-zinc-800 ml-3"
              >
                Add
              </button>
              {ts_delete_btn_diseble ? (
                ""
              ) : (
                <button
                  type="button"
                  onClick={() => delete_ts_button(new_ts)}
                  className="w-15 py-2 border border-zinc-400  rounded-lg cursor-pointer hover:border-zinc-600 text-zinc-800 ml-2"
                >
                  Delete
                </button>
              )}
            </div>
            <div className="border border-green-300 p-2 mt-4 rounded-lg" >  
              <div className="flex gap-3 ">
                <button
                  type="submit"
                  className="bg-yellow-500 p-2 w-50 rounded-lg mt-3 cursor-pointer"
                >
                  Update
                </button>
                <div className="w-10 h-8  border border-zinc-400 mt-3 rounded-lg flex justify-center items-center ">
                  <TbReload
                    onClick={reload_project_button}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-80 mt-8 rounded-lg h-25 border p-2 border-zinc-200">
                {message}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
