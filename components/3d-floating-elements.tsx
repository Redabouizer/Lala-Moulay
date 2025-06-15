"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { type Mesh, Vector3 } from "three"
import { Float, Environment } from "@react-three/drei"

function FloatingShape({ position, color, scale = 1 }: { position: Vector3; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[0.5]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </mesh>
    </Float>
  )
}

export function Floating3DElements({ className = "" }: { className?: string }) {
  const shapes = [
    { position: new Vector3(-3, 2, -2), color: "#1e40af", scale: 0.8 },
    { position: new Vector3(3, -1, -1), color: "#059669", scale: 1.2 },
    { position: new Vector3(-2, -2, -3), color: "#d97706", scale: 0.6 },
    { position: new Vector3(2, 3, -2), color: "#dc2626", scale: 1.0 },
  ]

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  )
}
