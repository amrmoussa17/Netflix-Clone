import { signOut } from "next-auth/react"
import React from "react"

const AccountMenu = ({ visible }: { visible: boolean }) => {
  if (!visible) return null
  return (
    <div className="bg-black w-56 py-5 absolute top-14 right-0 flex flex-col gap-3 border-2 border-gray-800">
      <div className="px-3 group flex gap-3 items-center">
        <img
          className="w-8 rounded-md"
          src="/images/default-blue.png"
          alt="profile"
        />

        <p className="text-white text-sm group-hover:underline">username</p>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => signOut()}
        className="px-3 text-sm text-white text-center hover:underline transition"
      >
        Sign out of Netflix
      </div>
    </div>
  )
}

export default AccountMenu
