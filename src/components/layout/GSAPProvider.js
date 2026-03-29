'use client';

import { useEffect } from 'react';
import { initGSAP } from '@/lib/gsapConfig';

export function GSAPProvider({ children }) {
  useEffect(() => {
    initGSAP();
  }, []);

  return children;
}