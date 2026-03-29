'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

export function ParallaxWrapper({ 
  children, 
  className, 
  speed = 0.5,
  direction = 'vertical',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const movement = direction === 'vertical' ? 'y' : 'x';
    const distance = 100 * speed;

    gsap.to(element, {
      [movement]: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed, direction]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}