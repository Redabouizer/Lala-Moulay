"use client"

import { motion } from "framer-motion"

export function MoroccanTraditionalLogo({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className="relative w-full h-full">
        {/* Outer Zellige Border - CAN 2025 Style */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #dc2626, #f59e0b, #10b981, #3b82f6, #dc2626)",
            borderRadius: "50%",
            padding: "3px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-full h-full bg-white rounded-full shadow-2xl"></div>
        </motion.div>

        {/* Main Logo Container */}
        <div className="absolute inset-2 bg-gradient-to-br from-red-600 via-green-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
          {/* Traditional Moroccan Star Pattern */}
          <motion.div
            className="absolute inset-1 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Central Moroccan Star */}
          <motion.svg
            viewBox="0 0 100 100"
            className="w-12 h-12 text-white z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Traditional Moroccan 8-pointed star */}
            <motion.path
              d="M50 10 L60 35 L85 35 L67 50 L75 75 L50 60 L25 75 L33 50 L15 35 L40 35 Z"
              fill="white"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />

            {/* Inner geometric pattern */}
            <motion.circle
              cx="50"
              cy="50"
              r="15"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </motion.svg>

          {/* Moroccan Text */}
          <motion.div
            className="absolute bottom-2 text-white text-xs font-bold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            LM
          </motion.div>

          {/* Traditional Zellige Corner Elements */}
          {[0, 90, 180, 270].map((rotation, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 bg-yellow-400 rounded-sm shadow-lg"
              style={{
                top: "15%",
                left: "50%",
                transformOrigin: "0 170%",
                transform: `rotate(${rotation}deg) translateX(-50%)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [rotation, rotation + 360, rotation],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Moroccan Flag Colors Accent */}
          <motion.div
            className="absolute inset-3 rounded-full border-2 border-green-400 opacity-60"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Traditional Moroccan Pattern Overlay */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20zM0 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
