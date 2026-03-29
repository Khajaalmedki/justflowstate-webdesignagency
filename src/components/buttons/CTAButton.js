'use client';

import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export function CTAButton({ 
  children, 
  className, 
  href, 
  onClick,
  variant = 'primary',
}) {
  const ref = useMagnetic(0.3);
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#3A80F6] to-[#7D5CFA] text-white hover:shadow-lg hover:shadow-[#3A80F6]/30',
    gold: 'bg-gradient-to-r from-[#C8A661] to-[#E4D5A1] text-[#0B0B0C] hover:shadow-lg hover:shadow-[#C8A661]/30',
    dark: 'bg-[#2A2B2E] text-white border border-[#3B3C3F] hover:border-[#7D5CFA]',
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
  );

  const classes = cn(
    'relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-medium overflow-hidden transition-all duration-300 group',
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} ref={ref}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} ref={ref}>
      {content}
    </button>
  );
}