import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import sun from "@assets/sun.svg";
import styles from "./darkEarthSun.module.scss";

// Breathing Sun Component
const BreathingSun = () => {
  const sunRef = useRef<THREE.Sprite>(null!);
  const scaleFactor = 0.2; // Scale factor for breathing effect

  useFrame(() => {
    if (sunRef.current) {
      const time = performance.now() * 0.001; // Time variable for animation
      const scale = 5.7 + Math.sin(time) * scaleFactor; // Calculate new scale
      sunRef.current.scale.set(scale, scale, scale); // Apply scale
    }
  });

  return (
    <sprite ref={sunRef} position={[0, 1, 0]}>
      {" "}
      {/* Adjusted position for visibility */}
      <spriteMaterial
        attach="material"
        map={new THREE.TextureLoader().load(sun)}
      />
    </sprite>
  );
};

// Earth Component (Black Sphere)
const Earth = () => {
  return (
    <mesh position={[0, 0.4, 0]}>
      {" "}
      {/* Positioned below the sun */}
      <sphereGeometry args={[1.6, 40, 40]} /> {/* Adjust size of Earth */}
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

const Globe: React.FC = () => {
  return (
    <div className={styles["globe-container"]}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.4} />

        {/* Point light to highlight the globe */}
        <pointLight position={[5, 5, 5]} intensity={1} />

        {/* Breathing sun positioned above the Earth */}
        <BreathingSun />

        {/* Dark Earth positioned below the sun */}
        <Earth />
      </Canvas>
    </div>
  );
};

export default Globe;
