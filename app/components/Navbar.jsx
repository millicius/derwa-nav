'use client'

import { useState } from "react"
import Link from "next/link"


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
    console.log('Tu paspaudei Nav mygtukeli obalio to!!!!')
  }
  
  return (
    <div className="flex justify-between">
      <div className="p-5 text-blue-950">logo</div>
      <div className="hidden sm:flex p-5 gap-2">
        <Link href='/'>home</Link>
        <Link href='/about'>home</Link>
        <Link href='/contact'>home</Link>
      </div>
      <div onClick={handleClick} className="sm:hidden mt-5 mr-5 w-[20px] h-[20px] bg-slate-500 cursor-pointer hover:bg-blue-500 transition-all duration-300"></div>
      <div className={`fixed w-[100%] h-screen bg-slate-400 ${nav ? 'translate-x-[0%] transition-all ease-in-out duration-300' : '-translate-x-[100%] transition-all ease-in-out duration-300'}`}>
        <div onClick={handleClick} className="w-5 h-5 bg-red-600 absolute top-2 right-2 cursor-pointer"></div>
      </div>
    </div>
  )
}

export default Navbar
