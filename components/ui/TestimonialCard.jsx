import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Quote } from 'lucide-react'
const TestimonialCard = ({ testimonials }) => {
  return (
    <div className='flex '>
      <div className='flex gap-4 tools-wrap'>
        {testimonials.map((testimonials) => (
          <div key={testimonials.name} className='w-[400px] flex-shrink-0'>
            <Card className='bg-emerald-900/50 border-emerald-800 hover:bg-emerald-800/50 transition-colors'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='relative h-12 w-12 flex-shrink-0'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600' />
                    <Image
                      src={testimonials.image}
                      alt={testimonials.name}
                      width={64}
                      height={64}
                      className='rounded-full object-cover z-10 relative'
                    />
                  </div>
                  <Quote className='h-6 w-6 text-emerald-400' />
                </div>
                <p className='mt-4 text-sm leading-relaxed text-gray-200 line-clamp-4'>
                  {testimonials.text}
                </p>
                <p className='mt-4 text-sm font-medium text-emerald-400'>
                  {testimonials.name}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className='flex gap-4 tools-wrap'>
        {testimonials.map((testimonials) => (
          <div key={testimonials.name} className='w-[400px] flex-shrink-0'>
            <Card className='bg-emerald-900/50 border-emerald-800 hover:bg-emerald-800/50 transition-colors'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='relative h-12 w-12 flex-shrink-0'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600' />
                    <Image
                      src={testimonials.image}
                      alt={testimonials.name}
                      width={64}
                      height={64}
                      className='rounded-full object-cover z-10 relative'
                    />
                  </div>
                  <Quote className='h-6 w-6 text-emerald-400' />
                </div>
                <p className='mt-4 text-sm leading-relaxed text-gray-200 line-clamp-4'>
                  {testimonials.text}
                </p>
                <p className='mt-4 text-sm font-medium text-emerald-400'>
                  {testimonials.name}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard
