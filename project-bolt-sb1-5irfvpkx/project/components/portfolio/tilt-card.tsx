'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

type TiltCardProps = {
  children: ReactNode;
  glow?: string;
  className?: string;
};

export function TiltCard({ children, glow = 'rgba(59,130,246,0.35)', className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ['8deg', '-8deg']), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ['-8deg', '8deg']), {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`group relative will-change-transform ${className ?? ''}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div
        style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
        className="overflow-hidden rounded-2xl"
      >
        {children}
      </div>
    </motion.div>
  );
}
