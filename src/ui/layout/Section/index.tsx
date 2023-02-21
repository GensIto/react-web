import clsx from 'clsx'
import React from 'react'

const SECTION_SIZE = {
  none: 'py-0',
  xs: 'py-4 md:py-8',
  sm: 'py-6 md:py-12',
  md: 'py-8 md:py-16',
  lg: 'py-10 md:py-20',
  xl: 'py-12 md:py-24'
}

const Section: React.FC<{
  size?: keyof typeof SECTION_SIZE
  children?: React.ReactNode
  className?: string
}> = ({ size = 'md', children, className }) => {
  return (
    <section className={clsx(SECTION_SIZE[size], className)}>
      {children}
    </section>
  )
}

export default Section
