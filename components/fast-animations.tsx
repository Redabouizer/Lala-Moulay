"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

// Optimized animation variants for better performance
export const fastFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
}

export const fastSlideIn = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
}

export const fastScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" },
}

interface FastAnimationProps {
  children: ReactNode
  variant?: "fadeIn" | "slideIn" | "scale"
  delay?: number
  className?: string
}

export function FastAnimation({ children, variant = "fadeIn", delay = 0, className = "" }: FastAnimationProps) {
  const variants = {
    fadeIn: fastFadeIn,
    slideIn: fastSlideIn,
    scale: fastScale,
  }

  const selectedVariant = variants[variant]

  return (
    <motion.div
      className={className}
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      transition={{ ...selectedVariant.transition, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}
