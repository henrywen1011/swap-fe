import { motion } from "framer-motion";
import styles from './bubbles.module.scss'; // Import the CSS module

const BubbleComponent = () => {
  return (
    <motion.div
      className={styles.bubble} // Apply bubble style from CSS module
      initial={{ y: 300, rotate: 0, scale: 1 }}
      animate={{
        y: [-300, -500, -300], // Move the bubble upwards in a floating pattern
        rotate: [0, 360], // Full rotation to simulate the bubble spinning
        x: [0, 10, -10, 0], // Drift side to side like a real bubble
        scale: [1, 1.05, 1], // Slight scaling to mimic organic bubble movement
        rotateY: [0, 360], // Rotate in the Y direction for 3D effect
      }}
      transition={{
        duration: 10, // Duration of the entire animation cycle
        repeat: Infinity, // Infinite repeat for continuous movement
        ease: "easeInOut", // Smooth easing for natural movement
      }}
      style={{
        perspective: 800, // Perspective for 3D effect
      }}
    >
      {/* Rocket Shape */}
      <motion.div
        className={styles.rocketShape} // Apply rocket shape style from CSS module
        style={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Create a triangular rocket shape
        }}
      />

      {/* Inner Reflection Effect */}
      <motion.div
        className={styles.innerReflection} // Apply reflection effect style from CSS module
        style={{ mixBlendMode: "screen" }} // Adds a shiny effect like light reflecting off water
      />
      
      {/* 3D Effect Layer */}
      <motion.div
        className={styles.effectLayer} // Apply 3D effect layer from CSS module
        style={{
          transform: 'scale(1.1) rotateX(20deg)', // Adding depth to the bubble
          mixBlendMode: 'screen',
        }}
      />
    </motion.div>
  );
};

export default BubbleComponent;
