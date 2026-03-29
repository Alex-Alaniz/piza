"use client"

import { useEffect, useRef } from "react"

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let frame = 0

    const observer = new ResizeObserver(([entry]) => {
      canvas.width = Math.round(entry.contentRect.width / 2)
      canvas.height = Math.round(entry.contentRect.height / 2)
    })
    observer.observe(canvas)

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255
        data[i] = v
        data[i + 1] = v
        data[i + 2] = v
        data[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)
    }

    const animate = () => {
      frame++
      if (frame % 3 === 0) generateNoise()
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.035,
        mixBlendMode: "overlay",
        zIndex: 1000,
      }}
    />
  )
}
