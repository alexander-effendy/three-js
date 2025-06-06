import { useEffect, useRef } from 'react';
import { createScene } from './spinning-box-scene.js';

const SpinningBox = () => {
  const threeRef = useRef(null);
  useEffect(() => {
    if (threeRef.current) createScene(threeRef.current);
  }, []);

  return (
    <div ref={threeRef} className="w-screen h-screen" />
  );
}

export default SpinningBox;