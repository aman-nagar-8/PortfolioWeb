import { NextResponse } from "next/server";


export async function GET(req) {
  // Create a response
  const response = NextResponse.redirect(new URL ("/" , req.url));

  // Delete cookies
  response.cookies.set("token", "", { path: "/", maxAge: 0 });
  response.cookies.set("role", "", { path: "/", maxAge: 0 });

  return response;
}
