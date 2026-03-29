'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SplitTextReveal } from '@/components/animations/SplitTextReveal';

export function AboutHero() {
  return (
    <section className="pt-40 pb-20 bg-[#0B0B0C] min-h-[70vh] flex items-center">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#7D5CFA] mb-6">
            About Us
          </span>
        </FadeIn>
        
        <SplitTextReveal 
          as="h1" 
          className="text-h1-cinematic font-serif text-white max-w-5xl mb-8"
        >
          We believe in the power of flow—where strategy meets creativity and technology becomes invisible.
        </SplitTextReveal>

        <FadeIn delay={0.4} className="max-w-2xl">
          <p className="text-body-large text-[#A6A7AB]">
            JustFlowState is a collective of strategists, designers, and engineers united by a passion for crafting digital experiences that feel inevitable.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}