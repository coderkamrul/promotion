import React from 'react'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import HowCanHelp from '@/components/HowCanHelp/HowCanHelp'
import WhatTheySay from '@/components/whatTheySay/WhatTheySay'
import Portfolio from '@/components/Portfolio/Portfolio'
import Toolkit from '@/components/Toolkit/Toolkit'
import { ContactUs } from '@/components/Contact/ContactUs'

const page = () => {
  return (
    <div>
      <div className='flex flex-col gap-[80px] md:gap-[160px] px-2'>
        {/* Hero Section  */}
        <Hero />

        {/* About Section  */}
        <About />

        {/* How can help  */}
        <HowCanHelp />

        {/* What They Say  */}
        <WhatTheySay />

        {/* Portfolio  */}
        <Portfolio />

        {/* Toolkit  */}
        <Toolkit />

        {/* Contact Us  */}
        <ContactUs />
      </div>
    </div>
  )
}

export default page
