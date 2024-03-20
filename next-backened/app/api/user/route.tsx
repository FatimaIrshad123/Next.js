import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(){
    const user = await prisma.user.findFirst({})
    return NextResponse.json({
        user
    })
}

export async function POST(req: NextRequest){
    const body = await req.json()
    await prisma.user.create({
        data:{
            email:body.email,
            password:body.password
        }
    })
    // const header = req.headers.get("authorization")
    // query params
    // console.log(req.nextUrl.searchParams.get("name"))
    return NextResponse.json({
        body
    })
}