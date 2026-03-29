'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function BentoTile({ 
  children, 
  className, 
  colSpan = 1, 
  rowSpan = 1,
  hover = true,
  gradient = false,
}) {
  return (
    <motion.div
      className={cn(
        'relative rounded-3xl p-8 overflow-hidden',
        gradient ? 'bg-gradient-to-br from-[#1A1A1B] to-[#2A2B2E]' : 'bg-[#1A1A1B]',
        hover && 'group cursor-pointer',
        className
      )}
      style={{ 
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#3A80F6]/10 to-[#7D5CFA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}