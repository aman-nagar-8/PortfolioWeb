import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Define local upload path
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // Create directory if not exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Create unique file name
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    // Write file to local folder
    fs.writeFileSync(filePath, buffer);


    // You can return a public URL if you use /public
    const fileUrl = `/uploads/${filename}`;
    console.log(fileUrl , " file path : " , filePath)

    return NextResponse.json({
      success: true,
      filePath,
      fileUrl,
    });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed", error: error.message },
      { status: 500 }
    );
  }
}
