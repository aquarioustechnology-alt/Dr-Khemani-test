import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnMount?: boolean;
}

export function useCountUp({ end, duration = 2000, startOnMount = false }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(startOnMount);
  const startTimeRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  const start = useCallback(() => {
    setHasStarted(true);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasStarted, end, duration]);

  return { count, start };
}
