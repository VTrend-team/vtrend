
import { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "VTrend completely transformed our online presence. Their Instagram ad campaigns increased our conversion rate by 73% in just 60 days.",
    author: "Nipun",
    position: "Founder & CEO, Rotify",
    avatar: "NJ"
  },
  {
    quote: "Their SEO strategies took us from 0 to more than 50k Youtube views for our main keywords. The increase in organic reach has been phenomenal.",
    author: "Vishesh",
    position: "Creator, Khalifa Lion India",
    avatar: "KL"
  },
  {
    quote: "They delivered beyond our expectations. They transformed our complex Figma designs into pixel-perfect, responsive code with impressive attention to detail.",
    author: "Achyut Awasthi",
    position: "Management, EICT",
    avatar: "AA"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach(card => {
      if (card) {
        card.classList.add('opacity-0', 'translate-y-10');
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-vtrend-light-text max-w-2xl mx-auto">
            Don't just take our word for it — see what industry leaders have to say about their experience with VTrend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="glass-card h-full p-2 relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-vtrend-green opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-vtrend-light-text mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4 border-2 border-vtrend-green/30">
                      <AvatarFallback className="bg-vtrend-dark-accent text-vtrend-green">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-vtrend-light-text">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-vtrend-gradient opacity-30 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
