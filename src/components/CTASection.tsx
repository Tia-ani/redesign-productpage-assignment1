import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll" data-animation="fade-in">
          <h2 className="heading-lg text-gray-800 mb-4">
            Ready to Transform Your Experience?
          </h2>
          <p className="paragraph mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already taken their experience to the next level. 
            Pre-order now and be among the first to receive our revolutionary product.
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl mx-auto">
            <h3 className="heading-md mb-6">Get Early Access</h3>
            
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                    required
                  />
                </div>
                
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full group"
              >
                <span className="flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Request Early Access</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
            
            <p className="text-gray-600 text-sm mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;