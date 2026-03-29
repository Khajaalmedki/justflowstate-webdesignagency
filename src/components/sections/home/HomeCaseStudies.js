'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';
import { FadeIn } from '@/components/animations/FadeIn';
import { CTAButton } from '@/components/buttons/CTAButton';

export function HomeCaseStudies() {
  const featuredCases = caseStudies.slice(0, 4);

  return (
    <section className="py-32 bg-[#0B0B0C] border-t border-[#1A1A1B]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionTitle 
              title="Work that moves people"
              subtitle="Selected Projects"
              light
            />
          </div>
          <FadeIn delay={0.2}>
            <CTAButton href="/case-studies" variant="ghost">
              View All Projects
            </CTAButton>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredCases.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              category={study.category}
              description={study.description}
              image={study.image}
              tags={study.tags}
              index={index}
              className={index === 0 ? 'md:col-span-2 aspect-[21/9]' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
}