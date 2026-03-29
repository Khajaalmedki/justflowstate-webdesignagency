'use client';

import { cn } from '@/utils/cn';
import { forwardRef } from 'react';

export const TextArea = forwardRef(({ 
  className, 
  label, 
  error, 
  rows = 4,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-[#A6A7AB] mb-2 font-mono uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'w-full bg-[#1A1A1B] border border-[#2A2B2E] rounded-xl px-4 py-3 text-white placeholder:text-[#5B5C5F] focus:outline-none focus:border-[#3A80F6] focus:ring-1 focus:ring-[#3A80F6] transition-all duration-300 resize-none',
          error && 'border-[#E05A5A] focus:border-[#E05A5A] focus:ring-[#E05A5A]',
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-[#E05A5A] text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';