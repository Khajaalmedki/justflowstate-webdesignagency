export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};