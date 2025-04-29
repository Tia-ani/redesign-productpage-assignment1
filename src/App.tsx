import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  // Initialize intersection observer for animations
  const { initObserver } = useIntersectionObserver();

  useEffect(() => {
    // Initialize animation observer after component mounts
    initObserver();
  }, [initObserver]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;