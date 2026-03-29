'use client';

import { FadeIn } from '@/components/animations/FadeIn';

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'JustFlowState founded with a vision to merge cinematic design with digital strategy.',
  },
  {
    year: '2020',
    title: 'First Major Win',
    description: 'Partnered with Fortune 500 companies, establishing our reputation for premium digital experiences.',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew to 20+ specialists across strategy, design, and engineering disciplines.',
  },
  {
    year: '2022',
    title: 'Award Recognition',
    description: 'Recognized by Awwwards and CSS Design Awards for excellence in web craftsmanship.',
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Expanded client base to 15+ countries, maintaining boutique-level attention to detail.',
  },
  {
    year: '2024',
    title: 'The Future',
    description: 'Pioneering AI-assisted design workflows while maintaining human-centered creativity.',
  },
];

export function AboutTimeline() {
  return (
    <section className="py-32 bg-[#0B0B0C] border-t border-[#1A1A1B]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <FadeIn className="mb-16">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#7D5CFA] mb-4">
            Our Journey
          </span>
          <h2 className="text-h2-large font-serif text-white">Timeline</h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#2A2B2E] md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.1}>
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 md:text-right">
                    <div className={`${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                      <span className="text-4xl font-serif text-[#3A80F6] mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                      <p className="text-[#A6A7AB]">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#3A80F6] border-4 border-[#0B0B0C] relative z-10 self-center" />
                  <div className="flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}