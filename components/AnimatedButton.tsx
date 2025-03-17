"use client";

import { motion, useAnimation, type MotionProps } from "framer-motion";
import { useState, forwardRef } from "react";
import { rippleVariant, scaleHoverVariant } from "../lib/animation-variants";

interface AnimatedButtonProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className = "", onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
    const controls = useAnimation();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setRipples((prev) => [...prev, { x, y, id: Date.now() }]);
      setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 800);

      if (onClick) {
        onClick(e); 
      }
    };

    return (
      <motion.button
        ref={ref}
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
            style={{ left: x, top: y, width: 100, height: 100 }} 
          />
        ))}
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
