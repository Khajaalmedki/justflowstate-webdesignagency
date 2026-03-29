'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export function CaseStudyCard({ 
  title, 
  category, 
  description, 
  image, 
  tags,
  className,
  index = 0,
}) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        'relative group rounded-3xl overflow-hidden bg-[#1A1A1B] cursor-pointer',
        className
      )}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 rounded-full bg-[#3A80F6]/20 text-[#3A80F6] text-xs font-mono uppercase tracking-wider mb-3">
          {category}
        </span>
        <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2">{title}</h3>
        <p className="text-[#A6A7AB] text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {description}
        </p>
        
        <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-[#5B5C5F]">#{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}