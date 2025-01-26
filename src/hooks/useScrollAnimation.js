import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 800,
      easing: 'easeOutCubic',
      delay: anime.stagger(100),
      ...options
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animationRef.current) animationRef.current.pause();
            
            animationRef.current = anime({
              targets: element.children,
              ...defaultOptions,
              begin: () => {
                element.style.opacity = '1';
              }
            });
            
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return elementRef;
};
