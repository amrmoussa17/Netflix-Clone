import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"
import serverAuth from "@/app/lib/serverAuth"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth()
    const { movieId } = await req.json()
    const existingMovie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    })
    if (!existingMovie) {
      throw new Error("Invalid Movie Id")
    }
    const updatedUser = await prisma.user.update({
      where: {
        email: currentUser?.email || "",
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    })
    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth()
    const { movieId } = await req.json()
    const existingMovie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    })
    if (!existingMovie) {
      throw new Error("Invalid Movie Id")
    }

    const updatedFavoriteIds = currentUser.favoriteIds.filter(
      (movieId) => movieId !== existingMovie.id
    )

    const updatedUser = await prisma.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    })
    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth()
    const favoriteMovies = await prisma.movie.findMany({
      where: {
        id: { in: currentUser.favoriteIds },
      },
    })
    return NextResponse.json(favoriteMovies)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
