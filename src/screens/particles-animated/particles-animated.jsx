import { useEffect, useRef } from 'react';
import { createScene } from './particles-animated-scene';

const ParticlesAnimated = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      createScene(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-screen h-screen" />
  );
};

export default ParticlesAnimated;
