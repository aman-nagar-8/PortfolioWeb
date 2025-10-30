import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = process.env.JWT_key;

export async function middleware(req) {
   if(req.method == "POST"){
    const token = req.cookies.get("token")?.value;

    if(!token) NextResponse.redirect(new URL("/login" , req.url));

    try{
       const {payload} = await jwtVerify(token , new TextEncoder().encode(SECRET));
          if(payload.role == "visitor" ) return NextResponse.json({message:"you can not update it"});
          
          return NextResponse.next();
         }
         catch(error){
            console.log("token verify error in middleware : " , error);
            return NextResponse.redirect( new URL("/login" , req.url));
         }
    };
    return NextResponse.next();
}

export const config = {
    matcher : ["/dashboard/:path*", "/api/user" , "/api/projects/:path*" , "/api/blog",],
};