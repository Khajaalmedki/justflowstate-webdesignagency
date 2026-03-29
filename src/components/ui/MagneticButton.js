'use client';

import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export function MagneticButton({ 
  children, 
  className, 
  href, 
  onClick,
  strength = 0.3,
  variant = 'primary',
}) {
  const magneticRef = useMagnetic(strength);

  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-2xl font-medium relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-[#3A80F6] text-white',
    ghost: 'bg-transparent border border-[#3B3C3F] text-white',
    glow: 'bg-[#2A2B2E] text-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#3A80F6] before:to-[#7D5CFA] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} ref={magneticRef}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} ref={magneticRef}>
      {content}
    </button>
  );
}