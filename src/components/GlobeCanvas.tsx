
import { Canvas } from '@react-three/fiber';
import Globe from './Globe';
import { Suspense, useEffect, useState } from 'react';

const GlobeCanvas = () => {
  const [globeSize, setGlobeSize] = useState(2.8);
  
  // Calculate globe size based on viewport width
  useEffect(() => {
    const handleResize = () => {
      // Adjust the globe size based on the viewport width
      const viewportWidth = window.innerWidth;
      const newSize = viewportWidth < 768 ? 1.8 : viewportWidth < 1024 ? 2.2 : 2.8;
      setGlobeSize(newSize);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-80 pointer-events-none">
      {/* Adjust camera position to shift the globe downwards */}
      <Canvas camera={{ position: [0, -2, 6], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} color="#ffffff" />
        <Suspense fallback={null}>
          <Globe size={globeSize} opacity={0.975} speed={0.001} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeCanvas;
