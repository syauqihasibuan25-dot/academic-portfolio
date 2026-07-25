'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type RevealDirection = 'fade-scale' | 'drop' | 'left' | 'right';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
  /**
   * Controls the entrance animation style:
   * - 'fade-scale': smooth fade-in with scale up (hero text/titles)
   * - 'drop': gentle top-to-bottom drop in (profile/foundation cards)
   * - 'left': slides in from the left (odd-numbered cards)
   * - 'right': slides in from the right (even-numbered cards)
   */
  direction?: RevealDirection;
};

const variantsByDirection: Record<RevealDirection, Variants> = {
  'fade-scale': {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  drop: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  left: {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  right: {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  direction = 'fade-scale',
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variantsByDirection[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
