"use client"

import { motion } from "framer-motion"

export function MoroccanLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer circle with zellige pattern */}
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Inner geometric pattern */}
        <motion.path
          d="M50 10 L70 30 L70 50 L50 70 L30 50 L30 30 Z"
          fill="url(#gradient2)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />

        {/* Center star */}
        <motion.path
          d="M50 25 L55 40 L70 40 L58 50 L63 65 L50 55 L37 65 L42 50 L30 40 L45 40 Z"
          fill="white"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />

        {/* Arabic calligraphy style "LM" */}
        <motion.text
          x="50"
          y="58"
          textAnchor="middle"
          className="text-xs font-bold fill-blue-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          LM
        </motion.text>

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
