import React from 'react';
import { motion } from 'framer-motion';

export default function OurPartners() {
  const allLogos = [
    { 
      src: '/cx-logos/redington-green.svg', 
      alt: 'Redington', 
      description: 'Global Financial Services | Investment Solutions',
      industry: 'Finance'
    },
    { 
      src: '/cx-logos/Orascom.webp', 
      alt: 'Orascom', 
      description: 'Leading Construction & Development Group',
      industry: 'Construction'
    },
    { 
      src: '/cx-logos/Hawana.png', 
      alt: 'Hawana', 
      description: 'Luxury Resort Development | Hospitality',
      industry: 'Tourism'
    },
    { 
      src: '/cx-logos/muriya.webp', 
      alt: 'Muriya', 
      description: 'Premium Tourism Development | Real Estate',
      industry: 'Real Estate'
    },
    { 
      src: '/cx-logos/jebel-safeh.jpg', 
      alt: 'Jebel Safeh', 
      description: 'Sustainable Mountain Tourism Development',
      industry: 'Tourism'
    },
    { 
      src: '/cx-logos/VOSKER_Logo.webp', 
      alt: 'Vosker', 
      description: 'Innovative Security Solutions Provider',
      industry: 'Technology'
    },
    { 
      src: '/cx-logos/big-black-lemon.webp', 
      alt: 'Lemon', 
      description: 'Creative Digital Solutions Agency',
      industry: 'Digital'
    },
    { 
      src: '/cx-logos/SpiroSpathislogo.webp', 
      alt: 'Spiro', 
      description: 'Premium Lifestyle & Fashion Brand',
      industry: 'Fashion'
    },
    { 
      src: '/cx-logos/spypoint.svg', 
      alt: 'Spypoint', 
      description: 'Advanced Trail Camera Technology',
      industry: 'Technology'
    },
    { 
      src: '/cx-logos/zhive.svg', 
      alt: 'Zhive249', 
      description: 'Innovative Customer Experience Solutions',
      industry: 'Technology'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
            Our Partners
          </h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional experiences
          </p>
        </motion.div>

        {/* Mask container */}
        <div className="relative py-12">
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {[...allLogos, ...allLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="shrink-0 group relative px-4"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20 
                    }
                  }}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
                    
                    <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-400/20 p-1.5 overflow-hidden relative">
                      <div className="w-full h-full rounded-xl flex flex-col bg-gradient-to-br from-blue-950/50 to-blue-900/50">
                        {/* Logo Container */}
                        <div className="h-44 p-8 flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110 brightness-0 invert opacity-70 group-hover:opacity-100"
                          />
                        </div>
                        
                        {/* Description */}
                        <div className="flex-1 p-6 text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="text-base font-medium bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text mb-2">{logo.alt}</p>
                          <p className="text-sm text-blue-200/80 line-clamp-2 mb-3">{logo.description}</p>
                          <span className="inline-block px-4 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/20">
                            {logo.industry}
                          </span>
                        </div>
                      </div>

                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-400/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-72 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-10" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Hide overflowing content */
        .overflow-hidden {
          mask-image: linear-gradient(to right, transparent, black 72px, black calc(100% - 72px), transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 72px, black calc(100% - 72px), transparent);
        }
      `}</style>
    </section>
  );
}
