import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="heading-xl animate-on-scroll" data-animation="fade-in">
            <span className="text-primary">Transform</span> Your 
            <span className="text-accent"> Experience</span>
          </h1>
          <p className="paragraph mt-4 max-w-lg mx-auto md:mx-0 animate-on-scroll" data-animation="slide-up">
            The next generation product designed to enhance your life with cutting-edge technology and 
            stunning design. Experience the future, today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll" data-animation="slide-up">
            <a href="#product" className="btn-primary">
              Explore Product
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="relative mt-10 md:mt-0 animate-on-scroll" data-animation="slide-in-right">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 animate-pulse"></div>
            <img 
              src="https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Lumina Smart Product" 
              className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700 z-10"
            />
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute -top-6 -right-6 h-12 w-12 bg-accent/20 rounded-full animate-float"></div>
          <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-5 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;