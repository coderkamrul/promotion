'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AnimatedComponent = ({
  children,
  type = 'fade', // Default animation type
  duration = 1.5,
  distance = 20,
  delay = 0,
  blurAmount = '10px',
  ...rest
}) => {
  // Define variants for different animation types
  const variants = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideUp: {
      initial: { y: distance, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    blurSlideUp: {
      initial: { opacity: 0, filter: `blur(${blurAmount})`, y: distance },
      animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    },
    slideDown: {
      initial: { y: -distance, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    slideLeft: {
      initial: { x: distance, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    slideRight: {
      initial: { x: -distance, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    scale: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
    },
  }

  // Pick the selected variant
  const animation = variants[type] || variants.fade

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate} // Triggers animation when in view
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedComponent
