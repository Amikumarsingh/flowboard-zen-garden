
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sun } from "lucide-react";
import KanbanPreview from "./KanbanPreview";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.querySelector('section');
      if (!heroSection) return;
      
      const { left, top, width, height } = heroSection.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-hero-gradient dark:bg-hero-gradient-dark">
      {/* Decorative elements with parallax effect */}
      <div 
        className="absolute top-20 right-10 animate-float opacity-30 hero-element"
        style={{ 
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` 
        }}
      >
        <Sun className="h-16 w-16 text-yellow-400 dark:text-yellow-300" />
      </div>
      <div 
        className="absolute bottom-10 left-10 animate-float opacity-20 hero-element"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M30,10 Q50,0 70,10 T90,30 Q100,50 90,70 T70,90 Q50,100 30,90 T10,70 Q0,50 10,30 T30,10" 
                fill="#9b87f5" opacity="0.5" className="dark:fill-[#6b5bb5]" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight dark:text-white hero-element"
            style={{ 
              transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)` 
            }}
          >
            Find your <span className="text-zen-purple dark:text-zen-light-purple">flow</span> in a calm, organized space
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto hero-element"
            style={{ 
              transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)` 
            }}
          >
            FlowBoard is a minimalist productivity app designed to help you focus, organize, and find your zen while getting things done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              className="rounded-full px-8 py-6 bg-zen-purple hover:bg-zen-purple/90 dark:bg-zen-dark-purple dark:hover:bg-zen-dark-purple/90 text-white transition-all duration-300 hover:shadow-lg hero-element"
              style={{ 
                transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` 
              }}
            >
              <span>Start for free</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              className="rounded-full px-8 py-6 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hero-element"
              style={{ 
                transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` 
              }}
            >
              Watch demo
            </Button>
          </div>
          
          <div 
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 text-sm text-gray-700 dark:text-gray-300 hero-element"
            style={{ 
              transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` 
            }}
          >
            <div className="flex items-center">
              <Check className="h-4 w-4 text-zen-purple dark:text-zen-light-purple mr-1" />
              <span>Free starter plan</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-zen-purple dark:text-zen-light-purple mr-1" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-zen-purple dark:text-zen-light-purple mr-1" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        
        <div 
          className="relative mx-auto max-w-5xl hero-element"
          style={{ 
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` 
          }}
        >
          <div className="neumorphic p-3 md:p-6 animate-pulse-slow">
            <KanbanPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
