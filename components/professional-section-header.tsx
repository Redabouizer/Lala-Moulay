"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FastAnimation } from "@/components/fast-animations"

interface ProfessionalSectionHeaderProps {
  badge: string
  title: string
  description: string
  badgeIcon?: string
}

export function ProfessionalSectionHeader({ badge, title, description, badgeIcon }: ProfessionalSectionHeaderProps) {
  return (
    <FastAnimation variant="fadeIn" className="text-center mb-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Badge className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white border-0 mb-6 text-xl px-8 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300">
          {badgeIcon && <span className="mr-2">{badgeIcon}</span>}
          {badge}
        </Badge>
      </motion.div>

      <motion.h2
        className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent mb-8"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-2xl text-blue-800 max-w-5xl mx-auto leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </FastAnimation>
  )
}
