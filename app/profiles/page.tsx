"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Profiles = () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          who is watching now?
        </h1>
        <div className="flex justify-center items-center gap-8 mt-10">
          <div
            onClick={() => {
              router.push("/")
            }}
          >
            <div className="group">
              <div className="w-44 h-44 rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img src="/images/default-blue.png" alt="profile" />
              </div>
              <div className="mt-4 text-gray-400 text-center group-hover:text-white">
                {session?.user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
