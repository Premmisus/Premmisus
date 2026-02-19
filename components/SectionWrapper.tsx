import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", delay = 0, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};