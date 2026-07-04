import Project from "@/models/project";
import { connectDB } from "@/lib/db";
import { generateSlug } from "@/controllers/slugGenerater";
import mongoose from "mongoose";

export async function GET(_, { params }) {
  try {
    await connectDB();
    const { project_id } = await params;
    // const project = await Project.findById(project_id);
    // const slug_project = await Project.findOne({ slug: project_id });

    let project;

    // 1. If param is a valid ObjectId → fetch by _id
    if (mongoose.Types.ObjectId.isValid(project_id)) {
      project = await Project.findById(project_id);
    }

    // 2. If not found or not ObjectId → try slug
    if (!project) {
      project = await Project.findOne({ slug: project_id });
    }

    if (!project) {
      return new Response(JSON.stringify({ message: "Project not found" }), {
        status: 404,
      });
    }
    return Response.json({ project });
  } catch (error) {
    console.error("GET req error from api/projects/projects_id : ", error);
  }
}

export async function POST(req, { params }) {
  try {
    await connectDB();
    const { project_id } = await params;
    const {
      title,
      intro,
      techstack,
      github,
      demo,
      title_img,
      images,
      features,
      created_At,
    } = await req.json();
    const project_slug = await generateSlug(title);
    const updated_project = await Project.findByIdAndUpdate(
      { _id: project_id },
      {
        title,
        intro,
        techstack,
        github,
        demo,
        title_img,
        images,
        features,
        created_At,
        slug: project_slug,
      },
      { new: true }
    );
    return Response.json({
      project: updated_project,
      message: "Project Updated!...",
    });
  } catch (error) {
    console.error("POST req error from api/projects/projects_id : ", error);
  }
}
