'use client';

import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export function PrimaryButton({ 
  children, 
  className, 
  href, 
  onClick,
  size = 'md',
  showArrow = false,
}) {
  const ref = useMagnetic(0.2);
  
  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <svg 
          className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A80F6] to-[#5C97F8] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  const classes = cn(
    'relative inline-flex items-center justify-center font-medium text-white bg-[#3A80F6] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#3A80F6]/25 group',
    sizes[size],
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