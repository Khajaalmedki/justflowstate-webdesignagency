'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SectionTitle } from '@/components/ui/SectionTitle';

const principles = [
  {
    title: 'Purposeful Motion',
    description: 'Every animation serves the narrative. We use motion to guide, delight, and communicate—not to decorate.',
  },
  {
    title: 'Invisible Technology',
    description: 'The best technology is the kind you don\'t notice. We build systems that work flawlessly behind the scenes.',
  },
  {
    title: 'Cinematic Detail',
    description: 'We obsess over micro-interactions, transitions, and the spaces between states where magic happens.',
  },
  {
    title: 'Strategic Empathy',
    description: 'Understanding user psychology and business goals equally, creating solutions that satisfy both.',
  },
];

export function AboutPrinciples() {
  return (
    <section className="py-32 bg-[#0B0B0C]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <SectionTitle 
            title="Our Principles"
            subtitle="Philosophy"
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={index * 0.1}>
              <div className="p-8 rounded-3xl bg-[#1A1A1B] border border-[#2A2B2E] hover:border-[#3A80F6]/30 transition-colors duration-300 group">
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#3A80F6] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-[#A6A7AB] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}