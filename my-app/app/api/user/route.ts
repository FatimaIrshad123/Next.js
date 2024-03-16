import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()
import { NextRequest } from "next/server";

export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    return Response.json({
        message : "User Created"
    })
}