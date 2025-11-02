"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { TbReload } from "react-icons/tb";
import Image from "next/image";

const Project_id_page = () => {
  const params = useParams();
  // const ts = ["HTML", "CSS", "JS", "Node js", "MongoDB"];
  // const feat = [{ title: "attendance system", detail: "about attendance" }];

  const [title, settitle] = useState("loading...");
  const [features, setfeatures] = useState([]);
  const [intro, setintro] = useState("loading...");
  const [demo, setdemo] = useState("loading...");
  const [github, setgithub] = useState("loading...");
  const [created_At, setcreated_At] = useState("loading...");
  const [title_img, settitle_img] = useState("/title");
  const [techstack, settackstack] = useState([]);
  const [images, setimages] = useState([]);

  const [choose_title_img, setchoose_title_img] = useState(null);
  const [feat_choosen_img, setfeat_choosen_img] = useState(null);
  const [feat_upload_img_url, setfeat_upload_img_url] = useState("");
  const [feat_img_message, setfeat_img_message] = useState("Upload img");
  const [feat_img_button, setfeat_img_button] = useState("Add Image");

  const [message, setmessage] = useState("project Loaded!..");
  const [title_img_message, settitle_img_message] = useState("No update");

  const [new_ts, setnew_ts] = useState("");
  const [ts_delete_btn_diseble, setts_delete_btn_diseble] = useState(true);
  const [features_delete_btn_diseble, setfeatures_delete_btn_diseble] =
    useState(true);

  const [new_features_title, setnew_features_title] = useState("");
  const [new_features_detail, setnew_features_detail] = useState("");
  const [select_feature_index, setselect_feature_index] = useState();

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
    const new_feat = {
      title: new_features_title,
      detail: new_features_detail,
      image: feat_upload_img_url,
    };
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
    setselect_feature_index(index);
    setnew_features_title(value?.title);
    setnew_features_detail(value?.detail);
  };

  const delete_ts_button = (skill) => {
    const updated_ts = techstack.filter((arr_skill, i) => arr_skill !== skill);
    settackstack(updated_ts);
    setts_delete_btn_diseble(true);
    setnew_ts("");
  };

  const delete_features_button = (index) => {
    const updated_features = features.filter( 
      (_, i) => i !== index
    );
    setfeatures(updated_features);
    setfeatures_delete_btn_diseble(true);
    setnew_features_detail("");
    setnew_features_title("");
  };

  const reload_ts_button = () => {
    setnew_ts("Reloading");
    settackstack(projects?.techstack);
    setnew_ts("");
  };

  const reload_project_button = () => {
    setmessage("Project Reloaded!...");
    get_project();
  };

  const reload_features_button = () => {
    setfeatures(projects?.features);
    setnew_features_detail("");
    setnew_features_title("");
  };

  const update_project = async () => {
    const res = await fetch(`/api/projects/${params.project_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        intro,
        techstack,
        github,
        demo,
        title_img,
        images,
        features,
        created_At,
      }),
    });
    const updated_res = await res.json();
    setmessage(updated_res.message);
    setprojects(updated_res.project);
  };

  const update_project_btn = async () => {
    setmessage("Project Undating...");
    await update_project();
  };

  const handleUpload_title_img = async () => {
    if (!choose_title_img)
      return settitle_img_message("Select an image first!");

    const formData = new FormData();
    formData.append("image", choose_title_img); // key must match backend field name

    const res = await fetch("/api/addimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    settitle_img_message(data?.message);
    settitle_img(data?.cloudinaryUrl);
  };

  const handleChange_title_img = (e) => {
    setchoose_title_img(e.target.files[0]);
  };

  const handleUpload_feature_img = async () => {
    setfeat_img_button("Adding....");
    if (!feat_choosen_img) return setfeat_img_message("Select an image first!");

    const formData = new FormData();
    formData.append("image", feat_choosen_img); // key must match backend field name

    const res = await fetch("/api/addimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setfeat_img_message(data?.message);
    setfeat_upload_img_url(data?.cloudinaryUrl);
    setfeat_img_button("Add Image");
  };

  const handleChange_feature_img = (e) => {
    setfeat_img_message("Upload Image")
    setfeat_choosen_img(e.target.files[0]);
  };

  return (
    <div className="text-zinc-800 pl-5 mt-10 md:mt-0">
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            update_project_btn();
          }}
          action=""
          className="flex flex-col md:flex-row gap-5"
        >
          <div>
            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Project Name -</p>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Project intro -</p>
              <textarea
                value={intro}
                onChange={(e) => setintro(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 md:w-160 h-45 md:h-35 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Github Link -</p>
              <input
                value={github}
                onChange={(e) => setgithub(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Demo Link -</p>
              <input
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
              />
            </div>
            <div className="border border-zinc-300 w-[90vw] md:w-[50vw] mb-10 text-zinc-500 mt-5 p-4 rounded-lg">
              <div className="flex justify-between">
                <p>Features -</p>
                <div className="w-10 h-8  border border-zinc-400  rounded-lg flex justify-center items-center ">
                  <TbReload
                    onClick={reload_features_button}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex flex-wrap  gap-2 border mt-1.5 border-zinc-300 p-3 rounded-lg">
                {features.map((feature, index) => (
                  <div
                    onClick={() => onclick_on_features(index)}
                    key={index}
                    className="border w-full md:w-[45vw] p-1 cursor-pointer hover:border-zinc-600 border-zinc-400 rounded-lg "
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className=" w-[250px] h-[130px] rounded-lg border-zinc-300  md:mr-5  border">
                        {feature?.image && feature.image.trim() !== "" ? (
                          <Image
                          width={250}
                          height={130}
                             src={feature?.image}
                            alt={feature?.title || "Feature image"}
                            className="rounded-lg"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full text-zinc-400">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="w-full md:w-[500px] mt-5 md:mt-0" >
                        <h4 className="font-medium text-zinc-600">
                          {feature.title}
                        </h4>
                        <h4 className="font-normal text-[12px] md:text-[16px] text-zinc-500">
                          {feature.detail}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <input
                value={new_features_title}
                onChange={(e) => setnew_features_title(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 md:w-80 md:ml-2 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add title..."
              />
              <textarea
                value={new_features_detail}
                onChange={(e) => setnew_features_detail(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 md:w-120 h-50 md:h-30 md:ml-2  border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
                placeholder="add detail..."
              />
              <div className="flex flex-col md:flex-row mt-2 md:ml-2 mb-4">
                <input
                  type="file"
                  accept="image/*"
                  className="block w-70 md:w-90 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  onChange={handleChange_feature_img}
                />
                <div className="flex mt-5 md:mt-0 md:ml-5 gap-5">
                  <button
                    type="button"
                    onClick={handleUpload_feature_img}
                    className="mt-0.5 bg-blue-500 text-white px-4 py-2 cursor-pointer rounded"
                  >
                    {feat_img_button}
                  </button>
                  <div className="pt-1.5 px-4 border mt-0.5 rounded-lg text-sm border-zinc-300">
                    {feat_img_message}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={add_features_button}
                  className="w-15 py-2 bg-green-500 rounded-lg cursor-pointer  text-zinc-800 md:ml-2"
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
                       select_feature_index
                      )
                    }
                    className="w-15 py-2 border border-zinc-400  rounded-lg cursor-pointer hover:border-zinc-600 text-zinc-800 ml-2"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="border border-zinc-300 w-[90vw] md:w-[400px] text-zinc-500 mt-5 p-4 rounded-lg">
              <p>Created At -</p>
              <input
                value={created_At}
                onChange={(e) => setcreated_At(e.target.value)}
                className="bg-zinc-100 rounded-lg w-70 h-12 border-1 mt-3  text-zinc-800 border-zinc-400 focus:ring-zinc-500 p-3 focus:outline-none"
                type="text"
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
            <div className="border border-zinc-300 w-[90vw] md:w-[400px] text-zinc-500 mt-5 p-4 rounded-lg">
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
                    className="border p-1 cursor-pointer text-sm md:text-[16px] hover:border-zinc-600 border-zinc-400 rounded-lg "
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
            <div className="border border-green-300 mb-20 md:mb-0 p-2 mt-4 rounded-lg">
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

export default Project_id_page;
