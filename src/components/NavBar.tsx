
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/1e8e37f5-a254-4538-83c3-24fd25fc0883.png" 
              alt="VTrend Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'About', 'Features', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-vtrend-light-text hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center">
          <Button 
            className="vtrend-button" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
