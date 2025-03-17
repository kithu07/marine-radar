"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { scrollRevealVariant } from '../lib/animation-variants';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export const ScrollReveal = ({ children, className = '' }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={scrollRevealVariant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 