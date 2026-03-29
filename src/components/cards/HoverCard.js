'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export function HoverCard({ 
  image, 
  title, 
  subtitle, 
  className,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-3xl overflow-hidden bg-[#1A1A1B] group cursor-pointer',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0B0C]/40 group-hover:bg-[#0B0B0C]/20 transition-colors duration-500" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#3A80F6] font-mono text-xs uppercase tracking-wider mb-2">
              {subtitle}
            </p>
            <h3 className="text-2xl font-serif text-white">{title}</h3>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3A80F6]/20 to-transparent" />
      </div>
    </motion.div>
  );
}