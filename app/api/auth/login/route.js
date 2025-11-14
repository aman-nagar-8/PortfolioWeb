import { connectDB } from "@/lib/db";
import message from "@/models/message";
import Login_User from "@/models/user_login";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET = process.env.JWT_key;

export async function  POST(req) {
    try{
       await connectDB();
       const {username , password} = await req.json();
       const user = await Login_User.findOne({username:username});
       if(!user) return NextResponse.json({success:false , message:"User not found..."});

       const valid = await bcrypt.compare(password.trim() , user.password);
       if(!valid) return NextResponse.json({ success:false , message:" Invalid password...."} , {status:401});

       const token = JWT.sign(
        {id:user._id , role:user.role} ,
         SECRET,
        { expiresIn: "7d" }    
        );
        const response = NextResponse.json({success:true , role:user.role , message:"Login successful! Redirecting..."});
        response.cookies.set("token" , token , { httpOnly: true });
        return response;

    }
    catch(error){
        console.error("POST req error in api/auth/login : " , error)
        return NextResponse.json({success:false , message:"Some error in login please try leter..."})
    }
}
