import blog from "@/models/blog";
import { connectDB } from "@/lib/db";

export async function GET(_, {params}) {
    try{
        await connectDB();
        const { blog_id } = await params;
        const res_blog = await blog.findById(blog_id);

        if (!res_blog) {
      return new Response(JSON.stringify({ message: "Blog not found" }), {
        status: 404,
      });
    }
        return Response.json({blog:res_blog});
    }
    catch(error){
        console.error("GET req error from api/blog/blog_id : " , error)
    }
    
}