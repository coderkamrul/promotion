import Image from 'next/image'
import React from 'react'

const SectionTag = ({ px, position, text, width }) => {
  return (
    <div
      className={`flex items-center  md:justify-${position} justify-center py-8`}
    >
      <div
        className={`bg-[#1B4E3A] border border-gray-100/50 rounded-lg py-3 w-${width} md:w-auto px-${px} flex gap-2 items-center justify-center`}
      >
        <Image
          src='/Vector.png'
          alt='Vercel Logo'
          width={100}
          height={100}
          className='w-6 h-6'
        />
        <span className='font-semibold text-[18px] md:text-2xl text-white'>
          {text}
        </span>
      </div>
    </div>
  )
}

export default SectionTag
