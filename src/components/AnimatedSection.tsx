import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className = '',
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
