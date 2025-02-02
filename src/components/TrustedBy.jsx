import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function OurPartners() {
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const allLogos = [
    {
      src: '/cx-logos/redington-green.svg',
      alt: 'Redington',
      description: 'Global Financial Services | Investment Solutions',
      industry: 'Finance',
    },
    {
      src: '/cx-logos/Orascom.webp',
      alt: 'Orascom',
      description: 'Leading Construction & Development Group',
      industry: 'Construction',
    },
    {
      src: '/cx-logos/Hawana.png',
      alt: 'Hawana',
      description: 'Luxury Resort Development | Hospitality',
      industry: 'Tourism',
    },
    {
      src: '/cx-logos/muriya.webp',
      alt: 'Muriya',
      description: 'Premium Tourism Development | Real Estate',
      industry: 'Real Estate',
    },
    {
      src: '/cx-logos/jebel-safeh.jpg',
      alt: 'Jebel Safeh',
      description: 'Sustainable Mountain Tourism Development',
      industry: 'Tourism',
    },
    {
      src: '/cx-logos/VOSKER_Logo.webp',
      alt: 'Vosker',
      description: 'Innovative Security Solutions Provider',
      industry: 'Technology',
    },
    {
      src: '/cx-logos/big-black-lemon.webp',
      alt: 'Lemon',
      description: 'Creative Digital Solutions Agency',
      industry: 'Digital',
    },
    {
      src: '/cx-logos/SpiroSpathislogo.webp',
      alt: 'Spiro',
      description: 'Premium Lifestyle & Fashion Brand',
      industry: 'Fashion',
    },
    {
      src: '/cx-logos/spypoint.svg',
      alt: 'Spypoint',
      description: 'Advanced Trail Camera Technology',
      industry: 'Technology',
    },
    {
      src: '/cx-logos/zhive.svg',
      alt: 'Zhive249',
      description: 'Innovative Customer Experience Solutions',
      industry: 'Technology',
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...allLogos, ...allLogos];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className='py-20 relative overflow-hidden' id='partners'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 ' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.05),transparent_50%)]' />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-sm font-semibold text-blue-400/80 tracking-wider uppercase mb-4 block'>
            Trusted Worldwide
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text'>
            Partnering with Industry Leaders
          </h2>
          <p className='text-base md:text-lg text-blue-200/60 max-w-2xl mx-auto'>
            We collaborate with forward-thinking companies to transform their
            customer experience
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className='relative'
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='overflow-hidden'>
            <motion.div
              className={`flex gap-6 py-8 ${
                !isHovered ? 'animate-scroll' : ''
              }`}
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                duration: 40,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className='shrink-0 relative group'
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <div className='w-[280px] h-[200px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-400/10 transition-all duration-300 group-hover:border-blue-400/30'>
                    <div className='h-full p-6 flex flex-col items-center justify-between'>
                      {/* Logo Container */}
                      <div className='w-full h-20 flex items-center justify-center'>
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className='max-w-[140px] max-h-[60px] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105'
                        />
                      </div>

                      {/* Info */}
                      <div className='text-center mt-4'>
                        <h3 className='text-blue-100 font-medium mb-2 transition-all duration-300 group-hover:text-blue-400'>
                          {logo.alt}
                        </h3>
                        <span className='inline-block px-3 py-1 text-xs uppercase tracking-wider font-medium text-yellow-400/90 bg-yellow-400/10 rounded-full transition-all duration-300 group-hover:bg-yellow-400/20'>
                          {logo.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Masks */}
          <div className='pointer-events-none absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent' />
          <div className='pointer-events-none absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-blue-950 via-blue-950/80 to-transparent' />
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}
