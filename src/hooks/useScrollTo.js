import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
};
