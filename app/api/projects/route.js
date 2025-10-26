import { connectDB } from "@/lib/db";
import Project from "@/models/project";

export async function GET() {
    try{
       await connectDB();
       const projects = await Project.find();
       return Response.json({projects});
    }
    catch(error){
      console.error("GET req error in api/project : " , error)
    } 
}

export async function POST(req) {
    try{
      await connectDB();
      const {title , intro , techstack , github , demo , title_img , images , features , created_At } = await req.json();
      const new_project = new Project({title , intro , techstack , github , demo , title_img , images , features , created_At});
      await new_project.save();
      return Response.json({mess:"new Project added"});
    }
    catch(error){
      console.error("POST req error in api/project : " , error)
    } 
}