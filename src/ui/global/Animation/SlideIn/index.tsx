import { useInView } from 'react-intersection-observer'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const SlideIn: React.FC<Props> = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const style = {
    transition: 'all 1s ease-out',
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-3rem)'
  }

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  )
}
