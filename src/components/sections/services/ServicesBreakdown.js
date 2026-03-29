'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { services } from '@/data/services';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function ServicesBreakdown() {
  return (
    <section className="py-32 bg-[#0B0B0C] border-t border-[#1A1A1B]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionTitle 
            title="Detailed Capabilities"
            subtitle="What We Do"
            align="center"
            light
          />
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <FadeIn key={service.id} direction={index % 2 === 0 ? 'right' : 'left'}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <div className="flex-1">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3A80F6] mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-h3-medium font-serif text-white mb-6">{service.title}</h3>
                  <p className="text-body-large text-[#A6A7AB] mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white">
                        <span className="w-8 h-8 rounded-full bg-[#1A1A1B] border border-[#2A2B2E] flex items-center justify-center text-[#3A80F6] text-sm">
                          {i + 1}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 aspect-square rounded-3xl bg-[#1A1A1B] border border-[#2A2B2E] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3A80F6]/10 to-[#7D5CFA]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-serif text-[#2A2B2E]">{service.title[0]}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}