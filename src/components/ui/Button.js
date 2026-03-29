'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  href, 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-2xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#3A80F6] text-white hover:bg-[#1F5AD4] hover:shadow-lg hover:shadow-[#3A80F6]/25',
    secondary: 'bg-[#2A2B2E] text-white hover:bg-[#3B3C3F]',
    ghost: 'bg-transparent border border-[#3B3C3F] text-white hover:border-[#3A80F6] hover:text-[#3A80F6]',
    gold: 'bg-gradient-to-r from-[#C8A661] to-[#E4D5A1] text-[#0B0B0C] hover:shadow-lg hover:shadow-[#C8A661]/25',
  };

  const Component = href ? Link : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}