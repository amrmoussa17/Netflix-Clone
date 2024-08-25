import prisma from "@/prisma/client"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (session) {
    const movieCount = await prisma.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)
    const randomMovies = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    })
    return NextResponse.json(randomMovies[0])
  } else {
    NextResponse.json({ error: "Not Signed In" }, { status: 400 })
  }
}
