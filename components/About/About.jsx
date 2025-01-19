import React from 'react'
import SectionTag from '../ui/SectionTag'
import Image from 'next/image'
import AnimatedComponent from '../ui/AnimatedComponent'

const About = () => {
  return (
    <div className='max-w-6xl mx-auto  px-4 md:px-0'>
      <SectionTag width={'2/5'} px={4} position={'start'} text={'About Us'} />
      <div className='grid grid-cols-1 md:grid-cols-3 items-center mt-8 gap-4'>
        <div className='col-span-2 md:w-4/5'>
          <div className='relative flex md:block justify-center items-center flex-col mb-12'>
            <AnimatedComponent
              type='blurSlideUp'
              duration={1}
              distance={30}
              blurAmount='15px'
            >
              <h1 className='title text-3xl md:text-6xl text-white font-semibold'>
                Primordial Creations
              </h1>
            </AnimatedComponent>
            <Image
              src='/Group-2.png'
              alt='Vercel Logo'
              width={300}
              height={30}
              className=''
            />
          </div>
          <p className='text-white text-xl md:text-2xl mb-8 text-center md:text-left'>
            Brand owners & CEOs often face the challenge of dedicating
            sufficient time to{' '}
            <strong className='text-primary'> effective brand design</strong>,
            diverting their attention from critical areas of their business.
          </p>
          <p className='text-white text-xl md:text-2xl mb-8 text-center md:text-left'>
            Primordial addresses this by{' '}
            <strong className='text-primary'>
              providing expert design services
            </strong>
            , freeing up valuable hours for clients to focus on high-impact
            business development initiatives.
          </p>
          <p className='text-white text-xl md:text-2xl text-center md:text-left'>
            This strategic approach enables clients to optimize their time &{' '}
            <strong className='text-primary'>maximize business growth!</strong>
          </p>
        </div>
        <div className='col-span-1 flex justify-end items-center'>
          <Image
            src='/Layer-1.png'
            alt='Vercel Logo'
            width={1024}
            height={796}
            className='w-full h-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default About
