import { type NextRequest } from "next/server"; 
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest){

    const requestHeaders = new Headers(request.headers);//first approach to get headers data using Nest request
    const headerList = headers();//second approach to get headers data using headers

    // We are fetching the Authorization header
    console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));

    const theme = request.cookies.get("theme");
    console.log(theme)

    cookies().set("resultsPerPage", "20");
    console.log(cookies().get('resultsPerPage'));

    return new Response("<h1>Hello, Mithun!</h1>",{
        headers: {
            "Content-Type": "text/html",
            "Set-cookie": "theme=dark"
        }
    });
}