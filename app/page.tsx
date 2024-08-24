"use client"
import { signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <>
      <div className="text-green-500 text-2xl">Welcome to Netflix Clone</div>
      <p className="text-white">logged in as: {session?.user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        logout
      </button>
    </>
  )
}
