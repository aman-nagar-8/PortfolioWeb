import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export async function Image_upload(imageURI) {
  try {
    if(!imageURI) return Null;
    const upload_image = await cloudinary.uploader.upload(imageURI, {
      folder: "portfolio-images",
      resource_type:"auto"
    });
    if (fs.existsSync(imageURI)) {
      fs.unlinkSync(imageURI);
    }
    return upload_image;
  } catch (error) {
    if (fs.existsSync(imageURI)) {
      fs.unlinkSync(imageURI);
    }
    console.log("Image upload error in cloudinary_image_upload : ", error);
    return null
  }
}
