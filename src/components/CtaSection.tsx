
import { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import ContactFormModal from './ContactFormModal';

const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'scale-100');
          entry.target.classList.remove('opacity-0', 'scale-95');
        }
      });
    }, {
      threshold: 0.2
    });
    if (contentRef.current) {
      contentRef.current.classList.add('opacity-0', 'scale-95');
      observer.observe(contentRef.current);
    }
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-24 section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div ref={contentRef} className="glass p-8 sm:p-12 md:p-16 rounded-3xl relative overflow-hidden transition-all duration-700 ease-out">
          <div className="absolute inset-0 bg-gradient-to-br from-vtrend-green/10 to-vtrend-yellow/5 z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-gradient">Dominate</span> Online?
              </h2>
              <p className="text-vtrend-light-text max-w-lg">
                Join successful brands who are already leveraging VTrend's expertise to
                increase visibility, engagement, and conversions in today's competitive marketplace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="vtrend-button text-lg px-8 py-6 h-12"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Free Strategy Call</span>
              </Button>
              <a href="#testimonials">
                <Button variant="outline" className="glass hover:bg-white/10 text-lg px-8 py-6">
                  View Case Studies
                </Button>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-vtrend-green/20 filter blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-vtrend-yellow/10 filter blur-3xl"></div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default CtaSection;
