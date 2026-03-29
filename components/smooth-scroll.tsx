"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on("scroll", ScrollTrigger.update)

    const rafCallback = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(rafCallback)
    }
  }, [])

  return <>{children}</>
}
