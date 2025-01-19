import React from 'react'
import Image from 'next/image'

const CardData = [
  {
    id: 1,
    Name: 'Ayesha Ameer',
    image: '/Ellipse-2.png',
    followers: '51,000+ followers',
  },
  {
    id: 2,
    Name: 'Fatima Khan',
    image: '/Ellipse.png',
    followers: '56,000+ Followers',
  },
  {
    id: 3,
    Name: 'Charlie Hills',
    image: '/Ellipse-3.png',
    followers: '53,000+ Followers',
  },
  {
    id: 4,
    Name: 'Saijal Taparia',
    image: '/Ellipse-4.png',
    followers: '25,000+ Followers',
  },
]

const Creators = () => {
  return (
    <div>
      <div className='lg:absolute left-0 mt-20 w-full flex justify-center items-center bg-[#ffffff12] '>
        <div className='flex gap-6 p-4 flex-wrap w-full justify-center items-center'>
          {CardData.map((card) => (
            <div
              key={card.id}
              className={`flex flex-grow max-w-[380px]  md:pr-4 items-center gap-4 ${
                card.id === CardData.length
                  ? ''
                  : 'border-b-[3px] pb-4 md:pb-0 md:border-b-0 md:border-r-[3px] border-primary'
              }`}
            >
              <Image
                src={card.image}
                alt={card.Name}
                width={100}
                height={95}
                className='w-'
              />
              <div className=''>
                <h3 className='text-xl text-primary font-bold rethink'>
                  {card.Name}
                </h3>
                <p className='text-white text-base rethink'>{card.followers}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Creators
