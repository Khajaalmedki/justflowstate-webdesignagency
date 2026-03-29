'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { smoothTransition } from '@/lib/framerConfig';

export function FadeIn({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  once = true,
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-100px' }}
      transition={{ ...smoothTransition, delay, duration }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}