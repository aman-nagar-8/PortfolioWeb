import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

const mess_schema = new mongoose.Schema({
    name: String,
    mess: String,
    like: {
        type: Number,
        default:0
    }
});

const message = mongoose.models.message || mongoose.model("message" , mess_schema);

export async function GET(){
    await connectDB();
    const messages = await message.find();
    console.log(messages.data);
    return Response.json({allmes:messages});
}
export async function POST(req) {
    await connectDB();
    console.log("DB connected next")
    const { name , mess} = await req.json();
    const newMess = new message({name , mess})
    await newMess.save();
    return Response.json({message:"Message added!"});
}