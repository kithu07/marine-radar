"use client";

import { motion } from 'framer-motion';
import { staggerContainerVariant } from '../lib/animation-variants';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = '',
  delay = 0 
}: StaggerContainerProps) => {
  return (
    <motion.div
      variants={{
        ...staggerContainerVariant,
        visible: {
          ...staggerContainerVariant.visible,
          transition: {
            ...staggerContainerVariant.visible.transition,
            delayChildren: delay
          }
        }
      }}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}; 