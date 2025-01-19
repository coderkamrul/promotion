import React from 'react'
import SectionTag from '../ui/SectionTag'
import AnimatedComponent from '../ui/AnimatedComponent'
import PortfolioCard from '../ui/PortfolioCard'

const Portfolio = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-0 mt-[500px]'>
      <SectionTag
        width={'4/5'}
        px={8}
        position={'center'}
        text={'Design Portfolio'}
      />
      <AnimatedComponent
        type='blurSlideUp'
        duration={1}
        distance={30}
        blurAmount='15px'
      >
        <h1 className='title text-3xl text-center my-6 md:text-6xl text-white font-semibold  mx-auto !leading-tight'>
          The <strong className='text-primary'>Work</strong> We Did For Our
          Clients
        </h1>
      </AnimatedComponent>
      <p className='text-center text-white text-xl md:text-2xl'>
        Primordial has already worked with the industries most recognized names.
        Our work is widespread on LinkedIn
      </p>
      <div>
        <PortfolioCard />
      </div>
    </div>
  )
}

export default Portfolio
