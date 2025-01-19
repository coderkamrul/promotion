import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 w-full px-2 z-20'>
      <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4'>
        {/* Logo  */}
        <div className='logo md:col-span-1 py-3 flex justify-center md:justify-start'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='Vercel Logo'
              width={285}
              height={51}
              className='cursor-pointer w-48 xl:w-72'
            />
          </Link>
        </div>

        {/* Navigation Menu  */}
        <div className='menus  md:col-span-3 hidden md:block w-full'>
          <ul className='flex items-center justify-center h-full w-full text-[18px]'>
            <li className='h-full'>
              <Link
                className='px-4 xl:px-12 py-2 text-white font-medium h-full flex items-center text-center'
                href='/'
              >
                About Us
              </Link>
            </li>
            <li className='h-full'>
              <Link
                className='px-4 xl:px-12 py-2 text-white font-medium h-full flex items-center text-center'
                href='/about'
              >
                Portfolio
              </Link>
            </li>
            <li className='h-full'>
              <Link
                className='px-4 xl:px-12 py-2 text-white font-medium h-full flex items-center text-center'
                href='/contact'
              >
                Services
              </Link>
            </li>
            <li className='h-full'>
              <Link
                className='px-4 xl:px-12 py-2 text-white font-medium h-full flex items-center text-center'
                href='/contact'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
