import React from "react";
import { motion } from "framer-motion";
import styles from './clouds.module.scss'; // Import the CSS module

const BrownCloud: React.FC = () => {
  return (
    <div className={styles.container}> {/* Apply container style from the CSS module */}
      {/* Multiple Animated Brown Clouds for Rough Effect */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className={styles.cloud} // Apply cloud style from the CSS module
          initial={{ opacity: 0.7, x: 0, y: 0, scale: 1 }}
          animate={{
            opacity: [0.9, 0.7, 0.9],
            x: [0, 20 + index * 5, -20 - index * 5, 0],
            y: [0, -10 - index * 5, 20 + index * 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 50}%`,
          }}
        />
      ))}
    </div>
  );
};

export default BrownCloud;
