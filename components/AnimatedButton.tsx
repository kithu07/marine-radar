"use client";

import { motion, useAnimation, type HTMLMotionProps } from 'framer-motion';
import { useState } from 'react';
import { rippleVariant, scaleHoverVariant } from '../lib/animation-variants';

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedButton = ({ 
  children, 
  className = '', 
  onClick,
  ...props 
}: AnimatedButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const controls = useAnimation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipples(prev => [...prev, { x, y, id: Date.now() }]);
    setTimeout(() => {
      setRipples(prev => prev.slice(1));
    }, 800);

    onClick?.(e);
  };

  return (
    <motion.button
      variants={scaleHoverVariant}
      initial="initial"
      whileHover="hover"
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...props}
    >
      {ripples.map(({ x, y, id }) => (
        <motion.span
          key={id}
          variants={rippleVariant}
          initial="initial"
          animate="animate"
          className="absolute bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: x, top: y }}
        />
      ))}
      {children}
    </motion.button>
  );
}; 