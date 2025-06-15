"use client"

import { motion } from "framer-motion"

export function ProfessionalLogoAnimated({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className="relative w-full h-full">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 via-emerald-500 to-amber-500"
          style={{
            background: "conic-gradient(from 0deg, #3b82f6, #10b981, #f59e0b, #3b82f6)",
            borderRadius: "50%",
            padding: "2px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-full h-full bg-white rounded-full"></div>
        </motion.div>

        {/* Inner content */}
        <div className="absolute inset-2 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
          {/* Geometric pattern */}
          <motion.div
            className="absolute inset-1 rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Center text */}
          <motion.div
            className="text-white font-bold text-lg z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            LM
          </motion.div>

          {/* Decorative elements */}
          {[0, 90, 180, 270].map((rotation, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: "10%",
                left: "50%",
                transformOrigin: "0 200%",
                transform: `rotate(${rotation}deg) translateX(-50%)`,
              }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
