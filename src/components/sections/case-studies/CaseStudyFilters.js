'use client';

import { cn } from '@/utils/cn';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Fintech', value: 'fintech' },
  { label: 'E-commerce', value: 'e-commerce' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Real Estate', value: 'real-estate' },
  { label: 'Entertainment', value: 'entertainment' },
];

export function CaseStudyFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'px-6 py-3 rounded-full font-medium transition-all duration-300',
            activeFilter === filter.value
              ? 'bg-[#3A80F6] text-white'
              : 'bg-[#1A1A1B] text-[#A6A7AB] border border-[#2A2B2E] hover:border-[#3A80F6] hover:text-white'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}