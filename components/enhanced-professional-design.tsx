"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ProfessionalContainerProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export function ProfessionalContainer({ children, className = "", variant = "primary" }: ProfessionalContainerProps) {
  const variants = {
    primary: "bg-gradient-to-br from-white/95 via-blue-50/90 to-emerald-50/95",
    secondary: "bg-gradient-to-br from-emerald-50/95 via-white/90 to-blue-50/95",
    accent: "bg-gradient-to-br from-blue-50/95 via-emerald-50/90 to-white/95",
  }

  return (
    <motion.div
      className={`${variants[variant]} backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl ${className}`}
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function MoroccanPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30zM0 30c0 16.569 13.431 30 30 30V0C13.431 0 0 13.431 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
