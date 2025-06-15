"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  glowEffect?: boolean
}

export function EnhancedCard({ children, className = "", hoverEffect = true, glowEffect = false }: EnhancedCardProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {glowEffect && (
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      )}
      <Card
        className={`bg-white/95 backdrop-blur-sm border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 relative ${glowEffect ? "group" : ""}`}
      >
        {children}
      </Card>
    </motion.div>
  )
}
