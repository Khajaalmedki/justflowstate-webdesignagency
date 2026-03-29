'use client';

import { SplitTextReveal } from '@/components/animations/SplitTextReveal';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/utils/cn';

export function SectionTitle({ 
  title, 
  subtitle, 
  align = 'left',
  className,
  light = false,
}) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn(alignments[align], className)}>
      {subtitle && (
        <FadeIn delay={0.1}>
          <span className={cn(
            "inline-block font-mono text-xs uppercase tracking-[0.2em] mb-4",
            light ? "text-[#3A80F6]" : "text-[#7D5CFA]"
          )}>
            {subtitle}
          </span>
        </FadeIn>
      )}
      <SplitTextReveal 
        as="h2" 
        className={cn(
          "text-h2-large font-serif",
          light ? "text-white" : "text-white"
        )}
      >
        {title}
      </SplitTextReveal>
    </div>
  );
}