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
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20 
                    }
                  }}
                >
                  <div className="relative">
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-400/30 via-yellow-400/30 to-blue-400/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
                    
                    <div className="w-80 rounded-xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-sm border border-white/[0.05] overflow-hidden relative">
                      <div className="w-full flex flex-col">
                        {/* Logo Container */}
                        <div className="h-32 p-6 flex items-center justify-center bg-gradient-to-b from-blue-950/20 to-transparent">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-[180px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105 brightness-0 invert opacity-60 group-hover:opacity-100"
                          />
                        </div>
                        
                        {/* Description */}
                        <div className="p-6 pt-4">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-base font-medium text-blue-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">
                              {logo.alt}
                            </p>
                            <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-medium text-yellow-400/80 bg-yellow-400/[0.03] rounded-full border border-yellow-400/[0.06]">
                              {logo.industry}
                            </span>
                          </div>
                          <p className="text-sm text-blue-300/50 group-hover:text-blue-200/70 line-clamp-2 transition-colors duration-300">
                            {logo.description}
                          </p>
                        </div>
                      </div>

                      {/* Subtle highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
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
