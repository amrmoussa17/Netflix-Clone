import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import serverAuth from "@/app/lib/serverAuth"

export async function GET(req: NextRequest) {
  await serverAuth()
  const movieCount = await prisma.movie.count()
  const randomIndex = Math.floor(Math.random() * movieCount)
  const randomMovies = await prisma.movie.findMany({
    take: 1,
    skip: randomIndex,
  })
  return NextResponse.json(randomMovies[0])
}
