import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-[#003029] text-white px-6 py-12 md:px-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div className='md:col-span-1'>
            <Link
              href='/'
              className='text-3xl font-bold flex items-center gap-2'
            >
              <span className='text-[#7FE0A1]'>N</span> Primordial
            </Link>
            <p className='mt-4 text-sm leading-relaxed max-w-xs'>
              Primordial is a design agency that focuses on freeing up valuable
              hours for clients to focus on high-impact business development
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className='text-[#7FE0A1] font-medium mb-4'>Menu</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/about'
                className='hover:text-[#7FE0A1] transition-colors'
              >
                About
              </Link>
              <Link
                href='/portfolio'
                className='hover:text-[#7FE0A1] transition-colors'
              >
                Portfolio
              </Link>
              <Link
                href='/services'
                className='hover:text-[#7FE0A1] transition-colors'
              >
                Services
              </Link>
              <Link
                href='/contact'
                className='hover:text-[#7FE0A1] transition-colors'
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className='md:col-span-1'>
            <h3 className='text-[#7FE0A1] font-medium mb-4'>Contact Us</h3>
            <div className='space-y-2'>
              <a
                href='mailto:obeidullahsiddiqui@primordialcreations.com'
                className='block hover:text-[#7FE0A1] transition-colors'
              >
                obeidullahsiddiqui@primordialcreations.com
              </a>
              <a
                href='mailto:abdullahafeez@primordialcreations.com'
                className='block hover:text-[#7FE0A1] transition-colors'
              >
                abdullahafeez@primordialcreations.com
              </a>
              <a
                href='tel:+923278448276'
                className='block hover:text-[#7FE0A1] transition-colors'
              >
                +92 327 844 8276
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className='md:col-span-1'>
            <div className='flex flex-col items-start md:items-end'>
              <div className='flex gap-4'>
                <a href='#' className='hover:text-[#7FE0A1] transition-colors'>
                  <Instagram className='w-8 h-8' />
                </a>
                <a href='#' className='hover:text-[#7FE0A1] transition-colors'>
                  <Linkedin className='w-8 h-8' />
                </a>
              </div>
              <p className='mt-4 text-sm'>
                Visit our socials and drop us a direct message
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <p className='text-sm'>
            Copyright Primordial Creations. All rights reserved
          </p>
          <div className='flex gap-8 text-sm'>
            <Link
              href='/privacy'
              className='hover:text-[#7FE0A1] transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/cookies'
              className='hover:text-[#7FE0A1] transition-colors'
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
