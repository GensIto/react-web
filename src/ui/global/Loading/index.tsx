import React from 'react'
import clsx from 'clsx'

import useLoadingScreen from '@/hooks/useLoadingScreen'

import './style.css'

const Loading: React.FC = () => {
  const { loading, progress } = useLoadingScreen()

  return (
    <div className={clsx('z-50', `Loading ${loading ? '' : 'isHidden'}`)}>
      <p className="Loading__logo">LOGO</p>
      <div
        className="Loading__progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default Loading
