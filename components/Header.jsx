import React from 'react'
import Link  from 'next/link'

import Nav from './Nav'
import MobileNav from './MobileNav'
import Image from 'next/image'

function Header() {
  return (
    <header className='py-8 xl:py-12 text-black'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href='/'>
            <div className="w-50 h-50 rounded-full overflow-hidden border border-black">
            <Image
              src="/assets/dashylogo.PNG"
              alt="Site Logo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
            </Link>

            {/* desktop nav */}
            <div className='hidden xl:flex items-center gap-8'>
                <Nav />
                {/* <Link href="/contact">
                <Button>Hire me</Button>
                </Link> */}
            </div>
            {/* mobile nav */}
            <div className='flex xl:hidden'>
                <MobileNav/>

            </div>
        </div>
    </header>
  )
}

export default Header
