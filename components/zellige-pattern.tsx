"use client"

import { motion } from "framer-motion"

export function ZelligePattern({ className = "" }: { className?: string }) {
  const patterns = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        {patterns.map((i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32"
            style={{
              left: `${(i % 4) * 25}%`,
              top: `${Math.floor(i / 4) * 33}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 5,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="#1e40af" strokeWidth="1" opacity="0.3" />
              <circle cx="50" cy="50" r="15" fill="#059669" opacity="0.2" />
              <path d="M35 35 L65 35 L65 65 L35 65 Z" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.3" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
