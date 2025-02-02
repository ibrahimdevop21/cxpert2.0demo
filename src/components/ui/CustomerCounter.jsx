import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CustomerCounter() {
  const [count, setCount] = useState(176000);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    // Function to generate random increment between 10 and 30
    const getRandomIncrement = () => Math.floor(Math.random() * 21) + 10;

    // Update counter every 15 seconds
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + getRandomIncrement());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Format the number with commas
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
        <motion.span
          key={count}
          className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {formattedCount}+
        </motion.span>
        <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-blue-200/60">
          Customers Served
        </div>
      </div>
    </motion.div>
  );
}
