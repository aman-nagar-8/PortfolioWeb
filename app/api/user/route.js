import { connectDB } from "@/lib/db";
import User from "@/models/user";

export async function GET() {
    try{
        await connectDB();
        const user_data = await User.find();  
        return Response.json({data:user_data});
    } 
    catch(error){
        console.error("user get req error from api/user ", error);
    }
}

export async function POST(req){
    try{
        await connectDB();
        const {title , intro , location , mess} = await req.json();
        const isUser = await User.findOneAndUpdate(title , intro , location , mess , {new:true});
        if(!isUser){
            const newUser = new User({title , intro , location , mess});
            await newUser.save();
            return Response.json({message:"user added"})
        } 
        return Response.json({message:"user added!"});
    }
    catch(error){
        console.error("user post req error from api/user " , error);
    }
}