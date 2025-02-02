import React, { useState, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import { useParallax, parallaxPresets } from '../hooks/useParallax';
import Button from './ui/Button';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Parallax effects for different elements
  const titleParallax = useParallax({
    offset: ['start start', 'end start'],
    outputRange: [0, -100],
    springConfig: { mass: 1, stiffness: 50, damping: 30 },
  });

  const descriptionParallax = useParallax({
    offset: ['start start', 'end start'],
    outputRange: [0, -50],
    springConfig: { mass: 1, stiffness: 40, damping: 30 },
  });

  const statsParallax = useParallax({
    ...parallaxPresets.fadeUp,
    outputRange: [30, -30],
  });

  const videoParallax = useParallax({
    offset: ['start start', 'end start'],
    outputRange: [0, 100],
    springConfig: { mass: 1, stiffness: 30, damping: 30 },
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const springScale = useSpring(scale, {
    mass: 0.5,
    stiffness: 100,
    damping: 10,
  });

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const stats = [
    {
      number: '13+',
      label: 'Years Experience',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    {
      number: '500+',
      label: 'Team Members',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
    },
    {
      number: '24/7',
      label: 'Support',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
      ),
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale: springScale }}
      className='relative min-h-screen overflow-hidden'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col min-h-screen'>
          {/* Text Content */}
          <motion.div
            className='flex-1 px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20 text-center'
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div
              ref={titleParallax.ref}
              style={{ y: titleParallax.value }}
              variants={textVariants}
              className='max-w-4xl mx-auto space-y-8'
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                <motion.span
                  className='text-blue-100 inline-block mb-2'
                  variants={itemVariants}
                >
                  Transform Your
                </motion.span>
                <br />
                <motion.span
                  className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 inline-block'
                  variants={itemVariants}
                >
                  Customer Experience
                </motion.span>
              </h1>
              <motion.p
                ref={descriptionParallax.ref}
                style={{ y: descriptionParallax.value }}
                className='text-base md:text-lg text-blue-200/80 max-w-2xl mx-auto'
                variants={itemVariants}
              >
                Partner with CXperts to elevate your customer service
                operations. Our innovative solutions and expert team will help
                you deliver exceptional experiences that drive growth and
                customer loyalty.
              </motion.p>

              <motion.div
                className='flex flex-wrap justify-center gap-4 pt-4'
                variants={itemVariants}
              >
                <Button
                  href='#contact'
                  className='bg-gradient-to-r from-blue-600 to-yellow-400 hover:from-blue-500 hover:to-yellow-300 text-white'
                >
                  Get Started
                </Button>
                <Button
                  href='#services'
                  variant='outline'
                  className='border-blue-400/20 text-blue-100 hover:bg-blue-400/10'
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            ref={videoParallax.ref}
            style={{ y: videoParallax.value }}
            className='w-full h-[40vh] md:h-[50vh] lg:h-[60vh] relative mb-8'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className='absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm'
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className='w-full h-full object-cover mix-blend-luminosity opacity-90'
                preload='auto'
              >
                <source src='/videos/hero.mp4' type='video/mp4' />
              </video>

              {/* Video Overlay */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-80'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1 }}
              />

              {/* Mute Toggle Button */}
              <motion.button
                onClick={handleMuteToggle}
                className='absolute bottom-4 right-4 p-3 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 transition-colors duration-200'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
                      clipRule='evenodd'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
                    />
                  </svg>
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            ref={statsParallax.ref}
            style={{ y: statsParallax.value }}
            className='relative px-4 sm:px-6 lg:px-8 py-12 '
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Stats Grid */}
            <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto'>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className='group relative'
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card Content */}
                  <div className='relative h-full p-6 rounded-2xl bg-blue-900/40 border border-blue-400/10 transition-all duration-300 group-hover:bg-blue-900/60 group-hover:border-blue-400/20'>
                    {/* Icon */}
                    <div className='mb-4 text-blue-400 group-hover:text-yellow-400 transition-colors duration-300'>
                      {stat.icon}
                    </div>

                    {/* Number */}
                    <motion.div
                      className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text mb-2'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>

                    {/* Label */}
                    <div className='text-sm md:text-base text-blue-200/80 font-medium group-hover:text-blue-200 transition-colors'>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
