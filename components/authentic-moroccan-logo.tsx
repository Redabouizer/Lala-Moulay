"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AuthenticMoroccanLogoProps {
  className?: string
}

export function AuthenticMoroccanLogo({ className = "w-20 h-20" }: AuthenticMoroccanLogoProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className="relative w-full h-full">
        {/* Outer rotating golden border */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #d4af37, #ffd700, #b8860b, #daa520, #d4af37)",
            borderRadius: "50%",
            padding: "2px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-full h-full bg-white rounded-full shadow-2xl"></div>
        </motion.div>

        {/* Main logo container with authentic design */}
        <div className="absolute inset-1 rounded-full overflow-hidden shadow-2xl">
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/images/lala-moulay-logo.jpg"
              alt="Lala Moulay Logo"
              fill
              className="object-cover rounded-full"
            />

            {/* Overlay for better text visibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-full"></div>
          </motion.div>
        </div>

        {/* Decorative corner elements inspired by the original */}
        {[0, 90, 180, 270].map((rotation, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-sm shadow-lg"
            style={{
              top: "8%",
              left: "50%",
              transformOrigin: "0 250%",
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

        {/* Additional geometric pattern overlay */}
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-yellow-400/30 opacity-60"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}
