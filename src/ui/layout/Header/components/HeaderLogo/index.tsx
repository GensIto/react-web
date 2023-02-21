import React from 'react'
import { Link } from 'react-router-dom'

import { WebRoutes } from '@/App'

const HeaderLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Link to={WebRoutes.home}>
          <a className="text-white font-bold">My Logo</a>
        </Link>
      </div>
    </div>
  )
}

export default HeaderLogo
