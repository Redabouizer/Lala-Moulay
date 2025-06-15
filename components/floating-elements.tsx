"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [elements, setElements] = useState<{ x: number; y: number; size: number; rotate: number; delay: number }[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements = Array.from({ length: 15 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 5,
        rotate: Math.random() * 360,
        delay: Math.random() * 5,
      }))
      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-200/50"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            rotate: `${element.rotate}deg`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}
