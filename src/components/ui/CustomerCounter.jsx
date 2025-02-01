import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CustomerCounter() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  
  // Calculate base total (4 years * 12 months * 2500 customers per month)
  const baseTotal = 4 * 12 * 2500;
  
  // Calculate customers per second (2500 per month = ~0.001 per second)
  const customersPerSecond = 2500 / (30 * 24 * 60 * 60);
  
  useEffect(() => {
    if (isInView) {
      // Initial count animation
      const duration = 2000; // 2 seconds animation
      const steps = 50;
      const increment = Math.ceil(baseTotal / steps);
      const stepDuration = duration / steps;
      
      let current = 0;
      const initialTimer = setInterval(() => {
        current += increment;
        if (current >= baseTotal) {
          setCount(baseTotal);
          clearInterval(initialTimer);
          
          // Start the live increment
          const liveTimer = setInterval(() => {
            setCount(prevCount => {
              // Increment by a small random amount every 100ms
              const increment = customersPerSecond * 100 * (0.8 + Math.random() * 0.4);
              return Math.floor(prevCount + increment);
            });
          }, 100);
          
          return () => clearInterval(liveTimer);
        } else {
          setCount(current);
        }
      }, stepDuration);
      
      return () => clearInterval(initialTimer);
    }
  }, [isInView]);

  // Format the number with commas and show the increment animation
  const formattedCount = count.toLocaleString();

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/10"
    >
      <div className="flex flex-col items-center">
        <div className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
          {formattedCount}+
        </div>
        <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-blue-200/60">
          Customers Served
        </div>
      </div>
    </motion.div>
  );
}
