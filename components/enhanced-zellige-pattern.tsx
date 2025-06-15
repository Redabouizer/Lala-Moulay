"use client"

import { motion } from "framer-motion"

interface EnhancedZelligePatternProps {
  className?: string
}

export function EnhancedZelligePattern({ className = "" }: EnhancedZelligePatternProps) {
  const createZelligeShape = (index: number) => {
    const shapes = [
      // Octagon
      "M50 10 L70 20 L80 40 L70 60 L50 70 L30 60 L20 40 L30 20 Z",
      // Star
      "M50 15 L55 35 L75 35 L60 50 L65 70 L50 55 L35 70 L40 50 L25 35 L45 35 Z",
      // Cross
      "M40 20 L60 20 L60 40 L80 40 L80 60 L60 60 L60 80 L40 80 L40 60 L20 60 L20 40 L40 40 Z",
      // Diamond
      "M50 20 L70 50 L50 80 L30 50 Z",
    ]
    return shapes[index % shapes.length]
  }

  const colors = ["url(#zelligeBlue)", "url(#zelligeGreen)", "url(#zelligeGold)", "url(#zelligeRed)"]
  const patterns = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="zelligeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="zelligeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="zelligeGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="zelligeRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {patterns.map((i) => (
            <motion.g
              key={i}
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ scale: 1, rotate: 360, opacity: 1 }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 8,
              }}
            >
              <g transform={`translate(${(i % 5) * 200}, ${Math.floor(i / 5) * 150})`}>
                <path
                  d={createZelligeShape(i)}
                  fill={colors[i % colors.length]}
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                />
              </g>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  )
}
