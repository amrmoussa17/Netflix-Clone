import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"
import serverAuth from "@/app/lib/serverAuth"

export async function GET(req: NextRequest) {
  await serverAuth()
  try {
    const movies = await prisma.movie.findMany()
    return NextResponse.json(movies, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
