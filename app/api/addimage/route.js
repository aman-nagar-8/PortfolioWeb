import { NextResponse } from "next/server";
import { Image_upload } from "@/utils/Cloudinary_image_upload";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // Create directory if not exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Create unique file name
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    //  1. Write file locally first
    fs.writeFileSync(filePath, buffer);

    //  2. Upload to Cloudinary
    const cloudinaryResult = await Image_upload(filePath);

    //  3. Remove local file (handled inside Image_upload too, but safe here)
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    if (!cloudinaryResult) {
        return NextResponse.json(
            { success: false, message: "Upload failed", error: error.message },
            { status: 500 }
        );
    }
    // You can return both Cloudinary URL and public URL (if needed)
    return NextResponse.json({
      success: true,
      message:"Image upload Successfully",
      cloudinaryUrl: cloudinaryResult.secure_url,
      publicUrl: `/uploads/${filename}`,
    });



  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed", error: error.message },
      { status: 500 }
    );
  }
}
