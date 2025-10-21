import { connectDB } from "@/lib/db";
import message from "@/models/message";

export async function POST(req) {
    await connectDB();
    const {id , like_added} = await req.json();
    console.log(like_added)
    const liked_mess = await message.findByIdAndUpdate(id , {like:like_added} , {new:true});
    return Response.json({likes:liked_mess.like});
}