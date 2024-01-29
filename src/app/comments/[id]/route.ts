import { comments } from "../data";

export async function GET(request: Request, { params }: { params: { id: string}}){
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