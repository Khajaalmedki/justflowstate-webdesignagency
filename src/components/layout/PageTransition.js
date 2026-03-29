'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition() {
  const pathname = usePathname();

  return (
    <>
      <motion.div
        key={`curtain-${pathname}`}
        className="fixed inset-0 z-[100] bg-[#0B0B0C] origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        key={`fade-${pathname}`}
        className="fixed inset-0 z-[99] bg-[#0B0B0C]/50 backdrop-blur-sm"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </>
  );
}