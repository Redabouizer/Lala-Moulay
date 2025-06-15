"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import type { Mesh } from "three"
import { Text3D, Center, Float, Environment } from "@react-three/drei"

function Logo3D() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Center>
        <Text3D
          ref={meshRef}
          font="/fonts/Geist_Bold.json"
          size={1.5}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          LM
          <meshStandardMaterial color={hovered ? "#10b981" : "#1e40af"} metalness={0.8} roughness={0.2} />
        </Text3D>
      </Center>
    </Float>
  )
}

export function Logo3DCanvas({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Logo3D />
      </Canvas>
    </div>
  )
}
