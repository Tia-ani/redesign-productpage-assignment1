import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const productImages = [
    {
      url: "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product Main View"
    },
    {
      url: "https://images.pexels.com/photos/4195515/pexels-photo-4195515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product Side View"
    },
    {
      url: "https://images.pexels.com/photos/4195326/pexels-photo-4195326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Product in Use"
    }
  ];
  
  const specs = [
    "Ultra HD Resolution",
    "Advanced AI Integration",
    "24-hour Battery Life",
    "Water & Dust Resistant",
    "Premium Materials",
    "Eco-friendly Design"
  ];

  return (
    <section id="product" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium uppercase tracking-wider animate-on-scroll" data-animation="slide-up">The Product</span>
          <h2 className="heading-lg mt-2 animate-on-scroll" data-animation="fade-in">
            Exceptional in Every Detail
          </h2>
          <p className="paragraph mt-4 animate-on-scroll" data-animation="slide-up">
            Discover a product that combines stunning aesthetics with unmatched functionality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="animate-on-scroll" data-animation="slide-in-left">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src={productImages[activeImage].url} 
                  alt={productImages[activeImage].alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="mt-4 flex justify-center space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeImage === index 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View ${image.alt}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll" data-animation="slide-in-right">
            <h3 className="heading-md text-gray-800 mb-4">Premium Quality & Innovation</h3>
            <p className="paragraph mb-6">
              We've carefully crafted every component to deliver an experience that exceeds
              your expectations. From the sleek design to the powerful internals, this product
              represents the pinnacle of modern innovation.
            </p>
            
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Key Specifications</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-primary mr-2">
                      <Check className="h-5 w-5" />
                    </span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Pre-order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;