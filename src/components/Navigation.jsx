import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomerCounter from './ui/CustomerCounter';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.header
      initial='hidden'
      animate='visible'
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-blue-950/70 backdrop-blur-lg shadow-lg shadow-blue-900/20 rounded-xl border border-blue-400/10'
            : ''
        }`}
      >
        <div className='relative flex items-center justify-between h-14'>
          {/* Logo and Counter Section */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <motion.a
              href='/'
              className='flex items-center'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src='/cxpert.webp' alt='CXperts Logo' className='h-8 w-auto' />
            </motion.a>

            {/* Customer Counter - Show on all screens */}
            <CustomerCounter />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-6 lg:space-x-8'>
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={menuItemVariants}
                custom={i}
                className='text-sm font-medium text-blue-200/80 hover:text-yellow-400 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='flex md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-blue-200/80 hover:text-yellow-400 focus:outline-none'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden'
            >
              <div className='pt-2 pb-3 space-y-1'>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 text-base font-medium text-blue-200/80 hover:text-yellow-400 transition-colors'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
