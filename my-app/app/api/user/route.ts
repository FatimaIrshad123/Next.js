
import { NextRequest } from "next/server";

export function GET(){
    return Response.json({
        email: 'fatima@gmail.com',
        name: 'fatima'
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)
    return Response.json({
        message : "User Created"
    })
}