"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links=[
    {name:"Home",path:"/"},
    {name:"About",path:"/about"},
    {name:"Contact",path:"/contact"},
]

function Nav() {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <nav className='flex gap-8'>
      {links.map((link,index)=>{
        return (
            <Link key={index} href={link.path} className={`${
            link.path === pathname && "text-black border-b-2 border-black"
        } capitalize font-medium hover:text-black transition-all`}
        >
                {link.name}
            </Link>
            )
      })}
    </nav>
  )
}

export default Nav
