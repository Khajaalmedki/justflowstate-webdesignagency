'use client';

import { useState } from 'react';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { CaseStudyFilters } from './CaseStudyFilters';
import { caseStudies } from '@/data/caseStudies';
import { FadeIn } from '@/components/animations/FadeIn';

export function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category.toLowerCase() === activeFilter);

  return (
    <section className="py-20 bg-[#0B0B0C]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <CaseStudyFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              category={study.category}
              description={study.description}
              image={study.image}
              tags={study.tags}
              index={index}
              className={index === 0 ? 'lg:col-span-2 aspect-[21/9]' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
}