import { useCallback } from 'react';

export const useIntersectionObserver = () => {
  const initObserver = useCallback(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If element is visible
        if (entry.isIntersecting) {
          // Get animation class from data attribute
          const animationClass = entry.target.getAttribute('data-animation');
          if (animationClass) {
            entry.target.classList.add(animationClass);
            // Once animation is added, no need to observe this element
            observer.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: 0.1, // Trigger when at least 10% of the target is visible
      rootMargin: '0px 0px -50px 0px' // Adds a margin around the root
    });
    
    // Observe each element
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    // Clean up observer on component unmount
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return { initObserver };
};