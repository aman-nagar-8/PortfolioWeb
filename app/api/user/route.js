import { connectDB } from "@/lib/db";
import User from "@/models/user";
import { jwtVerify } from "jose";

const SECRET = process.env.JWT_key;

export async function GET() {
    try{
        await connectDB();
        const user_data = await User.find();  
        return Response.json({data:user_data});
    } 
    catch(error){
        console.error("user get req error from api/user ", error);
        return Response.json({message:"some error"})
    }
}

export async function POST(req){
    try{
        // const token = req.cookies.get("token")?.value
        // const {payload} = await jwtVerify(token , new TextEncoder().encode(SECRET));
        // if(payload.role == "visitor"){
        //     return Response.json({message:"you can not update it"});
        // }
            
        await connectDB();
        const {title , intro , location , mess , id} = await req.json();
        const isUser = await User.findOneAndUpdate({_id:id} , {title , intro , location , mess } , {new:true});
        if(!isUser){
            const newUser = new User({title , intro , location , mess});
            await newUser.save();
            return Response.json({message:"user added"})
        } 
        return Response.json({message:"data Updated!"});
    }
    catch(error){
        console.error("user post req error from api/user " , error);
    }
}