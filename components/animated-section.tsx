"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale" | "split"
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Animate all [data-animate] children with stagger
      const items = el.querySelectorAll("[data-animate]")
      const targets = items.length > 0 ? items : [el.querySelector(".section-inner") || el]

      const animations: Record<string, object> = {
        "fade-up": { y: 60, opacity: 0 },
        "slide-left": { x: -80, opacity: 0 },
        "slide-right": { x: 80, opacity: 0 },
        "scale": { scale: 0.92, opacity: 0 },
        "split": { y: 40, opacity: 0, rotationX: 8 },
      }

      gsap.from(targets, {
        ...animations[animation],
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Parallax the section content slightly on scroll past
      const inner = el.querySelector(".section-inner")
      if (inner) {
        gsap.to(inner, {
          y: -30,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [animation])

  return (
    <section
      ref={ref}
      className={`relative h-screen overflow-y-auto flex items-center snap-start snap-always ${className}`}
      id={id}
    >
      {children}
    </section>
  )
}
