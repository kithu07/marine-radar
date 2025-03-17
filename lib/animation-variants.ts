import { Variants } from 'framer-motion';

// Fade up animation for components
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Scale on hover animation
export const scaleHoverVariant: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

// Stagger children animation
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Ripple effect for buttons
export const rippleVariant: Variants = {
  initial: { scale: 0, opacity: 0.3 },
  animate: {
    scale: 2,
    opacity: 0,
    transition: { duration: 0.8 }
  }
};

// Scroll reveal animation
export const scrollRevealVariant: Variants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Card hover effect with depth
export const cardHoverVariant: Variants = {
  initial: { 
    scale: 1,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  hover: { 
    scale: 1.02,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.2 }
  }
};

// Navigation slide in
export const navSlideVariant: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}; 