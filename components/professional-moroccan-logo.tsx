"use client"

import { motion } from "framer-motion"

interface ProfessionalMoroccanLogoProps {
  className?: string
}

export function ProfessionalMoroccanLogo({ className = "w-20 h-20" }: ProfessionalMoroccanLogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-2xl">
        {/* Outer Zellige Border with Traditional Pattern */}
        <motion.circle
          cx="60"
          cy="60"
          r="58"
          fill="none"
          stroke="url(#zelligeGradient1)"
          strokeWidth="4"
          strokeDasharray="12,6"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{
            duration: 3,
            delay: 0.5,
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        />

        {/* Traditional Moroccan Zellige Star Pattern */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Main 8-pointed Zellige Star */}
          <path
            d="M60 12 L72 36 L96 36 L78 54 L84 78 L60 66 L36 78 L42 54 L24 36 L48 36 Z"
            fill="url(#zelligeStarGradient)"
            stroke="white"
            strokeWidth="2"
          />

          {/* Inner Geometric Zellige Pattern */}
          <path
            d="M60 20 L70 40 L85 35 L75 50 L88 60 L70 55 L75 75 L60 65 L45 75 L50 55 L32 60 L45 50 L35 35 L50 40 Z"
            fill="url(#zelligeInnerGradient)"
            stroke="white"
            strokeWidth="1"
          />

          {/* Traditional Zellige Cross Pattern */}
          <path
            d="M50 50 L70 50 L70 45 L75 45 L75 55 L70 55 L70 70 L65 70 L65 55 L55 55 L55 70 L50 70 L50 55 L45 55 L45 70 L40 70 L40 55 L35 55 L35 45 L40 45 L40 50 Z"
            fill="url(#zellligeCrossGradient)"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.5"
          />
        </motion.g>

        {/* Center Moroccan Emblem */}
        <motion.circle
          cx="60"
          cy="60"
          r="18"
          fill="url(#centerZelligeGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />

        {/* Traditional Arabic-inspired "LM" with Zellige Style */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <text
            x="60"
            y="68"
            textAnchor="middle"
            className="text-lg font-bold fill-white"
            style={{ fontFamily: "serif" }}
          >
            LM
          </text>
          <text x="60" y="80" textAnchor="middle" className="text-xs fill-blue-100" style={{ fontFamily: "serif" }}>
            لالة مولاي
          </text>
        </motion.g>

        {/* Traditional Zellige Corner Decorations */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
          <motion.g
            key={index}
            initial={{ scale: 0, rotate: rotation }}
            animate={{ scale: 1, rotate: rotation }}
            transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
          >
            <path
              d="M60 6 L66 10 L60 14 L54 10 Z"
              fill="url(#zelligeAccentGradient)"
              transform={`rotate(${rotation} 60 60)`}
            />
          </motion.g>
        ))}

        {/* Zellige Geometric Border Pattern */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <motion.path
              key={index}
              d="M60 25 L65 30 L60 35 L55 30 Z"
              fill="url(#zelligePatternGradient)"
              transform={`rotate(${angle} 60 60)`}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            />
          ))}
        </motion.g>

        <defs>
          <linearGradient id="zelligeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="25%" stopColor="#059669" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="75%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          <radialGradient id="zelligeStarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>

          <linearGradient id="zelligeInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <radialGradient id="zellligeCrossGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>

          <radialGradient id="centerZelligeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#991b1b" />
          </radialGradient>

          <linearGradient id="zelligeAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="zelligePatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
