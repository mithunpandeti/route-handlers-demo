import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filteredResults = query ? comments.filter((comment) => comment.text.toLowerCase().includes(query)) : comments;
    console.log(filteredResults,query);
    return Response.json(filteredResults);
}

export async function POST(request: Request){
    const comment = await request.json();
    const newComment = {
        id: comments.length+1,
        text: comment.text
    }
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), { status: 201, headers: { 'Content-Type': 'application/json'}});
}