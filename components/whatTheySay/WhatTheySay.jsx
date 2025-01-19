import React from 'react'
import AnimatedComponent from '../ui/AnimatedComponent'
import SectionTag from '../ui/SectionTag'
import Testimonial from '../Testimonial/Testimonial'

const WhatTheySay = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-0'>
      <SectionTag
        width={'4/5'}
        px={8}
        position={'center'}
        text={'What They Say'}
      />

      <AnimatedComponent
        type='blurSlideUp'
        duration={1}
        distance={30}
        blurAmount='15px'
      >
        <h1 className='title text-3xl text-center my-6 md:text-6xl text-white font-semibold md:max-w-[60%] mx-auto !leading-tight'>
          What Do The <strong className='text-primary'>Best Creators</strong>{' '}
          Say About Us
        </h1>
      </AnimatedComponent>
      <p className='text-center text-white text-xl md:text-2xl'>
        Our services have been proven effective and are endorsed by top industry
        leaders on LinkedIn. Primordial is the go-to choice for the best
        creators. Hear their success stories directly!
      </p>
      <Testimonial />
    </div>
  )
}

export default WhatTheySay
