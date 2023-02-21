import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <ul className="ml-4 flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2023 Example Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
