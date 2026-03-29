'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

export function MaskReveal({ 
  children, 
  className, 
  direction = 'left',
  duration = 1,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const clipPaths = {
      left: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
      right: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
      top: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
      bottom: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
    };

    gsap.set(element, { clipPath: clipPaths[direction][0] });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(element, {
          clipPath: clipPaths[direction][1],
          duration,
          ease: 'power3.inOut',
        });
      },
    });

    return () => trigger.kill();
  }, [direction, duration]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}