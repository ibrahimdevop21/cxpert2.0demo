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
    { src: '/cx-logos/spypoint.png', alt: 'Spypoint' }
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Our Partner
          </h2>
          <p className="text-lg text-gray-300 mt-2">
            Partnering with visionary organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative h-32 flex items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-16 object-contain grayscale-[70%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}