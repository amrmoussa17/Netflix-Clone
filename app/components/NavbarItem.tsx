const NavbarItem = ({ label }: { label: string }) => {
  return (
    <div className="text-white hover:text-gray-300 transition cursor-pointer">
      {label}
    </div>
  )
}

export default NavbarItem
