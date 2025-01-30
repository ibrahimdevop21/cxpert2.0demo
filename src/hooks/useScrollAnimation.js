import { useEffect, useRef } from 'react';

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
      delay: 100,
      ...options
    };

    const animateElement = (target) => {
      target.style.transition = `all ${defaultOptions.duration}ms ${defaultOptions.easing}`;
      target.style.opacity = defaultOptions.opacity[1];
      target.style.transform = `translateY(${defaultOptions.translateY[1]}px)`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(element.children).forEach((child, index) => {
              child.style.opacity = defaultOptions.opacity[0];
              child.style.transform = `translateY(${defaultOptions.translateY[0]}px)`;
              child.style.transition = `none`
              setTimeout(()=> animateElement(child), index * defaultOptions.delay);
            })
            /*animationRef.current = anime({
              targets: element.children,
              ...defaultOptions,
              begin: () => {
                element.style.opacity = '1';
              }
            });
            
            observer.unobserve(element);*/observer.unobserve(element);
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
