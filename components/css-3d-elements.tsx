"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CSS3DElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const shapes = [
    { size: 60, color: "from-blue-500 to-blue-700", delay: 0, x: 10, y: 20 },
    { size: 80, color: "from-emerald-500 to-emerald-700", delay: 1, x: 80, y: 60 },
    { size: 50, color: "from-amber-500 to-amber-700", delay: 2, x: 20, y: 80 },
    { size: 70, color: "from-red-500 to-red-700", delay: 3, x: 90, y: 30 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${shape.color} opacity-20`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            borderRadius: "30%",
            transform: "perspective(1000px) rotateX(45deg) rotateY(45deg)",
          }}
          animate={{
            x: mousePosition.x * (index + 1) * 0.5,
            y: mousePosition.y * (index + 1) * 0.5,
            rotateX: [45, 65, 45],
            rotateY: [45, 25, 45],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 20 },
            y: { type: "spring", stiffness: 50, damping: 20 },
            rotateX: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotateY: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotateZ: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        />
      ))}
    </div>
  )
}
