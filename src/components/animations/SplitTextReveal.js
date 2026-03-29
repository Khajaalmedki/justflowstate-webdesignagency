'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

export function SplitTextReveal({ 
  children, 
  className, 
  as: Component = 'div',
  stagger = 0.03,
  duration = 0.8,
  y = 40,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = container.textContent;
    const words = text.split(' ').map((word, i) => 
      `<span class="inline-block overflow-hidden mr-[0.25em]">
        <span class="inline-block split-word-inner translate-y-full opacity-0" data-index="${i}">${word}</span>
      </span>`
    ).join('');

    container.innerHTML = words;
    const innerWords = container.querySelectorAll('.split-word-inner');

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(innerWords, {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease: 'power3.out',
        });
      },
    });

    return () => trigger.kill();
  }, [stagger, duration]);

  return (
    <Component ref={containerRef} className={cn(className)}>
      {children}
    </Component>
  );
}