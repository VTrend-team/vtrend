
import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';
import GlobeCanvas from '@/components/GlobeCanvas';

const Index = () => {
  // Set the title and description of the page
  useEffect(() => {
    document.title = "VTrend - No. 1 Digital Solutions Partner";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Particle background effect */}
      <ParticleBackground />
      
      {/* Globe background */}
      <GlobeCanvas />
      
      {/* Navigation */}
      <NavBar />
      
      {/* Main content */}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
