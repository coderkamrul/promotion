import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import Creators from './Creators'

const CardData = [
  {
    id: 1,
    text: 'Logo Concepts',
    image: '/Service-1.png',
    link: '#',
  },
  {
    id: 2,
    text: 'Logo Concepts',
    image: '/Service-1.png',
    link: '#',
  },
  {
    id: 3,
    text: 'Logo Concepts',
    image: '/Service-1.png',
    link: '#',
  },
  {
    id: 4,
    text: 'Logo Concepts',
    image: '/Service-1.png',
    link: '#',
  },
]

const PortfolioCard = () => {
  return (
    <div className='lg:absolute left-0 mt-12 w-full flex flex-col justify-center items-center'>
      <div className='flex gap-4 flex-wrap justify-center items-center'>
        {CardData.map((card) => (
          <Card
            className='max-w-[380px] w-full bg-secondary border-primary border shadow-2xl rounded-lg'
            key={card.id}
          >
            <CardContent className='p-4 space-y-4'>
              <Image
                src={card.image}
                alt={card.text}
                width={350}
                height={200}
                className='w-full'
              />
              <Link
                href={card.link}
                className='rounded-lg text-lg font-bold justify-center p-1 text-secondary bg-primary flex hover:bg-secondary hover:text-primary border border-primary transition-colors duration-300'
              >
                {card.text}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <Creators />
    </div>
  )
}

export default PortfolioCard
