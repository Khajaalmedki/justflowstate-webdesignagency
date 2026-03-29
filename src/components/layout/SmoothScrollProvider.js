'use client';

import { useLenis } from '@/hooks/useLenis';

export function SmoothScrollProvider({ children }) {
  useLenis();
  return children;
}