import Project from "@/models/project";
import { connectDB } from "@/lib/db";

export async function GET(_, {params}) {
    try{
        await connectDB();
        const { project_id } = await params;
        const project = await Project.findById(project_id);

        if (!project) {
      return new Response(JSON.stringify({ message: "Project not found" }), {
        status: 404,
      });
    }
        return Response.json({project});
    }
    catch(error){
        console.error("GET req error from api/projects/projects_id : " , error)
    }
    
}

export async function POST(req , {params}) {
    try{
        await connectDB();
         const { project_id } = await params;
         const {title , intro , techstack , github , demo , title_img , images , features , created_At } = await req.json();
         const updated_project = await Project.findByIdAndUpdate({_id:project_id} , {title , intro , techstack , github , demo , title_img , images , features , created_At } , {new:true})
        return Response.json({project:updated_project , message:"Project Updated!..."});
    }
    catch(error){
        console.error("POST req error from api/projects/projects_id : " , error)
    }
    
}

