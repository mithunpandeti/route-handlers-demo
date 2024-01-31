import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(request: Request, { params }: { params: { id: string}}){
    if(parseInt(params.id) > comments.length){redirect("/comments")}// If the data is not present, redirect to respected page
    const comment = comments.find((comment) => comment.id === parseInt(params.id));
    return Response.json(comment)
}

export async function PATCH(request: Request, { params }: { params: {id: string}}) {
    const comment = await request.json();
    const { text } = comment;
    const findIndex = comments.findIndex(comment => comment.id === parseInt(params.id));
    comments[findIndex] = comment;
    return Response.json(comments[findIndex])
}

export async function DELETE(request: Request, { params }: { params : { id: string}}) {
    const findIndex = comments.findIndex(comment => comment.id === parseInt(params.id));
    const deletedComment = comments[findIndex];
    comments.splice(findIndex, 1);
    return Response.json(deletedComment);
}