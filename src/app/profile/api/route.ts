import { type NextRequest } from "next/server"; 
import { headers } from "next/headers";

export async function GET(request: NextRequest){

    const requestHeaders = new Headers(request.headers);//first approach to get headers data using Nest request
    const headerList = headers();//second approach to get headers data using headers

    // We are fetching the Authorization header
    console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'))
    return new Response("{name: 'Mithun', address: 'New York'}",{
        headers: {
            "Content-Type": "application/json"
        }
    });
}