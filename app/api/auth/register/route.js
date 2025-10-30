import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";
import Login_User from "@/models/user_login";

export async function POST(req) {
    try{
        await connectDB();
        const { username, password } = await req.json();
      
        const hashed = await bcrypt.hash(password, 10);
        await Login_User.create({ username , password: hashed, role: "visitor" });
      
        return Response.json({ success: true, message: "User registered" });
    } 
    catch(error){
       console.error("POST req error in api/auth/register : " , error)
    }
}

