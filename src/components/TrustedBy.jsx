import React from 'react';

export default function TrustedBy() {
  const logos = [
    { src: '/cx-logos/Redington_Logo.jpg', alt: 'Redington' },
    { src: '/cx-logos/Orascom.png', alt: 'Orascom' },
    { src: '/cx-logos/Hawana.png', alt: 'Hawana' },
    { src: '/cx-logos/muriya.jpg', alt: 'Muriya' },
    { src: '/cx-logos/jebel-safeh.jpg', alt: 'Jebel Safeh' },
    { src: '/cx-logos/VOSKER_Logo.png', alt: 'Vosker' },
    { src: '/cx-logos/big-black-lemon.png', alt: 'Lemon' },
    { src: '/cx-logos/spiro.png', alt: 'Spiro' },
    { src: '/cx-logos/spypoint.png', alt: 'Spypoint' },
    // Duplicate logos for seamless loop
    { src: '/cx-logos/Redington_Logo.jpg', alt: 'Redington' },
    { src: '/cx-logos/Orascom.png', alt: 'Orascom' },
    { src: '/cx-logos/Hawana.png', alt: 'Hawana' },
    { src: '/cx-logos/muriya.jpg', alt: 'Muriya' },
    { src: '/cx-logos/jebel-safeh.jpg', alt: 'Jebel Safeh' },
    { src: '/cx-logos/VOSKER_Logo.png', alt: 'Vosker' },
    { src: '/cx-logos/big-black-lemon.png', alt: 'Lemon' },
    { src: '/cx-logos/spiro.png', alt: 'Spiro' },
    { src: '/cx-logos/spypoint.png', alt: 'Spypoint' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#0c0c1d] to-[#1a1a2f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#E114E5] to-[#9946FF]">
          Trusted By Industry Leaders
        </h2>
        
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0c0c1d] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0c0c1d] to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-scroll">
              <div className="flex items-center gap-16 py-8">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="w-40 h-24 flex items-center justify-center bg-white/5 rounded-lg p-4 hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
