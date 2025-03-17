"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
}

export const BackgroundBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position
      size: Math.random() * 20 + 10, // Random size between 10-30px
      duration: Math.random() * 5 + 3, // Random duration between 3-8s
    }));
    setBubbles(initialBubbles);

    // Recreate bubbles periodically
    const interval = setInterval(() => {
      setBubbles(prev => prev.map(bubble => ({
        ...bubble,
        x: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 5 + 3,
      })));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-blue-200/10 backdrop-blur-sm"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
          }}
          initial={{ y: '100vh' }}
          animate={{
            y: '-100%',
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}; 