'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/data/services';
import { FadeIn } from '@/components/animations/FadeIn';
import { CTAButton } from '@/components/buttons/CTAButton';
import { 
  Compass, 
  Palette, 
  Code2, 
  Film 
} from 'lucide-react';

const iconMap = {
  strategy: Compass,
  design: Palette,
  development: Code2,
  motion: Film,
};

export function HomeServicesPreview() {
  return (
    <section className="py-32 bg-[#0B0B0C] relative overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionTitle 
              title="Capabilities that drive growth"
              subtitle="Our Services"
              light
            />
          </div>
          <FadeIn delay={0.2}>
            <CTAButton href="/services" variant="ghost" showArrow>
              View All Services
            </CTAButton>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features.slice(0, 3)}
              icon={iconMap[service.id]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}