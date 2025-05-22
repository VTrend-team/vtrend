
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  
  // Set maximum particles based on device capabilities
  const getMaxParticles = () => {
    // Lower particle count on mobile devices
    return Math.min(window.innerWidth / 30, 20);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particles: Particle[] = [];
    
    // Create particles
    const createParticles = () => {
      const particleCount = getMaxParticles();
      
      // Clean up existing particles
      cleanupParticles();
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1; // Slightly smaller particles
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const speedX = Math.random() * 0.4 - 0.2; // Slightly slower
        const speedY = -Math.random() * 0.4 - 0.1; // Moving upward, slightly slower

        const element = document.createElement('div');
        element.className = 'particle';
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.opacity = `${Math.random() * 0.5}`;
        
        container.appendChild(element);
        
        particles.push({
          x,
          y,
          size,
          speedX,
          speedY,
          element
        });
      }
      
      return particles;
    };
    
    // Cleanup function to remove all particles
    const cleanupParticles = () => {
      // Remove all DOM elements
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Clear the particles array
      particles.length = 0;
    };
    
    // Animate particles
    const animateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reset position if out of bounds
        if (particle.y < -20) {
          particle.y = window.innerHeight + 20;
          particle.x = Math.random() * window.innerWidth;
        }
        
        if (particle.x < -20) {
          particle.x = window.innerWidth + 20;
        } else if (particle.x > window.innerWidth + 20) {
          particle.x = -20;
        }
        
        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
      });
      
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };
    
    // Initialize
    const handleResize = () => {
      cancelAnimationFrame(animationFrameRef.current);
      particlesRef.current = createParticles();
      animateParticles();
    };
    
    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize);
    
    // Improved cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      cleanupParticles();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
