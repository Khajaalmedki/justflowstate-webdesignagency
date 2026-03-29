'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ParallaxWrapper } from '@/components/animations/ParallaxWrapper';

gsap.registerPlugin(ScrollTrigger);

export function HomeHero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.5,
      });
      
      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0C]"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 noise-bg">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3A80F6]/20 rounded-full blur-[120px] animate-ambient" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7D5CFA]/20 rounded-full blur-[100px] animate-ambient" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-12 text-center">
        <ParallaxWrapper speed={0.2} className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-[#1A1A1B] border border-[#2A2B2E] text-[#A6A7AB] font-mono text-xs uppercase tracking-[0.2em] hero-subtitle">
            Luxury Digital Agency
          </span>
        </ParallaxWrapper>

        <h1 ref={textRef} className="text-h1-cinematic font-serif text-white mb-8 overflow-hidden">
          <span className="hero-word inline-block">We</span>{' '}
          <span className="hero-word inline-block">Craft</span>{' '}
          <span className="hero-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3A80F6] to-[#7D5CFA]">
            Cinematic
          </span>{' '}
          <br className="hidden md:block" />
          <span className="hero-word inline-block">Digital</span>{' '}
          <span className="hero-word inline-block">Experiences</span>
        </h1>

        <p className="hero-subtitle text-body-large text-[#A6A7AB] max-w-2xl mx-auto mb-12">
          JustFlowState is a premium creative studio blending strategy, design, and engineering to build digital moments that move people.
        </p>

        <div className="hero-subtitle flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton href="/case-studies" variant="primary" showArrow>
            View Our Work
          </MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Start Your Project
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-xs uppercase tracking-widest text-[#A6A7AB]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#3A80F6] to-transparent" />
      </div>
    </section>
  );
}