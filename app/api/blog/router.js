import { connectDB } from "@/lib/db";
import Blog from "@/models/blog";

export async function GET() {
    try{
        await connectDB();
        const blog = await Blog.find();
        return Response.json({blog});
    }
    catch(error){
        console.error("GET req error in api/blog : " , error);
    }
}

export async function POST(req) {
    try{
       await connectDB();
       const {title , intro , tag , title_img , images , topics , created_At} = await req.json();
       const new_blog = new Blog({title , intro , tag , title_img , images , topics , created_At});
       await new_blog.save();
       return Response.json({mess:"new Blog added!"});
    }
    catch(error){
        console.error("POST req error in api/blog : " , error);
    }
}