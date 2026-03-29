'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/services';
import { FadeIn } from '@/components/animations/FadeIn';
import { ParallaxWrapper } from '@/components/animations/ParallaxWrapper';

export function HomeProcess() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#1A1A1B]/50 to-[#0B0B0C]" />
      
      <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionTitle 
            title="Our Process"
            subtitle="How We Work"
            align="center"
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="relative p-8 rounded-3xl bg-[#1A1A1B] border border-[#2A2B2E] group hover:border-[#3A80F6]/50 transition-colors duration-300">
                <span className="absolute -top-4 -left-2 text-6xl font-serif text-[#2A2B2E] group-hover:text-[#3A80F6]/20 transition-colors duration-300">
                  {step.number}
                </span>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                  <p className="text-[#A6A7AB] text-sm leading-relaxed">{step.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3A80F6] to-[#7D5CFA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}