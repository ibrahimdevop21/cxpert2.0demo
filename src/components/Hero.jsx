import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const springScale = useSpring(scale, { mass: 0.5, stiffness: 100, damping: 10 });

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const stats = [
    { number: '13+', label: 'Years Experience' },
    { number: '500+', label: 'Team Members' },
    { number: '24/7', label: 'Support' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
            className='flex-1 px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center'
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={textVariants} className="max-w-4xl mx-auto">
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                <motion.span 
                  className='text-blue-100 inline-block'
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
                className='text-base md:text-lg text-blue-200/80 mb-8 max-w-2xl mx-auto'
                variants={itemVariants}
              >
                Partner with CXperts to elevate your customer service operations. Our innovative solutions and expert team will help you deliver exceptional experiences that drive growth and customer loyalty.
              </motion.p>
              
              <motion.div 
                className='flex flex-wrap justify-center gap-4'
                variants={itemVariants}
              >
                <Button 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-600 to-yellow-400 hover:from-blue-500 hover:to-yellow-300 text-white"
                >
                  Get Started
                </Button>
                <Button 
                  href="#services" 
                  variant="outline" 
                  className="border-blue-400/20 text-blue-100 hover:bg-blue-400/10"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-900/10 to-blue-800/10 backdrop-blur-sm border-t border-blue-400/10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/50 to-yellow-400/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
                <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/10 text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-blue-200/80 font-medium">
                    {stat.label}
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-400/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Section */}
          <motion.div
            className='w-full h-[50vh] md:h-[60vh] relative'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className='absolute inset-0 rounded-t-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm'
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
        </div>
      </div>
    </motion.section>
  );
}
