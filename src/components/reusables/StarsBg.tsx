import React from 'react';
import { motion } from 'framer-motion';

const BlinkingStars: React.FC = () => {
  const stars = Array.from({ length: 100 }).map((_, index) => ({
    left: Math.random() * 100, // Random horizontal position
    top: Math.random() * 100,   // Random vertical position
    delay: Math.random() * 2,    // Random delay for blinking effect
  }));

  return (
    <div className="fixed top-0 left-0 bg-black w-screen h-screen overflow-hidden z-[-1]">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: `${star.left}vw`,
            top: `${star.top}vh`,
            width: '2px',
            height: '2px',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BlinkingStars;
