import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"
import prisma from "@/prisma/client"

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (session) {
    try {
      const movies = await prisma.movie.findMany()
      return NextResponse.json(movies, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error }, { status: 400 })
    }
  } else {
    return NextResponse.json({ error: "Not Signed In" }, { status: 400 })
  }
}
