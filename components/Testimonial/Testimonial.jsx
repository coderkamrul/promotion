import React from 'react'
import TestimonialCard from '../ui/TestimonialCard'
import TestimonialCardR from '../ui/TestimonialCardR'

const testimonials = [
  {
    name: 'Daniel Rosenbaum',
    image: '/Group-3.png',
    text: "I can say he's talented, genuine, and puts his heart into everything he does. Obeidullah isn't just a great designer, he's a great person and I'm grateful to have him in my circle.",
  },
  {
    name: 'Ayesha Ameer',
    image: '/Group-3.png',
    text: "His work on LinkedIn caught my attention, and I'm so glad I made the decision to get help from him. If you're looking for someone to elevate your LinkedIn profile or assist with design projects, I highly recommend him. Talents like his are rare, so don't miss out!",
  },
  {
    name: 'Charlie Hills',
    image: '/Group-3.png',
    text: "I saw how amazing he was at Banners so I used him for a few client edits and ultimately this has expanded way beyond that. I'm working very closely with him, speaking with him most days. He's a great person. He's super hardworking.",
  },
  {
    name: 'Fatima Khan',
    image: '/Group-3.png',
    text: "I cannot recommend Obeidullah enough. He is a stellar design (10/10 skills) and more importantly his work ethic is what impresses me the most. I've worked with many designers in the past, and let me tell you - Obeidullah's a champ!",
  },
  {
    name: 'Long Nguyen',
    image: '/Group-3.png',
    text: 'He is a chill dude. We had a kick off meeting and I told him about my plans. He helped out some examples. With a bit bit of back and forth communication I am now very happy about my branding.',
  },
  {
    name: 'Marlyn J Hill',
    image: '/Group-3.png',
    text: "He was an absolute professional throughout the process. Easy to work with, positive, & funny, he took the time to understand my business & marketing plans to design a bespoke branding template. I've since had numerous inbound leads",
  },
]

const Testimonial = () => {
  return (
    <div className='absolute left-0 w-full space-y-4 mt-12'>
      <div className='w-full overflow-hidden  left-0 allwrap'>
        <TestimonialCard testimonials={testimonials} />
      </div>
      <div className='w-full overflow-hidden  left-0 allwrap2'>
        <TestimonialCardR testimonials={testimonials} />
      </div>
    </div>
  )
}

export default Testimonial
