import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "This product has completely transformed how I work. The intuitive design and powerful features make it a joy to use every day.",
      rating: 5
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Tech Entrepreneur",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "I've tried many similar products, but nothing comes close to this level of quality and performance. It's worth every penny.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Product Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: "The attention to detail is remarkable. From packaging to performance, this product exceeds expectations at every level.",
      rating: 4
    }
  ];
  
  // Auto rotate testimonials
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);
  
  // Pause autoplay when user interacts
  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000);
  };
  
  const goToPrev = () => {
    handleManualNavigation(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  };
  
  const goToNext = () => {
    handleManualNavigation(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <section id="testimonials" className="section bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium uppercase tracking-wider animate-on-scroll" data-animation="slide-up">Testimonials</span>
          <h2 className="heading-lg mt-2 animate-on-scroll" data-animation="fade-in">
            What Our Customers Say
          </h2>
          <p className="paragraph mt-4 animate-on-scroll" data-animation="slide-up">
            Don't just take our word for it. Hear from the people who have experienced the difference.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mt-16 animate-on-scroll" data-animation="fade-in">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div 
              className="transition-transform duration-500 ease-in-out flex" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                    
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-lg md:text-xl font-medium italic mb-6">
                        "{testimonial.content}"
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation controls */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-between w-[calc(100%-2rem)]">
              <button 
                onClick={goToPrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary transition-colors focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-primary transition-colors focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;