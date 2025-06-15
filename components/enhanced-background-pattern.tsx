"use client"

import { motion } from "framer-motion"

interface EnhancedBackgroundPatternProps {
  className?: string
}

export function EnhancedBackgroundPattern({ className = "" }: EnhancedBackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-emerald-100/20 to-blue-100/30"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
            "linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Floating geometric shapes */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 opacity-10"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,50 50,90 10,50"
              fill="url(#patternGradient)"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="patternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
