
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import ContactFormModal from './ContactFormModal';

const HeroSection = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;

      const { clientX, clientY } = e;
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center (reduced effect by increasing divisor)
      const distX = (clientX - centerX) / 40; // Increased from 25 to 40 for slower movement
      const distY = (clientY - centerY) / 40; // Increased from 25 to 40 for slower movement

      // Apply 3D rotation effect (more subtle)
      logoRef.current.style.transform = `perspective(800px) rotateY(${distX}deg) rotateX(${-distY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden section-padding pt-32"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-vtrend-green rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-vtrend-yellow rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in" style={{ animationDuration: '1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Elevate Your</span>
              <span className="text-gradient">Digital Presence</span>
            </h1>
            <p className="text-vtrend-light-text text-lg md:text-xl mb-8 max-w-lg">
              Strategic Digital Solutions that drive real growth.
              Transform your brand's online visibility with VTrend's expert services.
            </p>
            <div className="flex space-x-4">
              <Button
                className="vtrend-button"
                style={{ animationDuration: '3s' }}
                onClick={() => setIsModalOpen(true)}
              >
                <span>Skyrocket Your Growth</span>
              </Button>
              <a href="#testimonials">
                <Button variant="outline" className="glass hover:bg-white/10 transition-all duration-500">
                  See Our Results
                </Button>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              ref={logoRef}
              src="/lovable-uploads/vtrend.avif"
              alt="VTrend Logo"
              className="w-64 md:w-96 transition-transform duration-700"
              style={{ transformStyle: 'preserve-3d', animation: 'float 8s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '2s' }}>
        <a href="#services" className="flex flex-col items-center text-vtrend-light-text hover:text-white transition-colors duration-500">
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default HeroSection;
