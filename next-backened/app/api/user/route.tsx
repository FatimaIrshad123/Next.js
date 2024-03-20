import { NextResponse,NextRequest } from "next/server";

export function GET(){
    return NextResponse.json({
        email:"Fatima@gmail.com",
        name:"Fatima"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json()
    const header = req.headers.get("authorization")
    // query params
    console.log(req.nextUrl.searchParams.get("name"))
    return NextResponse.json({
        message : "User Created"
    })
}