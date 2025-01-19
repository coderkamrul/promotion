import React from 'react'
import { IoMdStar, IoMdPricetags } from 'react-icons/io'
import Image from 'next/image'
import AnimatedComponent from '../ui/AnimatedComponent'

const Hero = () => {
  return (
    <div className='pt-[100px] md:pt-[250px] pb-[100px] container  relative'>
      <div
        className={`absolute inset-0 top-40 left-40 z-0 bg-[url('/sparkles.png')] bg-contain bg-no-repeat`}
      />

      {/* profile card  */}

      <div className='animate-cornerSlide hidden xl:flex  absolute top-[20%] right-[-10%] z-0'>
        <AnimatedComponent
          type='blurSlideUp'
          duration={2}
          distance={0}
          blurAmount='15px'
        >
          <div className=' xl:flex bg-white rounded-t-2xl border  gap-2 p-2 rounded-br-3xl overflow-hidden'>
            <Image
              src='/Ellipse-3.png'
              alt='Vercel Logo'
              width={100}
              height={100}
              className='w-16 h-16 rounded-full'
            />
            <div className='flex flex-col gap-1 w-[320px]'>
              <h1 className='font-semibold text-sm'>Fatima Khan</h1>
              <p className='text-[10px] text-gray-500'>
                his work ethic is what impresses me the most. I’ve worked with
                many designers in the past, and let me tell you – Obeidullah’s a
                champ!
              </p>
            </div>
          </div>
        </AnimatedComponent>
      </div>

      <div className='animate-cornerSlide hidden xl:flex  absolute top-[60%] left-[-10%] z-0'>
        <AnimatedComponent
          type='blurSlideUp'
          duration={2}
          distance={0}
          blurAmount='15px'
        >
          <div className=' xl:flex bg-white rounded-t-2xl border  gap-2 p-2 rounded-br-3xl overflow-hidden'>
            <Image
              src='/Ellipse.png'
              alt='Vercel Logo'
              width={100}
              height={100}
              className='w-16 h-16 rounded-full'
            />
            <div className='flex flex-col gap-1 w-[320px]'>
              <h1 className='font-semibold text-sm'>Ayesha Ameer</h1>
              <p className='text-[10px] text-gray-500'>
                If you’re looking for someone to elevate your LinkedIn profile
                or assist with design projects, I highly recommend him
              </p>
            </div>
          </div>
        </AnimatedComponent>
      </div>

      <div className='animate-cornerSlide hidden xl:flex  absolute top-[90%] right-[-10%] z-0'>
        <AnimatedComponent
          type='blurSlideUp'
          duration={2}
          distance={0}
          blurAmount='15px'
        >
          <div className=' xl:flex bg-white rounded-t-2xl border  gap-2 p-2 rounded-br-3xl overflow-hidden'>
            <Image
              src='/Ellipse-2.png'
              alt='Vercel Logo'
              width={100}
              height={100}
              className='w-16 h-16 rounded-full'
            />
            <div className='flex flex-col gap-1 w-[320px]'>
              <h1 className='font-semibold text-sm'>Fatima Khan</h1>
              <p className='text-[10px] text-gray-500'>
                his work ethic is what impresses me the most. I’ve worked with
                many designers in the past, and let me tell you – Obeidullah’s a
                champ!
              </p>
            </div>
          </div>
        </AnimatedComponent>
      </div>

      {/* Hero content  */}
      <div className='z-10 relative'>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-2'>
          <Image src='/Group1.png' alt='Vercel Logo' width={228} height={45} />
          <div className='flex justify-center items-center md:items-start flex-col gap-1'>
            <div className='star flex '>
              <IoMdStar fill='#FFD700' />
              <IoMdStar fill='#FFD700' />
              <IoMdStar fill='#FFD700' />
              <IoMdStar fill='#FFD700' />
              <IoMdStar fill='#FFD700' />
            </div>
            <div className='text-white text-base flex md:flex-col gap-1 leading-tight'>
              Trusted By The
              <span className='text-primary font-semibold '>Best Creators</span>
            </div>
          </div>
        </div>
        <div>
          <AnimatedComponent
            type='blurSlideUp'
            duration={2}
            distance={30}
            blurAmount='15px'
          >
            <h1 className='text-white title text-center font-medium !leading-tight text-4xl md:text-7xl pt-6 xl:max-w-[60%] mx-auto'>
              The <span className='text-primary'>Creative Origin</span> Of Your
              Brand's Identity
            </h1>
          </AnimatedComponent>
          <p className='text-white text-center font-medium !leading-tight px-4 md:px-0 md:text-[22px] pt-6 xl:max-w-[42%] mx-auto'>
            Is your brand lost in the <strong>sea of generic designs?</strong>{' '}
            Take hold of the<strong> Primordial toolkit</strong> and make your
            brand stand out!
          </p>
        </div>
        <div className='flex justify-center pt-10'>
          <button className='flex shadow-2xl gap-2 border border-primary bg-secondary hover:bg-primary text-white p-3 transition-all duration-300 justify-center items-center rounded-xl'>
            <span className='bg-primary py-1 px-2 rounded-lg shadow-md border-[1px] border-gray-50/50'>
              <IoMdPricetags
                fill='white'
                size={30}
                className='scale-x-[-1] rotate-90 '
              />
            </span>
            <span className='text-[25px] font-medium mt-1'>
              View Our Pricing
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
