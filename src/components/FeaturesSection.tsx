
import { useRef, useEffect } from 'react';

const features = [
  {
    title: "Social Media Management",
    description: "Comprehensive management of your social media presence with strategic content planning, community engagement, and performance analytics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    title: "Paid Traffic Generation",
    description: "Strategic paid advertising campaigns across multiple platforms designed to target your ideal customers and deliver measurable ROI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: "Performance Analytics",
    description: "Detailed reporting and insights that track campaign performance, identify opportunities, and optimize your marketing strategy for maximum results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    )
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-20');
        }
      });
    }, {
      threshold: 0.2
    });

    if (sectionRef.current) {
      elementsRef.current.forEach(element => {
        if (element) {
          element.classList.add('opacity-0', 'translate-y-20');
          observer.observe(element);
        }
      });
    }

    return () => {
      elementsRef.current.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-vtrend-dark-accent py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div 
          ref={el => elementsRef.current[0] = el}
          className="text-center mb-16 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategic <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-vtrend-light-text max-w-2xl mx-auto">
            Our comprehensive digital marketing strategies are designed to help your brand stand out 
            in today's competitive online landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[index + 1] = el}
              className="transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="glass p-8 rounded-2xl h-full">
                <div className="mb-6 text-vtrend-green w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-vtrend-light-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-vtrend-green rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-vtrend-yellow rounded-full filter blur-[150px] opacity-5"></div>
    </section>
  );
};

export default FeaturesSection;
