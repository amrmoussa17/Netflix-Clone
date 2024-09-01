"use client"
import { useEffect, useState } from "react"
import MobileMenu from "@/app/components/MobileMenu"
import NavbarItem from "@/app/components/NavbarItem"
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs"
import AccountMenu from "@/app/components/AccountMenu"

const TOP_OFFSET = 66

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev)
  }
  const toggleAccountMenu = () => {
    setShowAccountMenu((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <>
      <nav
        className={`w-full fixed z-40 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-16 py-6 flex items-center transition">
          <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
          <div className="ml-8 gap-7 hidden lg:flex">
            <NavbarItem label="Home" />
            <NavbarItem label="Series" />
            <NavbarItem label="Films" />
            <NavbarItem label="New & Popular" />
            <NavbarItem label="My List" />
            <NavbarItem label="Browse by languages" />
          </div>
          <div
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative "
          >
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown
              className={`text-white transition ${
                showMobileMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <MobileMenu visible={showMobileMenu} />
          </div>
          <div className="flex items-center ml-auto gap-7">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <BsSearch />
            </div>
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <BsBell />
            </div>
            <div
              onClick={toggleAccountMenu}
              className="flex items-center gap-2 cursor-pointer relative"
            >
              <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                <img src="/images/default-blue.png" alt="profile" />
              </div>
              <BsChevronDown
                className={`text-white transition ${
                  showAccountMenu ? "rotate-180" : "rotate-0"
                }`}
              />
              <AccountMenu visible={showAccountMenu} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
