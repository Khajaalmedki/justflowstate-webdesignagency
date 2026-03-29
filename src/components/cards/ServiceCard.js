'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function ServiceCard({ 
  title, 
  description, 
  features, 
  icon: Icon,
  className,
  index = 0,
}) {
  return (
    <motion.div
      className={cn(
        'relative bg-[#1A1A1B] rounded-3xl p-8 lg:p-10 border border-[#2A2B2E] overflow-hidden group',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A80F6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#3A80F6]/20 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-[#2A2B2E] flex items-center justify-center mb-6 text-[#3A80F6]">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        
        <h3 className="text-2xl font-serif text-white mb-4">{title}</h3>
        <p className="text-[#A6A7AB] mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-[#C1C2C5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3A80F6]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}