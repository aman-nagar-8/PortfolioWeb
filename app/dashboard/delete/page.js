"use client";
import { useState } from "react";

export default function ImageUploader() {
  const [image, setimage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const [Images, setImages] = useState([]);

  const handleChange = (e) => {
    setimage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Select an image first!");

    const formData = new FormData();
    formData.append("image", image); // key must match backend field name

    const res = await fetch("/api/addimage", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setImages([...Images, data.cloudinaryUrl]);
      setUploadedUrl(data.cloudinaryUrl);
      alert("Image uploaded successfully!");
    } else {
      alert("Upload failed!");
    }
  };

  return (
    <div className="p-4  text-zinc-800">
      <input
        type="file"
        accept="image/*"
        className="block w-100 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        onChange={handleChange}
      />
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Image
      </button>

      {uploadedUrl && (
        <div className="mt-4">
          <p>Cloudinary URL:</p>
          <a href={uploadedUrl} target="_blank">
            {uploadedUrl}
          </a>
          <img src={uploadedUrl} alt="Uploaded" className="w-48 mt-2" />
        </div>
      )}

      <div className="flex" >
        <input
          type="file"
          accept="image/*"
          className="block w-90 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
    </div>
  );
}
