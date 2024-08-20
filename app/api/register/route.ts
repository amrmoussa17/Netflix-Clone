import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import bcrypt from "bcrypt"

const schema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(5),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.issues, {
      status: 400,
    })

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 })

  const hashedPassword = await bcrypt.hash(body.password, 10)
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.username,
      hashedPassword,
      emailVerified: new Date(),
      image: "",
    },
  })

  return NextResponse.json({ email: newUser.email })
}
