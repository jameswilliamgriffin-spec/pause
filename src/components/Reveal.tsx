"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

type RevealItemProps = RevealGroupProps & {
  delay?: number;
};

const viewport = { once: true, amount: 0.22 };

export function RevealGroup({ children, className }: RevealGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.11,
            delayChildren: 0.04,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, delay = 0 }: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.62,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
