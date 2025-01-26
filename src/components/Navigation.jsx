import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <a href='/' className='flex items-center'>
                <img
                  src='/cxpert.svg'
                  alt='CXperts Logo'
                  className='h-16 w-auto'
                />
              </a>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <a
                href='/'
                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Home
              </a>
              <a
                href='/services'
                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Services
              </a>
              <a
                href='/about'
                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                About Us
              </a>
              <a
                href='/blog'
                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Blog
              </a>
              <a
                href='/careers'
                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Careers
              </a>
              <a
                href='/contact'
                className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700'
              >
                Contact
              </a>
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none'
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-lg'>
            <a
              href='/'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Home
            </a>
            <a
              href='/services'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Services
            </a>
            <a
              href='/about'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              About Us
            </a>
            <a
              href='/blog'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Blog
            </a>
            <a
              href='/careers'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Careers
            </a>
            <a
              href='/contact'
              className='bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
