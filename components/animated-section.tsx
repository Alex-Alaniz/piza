"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  stagger?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  stagger = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (stagger) {
        const items = el.querySelectorAll("[data-animate]")
        gsap.from(items, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        })
      } else {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [stagger])

  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  )
}
