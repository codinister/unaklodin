'use client'

import { CiMenuBurger } from "react-icons/ci";
const Menu = () => {
  return (
    <div className="flex gap-2 items-center bg-white rounded-xl px-2 py-1">
      <CiMenuBurger className="text-2xl font-bold" /> <span>Menu</span>
    </div>
  )
}

export default Menu