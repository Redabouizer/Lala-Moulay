"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OptimizedVideoShowcaseProps {
  src: string
  title: string
  description: string
  className?: string
}

export function OptimizedVideoShowcase({ src, title, description, className = "" }: OptimizedVideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-900/10 to-emerald-900/10 backdrop-blur-sm border border-white/10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={src}
          muted={isMuted}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          poster="/placeholder.svg?height=848&width=544"
        />

        {/* Simplified Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute bottom-4 right-4">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={toggleMute}
                className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={togglePlay}
                className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Simplified Play Button */}
        {!isPlaying && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.button
              onClick={togglePlay}
              className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6 text-blue-900 ml-1" fill="currentColor" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
