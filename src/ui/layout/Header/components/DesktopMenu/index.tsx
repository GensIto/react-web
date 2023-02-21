import React from 'react'
import { Link } from 'react-router-dom'

import { WebRoutes } from '@/App'

const DesktopMenu: React.FC = () => {
  return (
    <div className="hidden sm:block">
      <div className="ml-4 flex items-center space-x-4">
        <Link to={WebRoutes.home}>
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
        </Link>
      </div>
    </div>
  )
}

export default DesktopMenu
