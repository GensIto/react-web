import React from 'react'
import { Link } from 'react-router-dom'

import { WebRoutes } from '@/App'
import './style.css'

const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'HeaderMobileMenuOpen' : 'HeaderMobileMenuClose'
      } fixed w-full bg-gray-800 sm:hidden`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link to={WebRoutes.home}>
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MobileMenu
