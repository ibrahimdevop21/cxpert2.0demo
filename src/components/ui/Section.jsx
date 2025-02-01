import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ 
  children, 
  className = '',
  id,
  ...props 
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`py-20 px-4 md:px-8 relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Glass gradient background */}
      <div className="absolute inset-0 bg-glass-gradient"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-glass-shine animate-shimmer"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}
