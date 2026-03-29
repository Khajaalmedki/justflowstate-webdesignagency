'use client';

import { BentoTile } from '@/components/cards/BentoTile';
import { services } from '@/data/services';
import { FadeIn } from '@/components/animations/FadeIn';
import { 
  Compass, 
  Palette, 
  Code2, 
  Film,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  strategy: Compass,
  design: Palette,
  development: Code2,
  motion: Film,
};

export function ServicesBento() {
  return (
    <section className="py-32 bg-[#0B0B0C]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => {
            const Icon = iconMap[service.id];
            const isLarge = index === 0 || index === 3;
            
            return (
              <BentoTile
                key={service.id}
                colSpan={isLarge ? 2 : 1}
                gradient={index % 2 === 0}
                className="group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#2A2B2E] flex items-center justify-center text-[#3A80F6] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-[#5B5C5F] group-hover:text-[#3A80F6] transition-colors" />
                  </div>
                  
                  <h3 className="text-3xl font-serif text-white mb-4">{service.title}</h3>
                  <p className="text-[#A6A7AB] mb-6 flex-grow">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 rounded-full bg-[#0B0B0C]/50 text-xs text-[#C1C2C5] border border-[#2A2B2E]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoTile>
            );
          })}
        </div>
      </div>
    </section>
  );
}