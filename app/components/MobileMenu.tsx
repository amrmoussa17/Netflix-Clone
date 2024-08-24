import React from "react"

const MobileMenu = ({ visible }: { visible: boolean }) => {
  if (!visible) return null
  return (
    <div className="bg-black w-56 py-5 absolute top-8 left-0 flex flex-col gap-3 border-2 border-gray-800">
      <div className="text-white text-center hover:underline">Home</div>
      <div className="text-white text-center hover:underline">Series</div>
      <div className="text-white text-center hover:underline">Films</div>
      <div className="text-white text-center hover:underline">
        New & Popular
      </div>
      <div className="text-white text-center hover:underline">My List</div>
      <div className="text-white text-center hover:underline">
        Browse by languages
      </div>
    </div>
  )
}

export default MobileMenu
