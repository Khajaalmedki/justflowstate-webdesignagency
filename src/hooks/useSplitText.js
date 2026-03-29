'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSplitText(options = {}) {
  const ref = useRef(null);
  const { 
    type = 'words', 
    animation = 'fadeUp',
    start = 'top 80%',
    stagger = 0.05,
    duration = 0.8,
    y = 40,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent;
    let splitContent;

    if (type === 'words') {
      splitContent = text.split(' ').map((word, i) => 
        `<span class="inline-block overflow-hidden">
          <span class="inline-block split-inner" style="--index: ${i}">${word}</span>
        </span>`
      ).join(' ');
    } else {
      splitContent = text.split('').map((char, i) => 
        `<span class="inline-block overflow-hidden">
          <span class="inline-block split-inner" style="--index: ${i}">${char === ' ' ? '&nbsp;' : char}</span>
        </span>`
      ).join('');
    }

    element.innerHTML = splitContent;
    const innerElements = element.querySelectorAll('.split-inner');

    gsap.set(innerElements, { y: y, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: start,
      onEnter: () => {
        gsap.to(innerElements, {
          y: 0,
          opacity: 1,
          duration: duration,
          stagger: stagger,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => trigger.kill();
  }, [type, animation, start, stagger, duration, y]);

  return ref;
}