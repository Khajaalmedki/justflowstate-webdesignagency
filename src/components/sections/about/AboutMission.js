'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { MaskReveal } from '@/components/animations/MaskReveal';

export function AboutMission() {
  return (
    <section className="py-32 bg-[#0B0B0C] border-t border-[#1A1A1B]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2 className="text-h2-large font-serif text-white mb-6">Our Mission</h2>
                <p className="text-body-large text-[#A6A7AB] leading-relaxed">
                  To elevate digital craftsmanship to an art form. We believe that every interaction should feel intuitive, every animation purposeful, and every pixel placed with intention.
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-[#1A1A1B] border border-[#2A2B2E]">
                <blockquote className="text-xl font-serif text-white italic">
                  "In the state of flow, the boundary between creator and creation dissolves."
                </blockquote>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#1A1A1B]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3A80F6]/20 to-[#7D5CFA]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#2A2B2E] font-serif text-9xl">M</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}