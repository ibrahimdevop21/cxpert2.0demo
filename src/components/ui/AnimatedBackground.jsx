import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground({
  colors = ['#4F46E5', '#0ea5e9', '#6366f1', '#8b5cf6', '#a855f7'],
  speed = 15,
}) {
  console.log('AnimatedBackground rendering'); // Debug log

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: '#030712',
        overflow: 'hidden',
      }}
    >
      {/* Base gradient layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, rgba(14, 165, 233, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Animated overlay layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `
            radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)
          `,
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
}
