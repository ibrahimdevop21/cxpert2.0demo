import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0'>
        <video
          ref={videoRef}
          className='w-full h-full object-cover opacity-50'
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={isMobile ? '/herocx-mobile-portrait.mp4' : '/herocx-optimized-audio.mp4'}
            type='video/mp4'
          />
        </video>

        {/* Mute Button */}
        <button
          onClick={handleMuteToggle}
          className='absolute bottom-6 right-6 z-50 p-3 bg-black/80 rounded-full hover:bg-black/90 transition-colors'
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <svg className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2' />
            </svg>
          ) : (
            <svg className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' />
            </svg>
          )}
        </button>
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent'></div>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
            Welcome to CXperts
          </h1>
          <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed'>
            Elevating Customer Experience Through Innovation and Excellence
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#services'
              className='px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25'
            >
              Explore Our Services
            </a>
            <a
              href='#contact'
              className='px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 border border-white/30'
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
