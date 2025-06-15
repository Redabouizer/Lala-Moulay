"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoShowcaseProps {
  src: string
  title: string
  description: string
  className?: string
}

export function VideoShowcase({ src, title, description, className = "" }: VideoShowcaseProps) {
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-900/20 to-emerald-900/20 backdrop-blur-sm border border-white/20">
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

        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-sm opacity-90">{description}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={toggleMute}
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={togglePlay}
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Play Button Overlay */}
        {!isPlaying && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={togglePlay}
              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-8 h-8 text-blue-900 ml-1" fill="currentColor" />
            </motion.button>
          </motion.div>
        )}

        {/* Decorative Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-500/50 via-emerald-500/50 to-amber-500/50 pointer-events-none"></div>
      </div>
    </motion.div>
  )
}
