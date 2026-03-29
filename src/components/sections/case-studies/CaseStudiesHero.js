'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SplitTextReveal } from '@/components/animations/SplitTextReveal';

export function CaseStudiesHero() {
  return (
    <section className="pt-40 pb-20 bg-[#0B0B0C]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#7D5CFA] mb-6">
            Case Studies
          </span>
        </FadeIn>
        
        <SplitTextReveal 
          as="h1" 
          className="text-h1-cinematic font-serif text-white max-w-5xl mb-8"
        >
          Work that moves people and drives results
        </SplitTextReveal>

        <FadeIn delay={0.4} className="max-w-2xl">
          <p className="text-body-large text-[#A6A7AB]">
            A curated selection of projects that showcase our commitment to excellence in design, technology, and strategy.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}