import React from 'react'
import AnimatedComponent from '../ui/AnimatedComponent'
import Image from 'next/image'

const cardData = [
  {
    text: 'My brand feels basic and lacks distinction',
  },
  {
    text: 'Not confident if my brand reflects my values',
  },
  {
    text: 'Marketing materials are outdated & ineffective',
  },
  {
    text: 'I need a creative partner to bring my vision to life',
  },
]

const HowCanHelp = () => {
  return (
    <div className='max-w-6xl mx-auto flex flex-col gap-14 px-4 md:px-0'>
      <AnimatedComponent
        type='blurSlideUp'
        duration={1}
        distance={30}
        blurAmount='15px'
      >
        <h1 className='title text-3xl text-center md:text-6xl text-white font-semibold'>
          How <strong className='text-primary'>Primordial Creations</strong> Can
          Help You
        </h1>
      </AnimatedComponent>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-2'>
        <div className='flex items-center lg:items-end flex-col gap-4'>
          {/* card component  */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className='flex justify-center items-center bg-secondary rounded-lg px-4 py-3 gap-4 w-full lg:w-[90%] border-primary border shadow-2xl'
            >
              <p className='text-white text-right text-xl'>{card.text}</p>
              <Image
                src='/Group-4.png'
                alt='Vercel Logo'
                width={55}
                height={48}
                className='shadow-2xl'
              />
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='/Group-3.png'
            alt='Vercel Logo'
            width={380}
            height={315}
            className='hidden lg:block'
          />
          <Image
            src='/Group-5.png'
            alt='Vercel Logo'
            width={380}
            height={315}
            className='block lg:hidden'
          />
        </div>
        <div className='flex items-center lg:items-start flex-col gap-4'>
          {/* card component  */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className='flex justify-center items-center bg-secondary rounded-lg px-4 py-3 gap-4 w-full lg:w-[90%] border-primary border shadow-2xl'
            >
              <Image
                src='/Group-4.png'
                alt='Vercel Logo'
                width={55}
                height={48}
                className='shadow-2xl'
              />
              <p className='text-white text-xl'>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full md:w-3/4 mx-auto'>
        <p className='text-center text-white text-xl md:text-2xl'>
          Primordial has the solution to your desire needs. We can free up your
          valuable hours that can help you maximize business growth
        </p>
      </div>
    </div>
  )
}

export default HowCanHelp
