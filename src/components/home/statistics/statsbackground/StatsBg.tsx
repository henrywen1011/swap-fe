import { motion } from 'framer-motion';
import React from 'react';
import styles from './statsbackground.module.scss'; // Import the CSS module

interface StarProps {
  x: number;
  y: number;
}

const Star: React.FC<StarProps> = ({ x, y }) => {
  return (
    <motion.div
      initial={{ x: `-${Math.random() * 100 + 100}vw`, opacity: 0 }} // Start off-screen to the left
      animate={{
        x: '100vw', // Move off-screen to the right
        opacity: 1, // Fade in
      }}
      transition={{
        duration: Math.random() * 20 + 20, // Randomized duration for each star
        ease: 'linear',
        repeat: Infinity, // Infinite loop
        repeatType: 'loop', // Continuous movement
      }}
      className={styles.starContainer} // Applied from the CSS module
      style={{ top: `${y}vh`, zIndex: 50 }} // Ensure stars are visible and stacked properly
    >
      {/* Horizontal line with gradient effect for the shooting star tail */}
      <div className={styles.starTail}></div>

      {/* Glowing star */}
      <motion.div
        className={`${styles.star} ${styles.starGlow}`} // Apply both star and glow styles from the CSS module
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [1, 1.5, 1], // Pulsing effect
          opacity: [1, 0.8, 1], // Fade in and out
        }}
        transition={{
          duration: 1.5, // Duration of pulse
          ease: 'easeInOut', // Smooth transitions
          repeat: Infinity, // Infinite loop
        }}
      />
    </motion.div>
  );
};

const StarAnimation: React.FC = () => {
  // Generate random stars with random vertical positions
  const stars = Array.from({ length: 8 }, () => ({
    y: Math.random() * 100, // Random y-position between 0 and 100vh
    x: Math.random() * 100, // Random x-position
  }));

  return (
    <div className={styles.animationWrapper}>
      {stars.map((star, index) => (
        <Star key={index} x={star.x} y={star.y} />
      ))}
    </div>
  );
};

export default StarAnimation;
