import serverAuth from "@/app/lib/serverAuth"
import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  req: NextRequest,
  { params }: { params: { movieId: string } }
) {
  try {
    await serverAuth()
    const movieId = params.movieId
    if (typeof movieId !== "string") {
      throw new Error("invalid Id")
    }
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    })
    if (!movie) {
      throw new Error("invalid Id")
    }
    return NextResponse.json(movie)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
