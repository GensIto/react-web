import clsx from 'clsx'
import React from 'react'

const CONTAINER_SIZE = {
  full: 'px-0',
  sm: 'px-[4vw] md:px-[4vw]',
  md: 'px-[4vw] md:px-[6vw]',
  lg: 'px-[4vw] md:px-[8vw]'
}

const CONTAINER_ALIGN = {
  center: 'mx-auto',
  left: 'mr-0 mr-auto',
  right: 'mr-0 ml-auto'
}

const Container: React.FC<{
  size?: keyof typeof CONTAINER_SIZE
  align?: keyof typeof CONTAINER_ALIGN
  children?: React.ReactNode
  className?: string
}> = ({ size = 'full', align = 'center', children, className }) => {
  return (
    <div
      className={clsx(
        'container',
        CONTAINER_SIZE[size],
        CONTAINER_ALIGN[align],
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
