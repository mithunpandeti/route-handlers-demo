export const dynamic = "force-dynamic"; // one method to opt put caching

export async function GET(){
    return Response.json({
        time: new Date().toLocaleTimeString()
    }) // if you build and run the application in production, the response gets cached and you will see only one time after multiple page refreshes
}