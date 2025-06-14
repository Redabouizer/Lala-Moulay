"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function MoroccanLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <Image
        src="/images/logo copy.png"
        alt="Lala Moulay Logo"
        fill
        className="object-contain"
      />
    </motion.div>
  )
}