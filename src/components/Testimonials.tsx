
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Designer",
    quote: "FlowBoard transformed how I organize my creative projects. The zen-inspired interface helps me stay calm even during tight deadlines.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    quote: "As a developer juggling multiple projects, FlowBoard's intuitive kanban system keeps me focused on what matters. The automation features save me hours each week.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Freelance Writer",
    quote: "The focus mode in FlowBoard helps me achieve deep work like never before. My productivity has increased while my stress levels have decreased.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-zen-gray/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-zen-blue opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-zen-purple opacity-10 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What our users say</h2>
          <p className="text-gray-600">
            Join thousands of satisfied users who have found their flow with our mindful productivity app.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="neumorphic p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-2 py-1 shadow-sm flex">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl italic mb-6 text-gray-700">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="neumorphic-sm h-10 w-10 rounded-full flex items-center justify-center text-gray-600 hover:text-zen-purple transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="neumorphic-sm h-10 w-10 rounded-full flex items-center justify-center text-gray-600 hover:text-zen-purple transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
