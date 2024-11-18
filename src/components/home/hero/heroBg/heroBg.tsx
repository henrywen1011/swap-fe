import { motion } from 'framer-motion';
import React from 'react';
import styles from './starAnimation.module.scss';

interface StarProps {
  x: number;
  y: number;
}

const Star: React.FC<StarProps> = ({ x, y }) => {
  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: y, opacity: 1 }}
      transition={{
        duration: Math.random() * 10 + 10, // Randomized duration for each star
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className={`absolute ${styles.star}`}
      style={{ left: `${x}vw` }}
    >
      {/* Container for the star and the line */}
      <div className={styles['star-container']}>
        {/* Glowing star with shine effect */}
        <motion.div
          className={styles.star}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        {/* Line with reversed gradient (intense at start, dim at end) */}
        <div className={styles['star-line']}></div>
      </div>
    </motion.div>
  );
};

const StarAnimation: React.FC = () => {
  const stars = Array.from({ length: 15 }, () => ({
    x: Math.random() * 100,
    y: -900,
  }));

  return (
    <div className={styles['animation-container']}>
      {stars.map((star, index) => (
        <Star key={index} x={star.x} y={star.y} />
      ))}
    </div>
  );
};

export default StarAnimation;
