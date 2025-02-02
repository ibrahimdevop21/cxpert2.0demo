import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export const useParallax = ({ 
  offset = [0, 1], 
  outputRange, 
  springConfig = { mass: 1, stiffness: 100, damping: 30 },
  shouldSpring = true
}) => {
  const elementRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: offset
  });

  const motionValue = useTransform(scrollYProgress, [0, 1], outputRange);
  
  const springValue = shouldSpring 
    ? useSpring(motionValue, springConfig)
    : motionValue;

  return { ref: elementRef, value: springValue };
};

// Preset configurations for common parallax effects
export const parallaxPresets = {
  fadeUp: {
    offset: ["start end", "end start"],
    outputRange: [50, -50],
    springConfig: { mass: 1, stiffness: 70, damping: 30 }
  },
  fadeIn: {
    offset: ["start end", "start start"],
    outputRange: [0, 1],
    springConfig: { mass: 1, stiffness: 50, damping: 20 }
  },
  scale: {
    offset: ["start end", "end start"],
    outputRange: [0.8, 1.2],
    springConfig: { mass: 1, stiffness: 50, damping: 30 }
  },
  rotate: {
    offset: ["start end", "end start"],
    outputRange: [0, 360],
    springConfig: { mass: 1, stiffness: 60, damping: 30 }
  }
};
