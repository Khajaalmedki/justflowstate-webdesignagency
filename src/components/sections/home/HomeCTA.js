'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { CTAButton } from '@/components/buttons/CTAButton';
import { ParallaxWrapper } from '@/components/animations/ParallaxWrapper';

export function HomeCTA() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#3A80F6]/20 to-[#7D5CFA]/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <h2 className="text-h2-large font-serif text-white mb-6">
            Ready to create something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A80F6] to-[#7D5CFA]">
              extraordinary?
            </span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-body-large text-[#A6A7AB] max-w-2xl mx-auto mb-10">
            Let's discuss how we can help elevate your digital presence and create experiences that resonate with your audience.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/contact" variant="gold" showArrow>
              Start Your Project
            </CTAButton>
            <CTAButton href="/case-studies" variant="dark">
              View Our Work
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}