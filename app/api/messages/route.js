import { connectDB } from "@/lib/db";
import mongoose from "mongoose";
import message from "@/models/message";


export async function GET() {
  try {
    await connectDB();
    const messages = await message.find();
    console.log(messages.data);
    return Response.json({ allmes: messages });
  } catch (error) {
    console.error("GET api/message errr :", error);
  }
}
export async function POST(req) {
  try {
    await connectDB();
    console.log("DB connected next");
    const { name, mess , date} = await req.json();
    const newMess = new message({ name, mess , date });
    await newMess.save();
    return Response.json({ message: "Message added!" });
  } catch (error) {
    console.error("POST api error in api/message :", error);
  }
}
