import React from 'react'
import SectionTag from '../ui/SectionTag'
import AnimatedComponent from '../ui/AnimatedComponent'
import { MdPermPhoneMsg } from 'react-icons/md'

export const ContactUs = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 flex flex-col justify-center items-center pb-20 '>
      <SectionTag
        width={'4/5'}
        px={8}
        position={'center'}
        text={'Contact Us'}
      />
      <AnimatedComponent
        type='blurSlideUp'
        duration={1}
        distance={30}
        blurAmount='15px'
      >
        <h1 className='title text-3xl text-center my-6 md:text-6xl text-white font-semibold  mx-auto !leading-tight'>
          Want To Get In <br />
          <strong className='text-primary'>Touch With Us?</strong>
        </h1>
      </AnimatedComponent>
      <p className='text-center text-white text-xl md:text-2xl w-full md:max-w-xl'>
        Book a free 30 mins consultation call and get to fill our personalized
        branding questionnaire!
      </p>
      <button className='flex my-12 shadow-2xl gap-2 border border-primary bg-secondary hover:bg-primary text-white p-3 transition-all duration-300 justify-center items-center rounded-xl'>
        <span className='bg-primary py-1 px-2 rounded-lg shadow-md border-[1px] border-gray-50/50'>
          <MdPermPhoneMsg
            fill='white'
            size={30}
            className='scale-x-[-1] rotate-90 '
          />
        </span>
        <span className='text-[20px] font-bold rethink mt-1'>
          Book a 1:1 Design Consultation Call
        </span>
      </button>
    </div>
  )
}
