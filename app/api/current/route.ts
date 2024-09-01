import { NextRequest, NextResponse } from "next/server"
import serverAuth from "@/app/lib/serverAuth"

export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth()
    return NextResponse.json(currentUser)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
