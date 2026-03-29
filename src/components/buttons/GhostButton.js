'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

export function GhostButton({ 
  children, 
  className, 
  href, 
  onClick,
  showArrow = false,
}) {
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
    </>
  );

  const classes = cn(
    'inline-flex items-center justify-center px-8 py-4 font-medium text-white border border-[#3B3C3F] rounded-2xl transition-all duration-300 hover:border-[#3A80F6] hover:text-[#3A80F6] group',
    className
  );

  if (href) {
    return <Link href={href} className={classes}>{content}</Link>;
  }

  return <button onClick={onClick} className={classes}>{content}</button>;
}