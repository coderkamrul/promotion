import React from 'react'
import SectionTag from '../ui/SectionTag'
import AnimatedComponent from '../ui/AnimatedComponent'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const CardData = [
  {
    id: 1,
    text: 'Website Designing',
    link: '#',
  },
  {
    id: 2,
    text: 'Logo Designing',
    link: '#',
  },
  {
    id: 3,
    text: 'Thumbnail design',
    link: '#',
  },
  {
    id: 4,
    text: 'Li Profile Rebrand',
    link: '#',
  },
  {
    id: 5,
    text: 'Carousel Designs',
    link: '#',
  },
  {
    id: 6,
    text: 'Cheatsheets',
    link: '#',
  },
]

const Toolkit = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-0 lg:mt-[800px] xl:mt-[500px]'>
      <SectionTag
        width={'4/5'}
        px={8}
        position={'center'}
        text={'Primordial Toolkit'}
      />
      <AnimatedComponent
        type='blurSlideUp'
        duration={1}
        distance={30}
        blurAmount='15px'
      >
        <h1 className='title text-3xl text-center my-6 md:text-6xl text-white font-semibold  mx-auto !leading-tight'>
          Experience The Creative Origin Of Designs At The{' '}
          <strong className='text-primary'>Most Affordable Rates</strong>
        </h1>
      </AnimatedComponent>
      <div className='grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-12 '>
        {CardData.map((card) => (
          <Card
            className='bg-secondary border-primary border shadow-2xl rounded-lg'
            key={card.id}
          >
            <CardContent className='p-4 space-y-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/Vector.png'
                  alt={card.text}
                  width={1000}
                  height={1000}
                  className='w-6'
                />
                <h2 className='rethink text-2xl font-bold text-white'>
                  {card.text}
                </h2>
              </div>
              <Link
                href={card.link}
                className='rounded-lg text-lg font-bold justify-center p-1 text-secondary bg-primary flex hover:bg-secondary hover:text-primary border border-primary transition-colors duration-300'
              >
                View full Pricing
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className='text-center text-white text-xl  md:text-2xl max-w-3xl mx-auto'>
        Take advantage of the Primordial Toolkit and stand out immediately. Use
        our world-class graphic designers to put your brand out there!
      </p>
    </div>
  )
}

export default Toolkit
