import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };

    if (mq.addEventListener) {
      mq.addEventListener('change', handleChange);
      return () => mq.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mq.addListener(handleChange);
      return () => mq.removeListener(handleChange);
    }
  }, []);

  return reduceMotion;
}
