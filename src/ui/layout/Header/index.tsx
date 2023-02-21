import React, { useState } from 'react'

import HeaderLogo from './components/HeaderLogo'
import DesktopMenu from './components/DesktopMenu'
import MobileMenuToggle from './components/MobileMenuToggle'
import MobileMenu from './components/MobileMenu'

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <HeaderLogo />
          <DesktopMenu />
          <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <MobileMenu isOpen={isOpen} />
      </div>
    </nav>
  )
}
