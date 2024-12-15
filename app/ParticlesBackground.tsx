"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine (once per app lifetime)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load only the slim version for smaller bundle size
    }).then(() => {
      setInit(true); // Set initialized state
    });
  }, []);

  // Ensure particlesLoaded returns a Promise<void>
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
    return Promise.resolve();
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          url="/particles-config.json" // JSON configuration file for particles
          style={{
            position: "fixed", // Ensures it covers the entire viewport
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // Places the particles behind all other content
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;
