"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const elements = Array.from({ length: 8 }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full"
          style={{
            background: `linear-gradient(45deg, ${
              i % 3 === 0 ? "#1e40af" : i % 3 === 1 ? "#059669" : "#d97706"
            }, transparent)`,
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            x: mousePosition.x * 0.01 * (i + 1),
            y: mousePosition.y * 0.01 * (i + 1),
            rotate: 360,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        />
      ))}
    </div>
  )
}
