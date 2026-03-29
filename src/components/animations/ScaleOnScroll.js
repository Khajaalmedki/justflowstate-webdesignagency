'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

export function ScaleOnScroll({ 
  children, 
  className,
  start = 0.8,
  end = 1.1,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(element, 
      { scale: start },
      {
        scale: end,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, [start, end]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}