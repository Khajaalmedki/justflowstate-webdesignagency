import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);
  
  // Default easing
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });

  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    start: 'top 80%',
  });
}

export function cleanupGSAP(context) {
  if (context) {
    context.revert();
  }
}

export const scrollTriggerConfig = {
  ease: 'power2.out',
  duration: 1,
  scrub: 1,
};  