import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest){
    /*if (request.nextUrl.pathname==="/time"){ // Conditional Statement approach
       return NextResponse.redirect(new URL("/hello", request.url))
    }*/

   // return NextResponse.redirect(new URL("/", request.url)) // matcher config

   const response = NextResponse.next();
   const themePreference = request.cookies.get("theme");
   if(!themePreference){
    response.cookies.set("theme","dark");
   }

   response.headers.set("Custom-Header", "Custom-value");
   return response
}

//export const config = {
  //  matcher: "/profile"
//}