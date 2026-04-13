"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

export default function PizaV3() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 16,
        duration: 1.8,
        ease: "power4.out",
        stagger: 0.18,
        delay: 0.3,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-[oklch(0.08_0_0)] flex flex-col"
    >
      {/* Top bar */}
      <header className="flex items-center justify-between px-10 md:px-16 pt-10 md:pt-12">
        <span
          data-reveal
          className="font-mono text-[9px] tracking-[0.45em] uppercase text-[oklch(0.95_0_0)]/18"
        >
          Los Angeles
        </span>
        <span
          data-reveal
          className="font-mono text-[9px] tracking-[0.45em] uppercase text-[oklch(0.95_0_0)]/18"
        >
          Est. 2026
        </span>
      </header>

      {/* Center stage */}
      <main className="flex-1 flex flex-col items-center justify-center px-10 py-20 text-center">
        {/* Wordmark */}
        <h1
          data-reveal
          className="font-display tracking-[0.08em] mb-0 select-none"
          style={{
            fontSize: "clamp(6rem, 22vw, 20rem)",
            lineHeight: 0.88,
            color: "oklch(0.95 0 0)",
          }}
        >
          PIZA
        </h1>

        {/* Red rule */}
        <div
          data-reveal
          className="w-16 h-px bg-[oklch(0.7_0.2_45)] my-8 md:my-10"
        />

        {/* Descriptor */}
        <p
          data-reveal
          className="font-mono text-[10px] tracking-[0.55em] uppercase text-[oklch(0.95_0_0)]/28 mb-14 md:mb-18"
        >
          Talent Management
        </p>

        {/* Contact */}
        <div data-reveal className="flex flex-col items-center gap-5">
          <a
            href="mailto:Stephanie@Piza.global"
            className="font-display text-[clamp(1.4rem,3vw,2.5rem)] text-[oklch(0.95_0_0)] tracking-[0.04em] hover:text-[oklch(0.7_0.2_45)] transition-colors duration-500"
          >
            Stephanie@Piza.global
          </a>
          <a
            href="https://instagram.com/Piza.global"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/25 hover:text-[oklch(0.7_0.2_45)] transition-colors duration-500"
          >
            @Piza.global
          </a>
        </div>
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between px-10 md:px-16 pb-10 md:pb-12">
        <span
          data-reveal
          className="font-mono text-[9px] tracking-[0.45em] uppercase text-[oklch(0.95_0_0)]/12"
        >
          © 2026 PIZA.GLOBAL
        </span>
        <a
          data-reveal
          href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/15 hover:text-[oklch(0.7_0.2_45)] transition-colors"
        >
          Deadline ↗
        </a>
      </footer>
    </div>
  )
}
