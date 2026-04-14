"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

/* ═══════════════════════════════════════════════════════════
   OPTION C — MINIMAL
   Single screen, no scrolling. Everything on one viewport.
   Luxury digital business card.
   ═══════════════════════════════════════════════════════════ */

export default function OptionC() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0, y: 14, duration: 1.6, ease: "power4.out", stagger: 0.14, delay: 0.4,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      className="h-screen bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)] flex flex-col overflow-hidden"
    >
      {/* Top bar */}
      <header className="flex items-center justify-between px-8 md:px-16 pt-8 md:pt-10 shrink-0">
        <span
          data-reveal
          className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/18"
        >
          Los Angeles
        </span>
        <span
          data-reveal
          className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/18"
        >
          Est. 2026
        </span>
      </header>

      {/* Center stage */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center min-h-0">
        {/* Logo placeholder */}
        <div
          data-reveal
          className="w-14 h-14 border border-dashed border-[oklch(0.6_0.25_25)]/25 flex items-center justify-center mb-8"
        >
          <span className="font-mono text-[7px] text-[oklch(0.6_0.25_25)]/40 uppercase tracking-widest">
            Logo
          </span>
        </div>

        {/* Wordmark */}
        <h1
          data-reveal
          className="font-display tracking-[0.08em] select-none"
          style={{ fontSize: "clamp(5.5rem, 20vw, 18rem)", lineHeight: 0.88 }}
        >
          PIZA
        </h1>

        {/* Red rule */}
        <div data-reveal className="w-16 h-px bg-[oklch(0.6_0.25_25)] my-7 md:my-9" />

        {/* Tagline */}
        <p
          data-reveal
          className="font-mono text-[10px] tracking-[0.55em] uppercase text-[oklch(0.95_0_0)]/25 mb-5"
        >
          Talent Management
        </p>

        {/* Quote */}
        <p
          data-reveal
          className="font-display text-[clamp(1rem,2vw,1.5rem)] text-[oklch(0.95_0_0)]/35 tracking-[0.06em] mb-8 max-w-xl"
        >
          &ldquo;REPRESENTATION 2.0 —{" "}
          <span className="text-[oklch(0.6_0.25_25)]/60">CREATORS AS MEDIA COMPANIES.</span>&rdquo;
        </p>

        {/* Pillars — subtle horizontal */}
        <div data-reveal className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {["Management", "Production", "Branding", "Strategy"].map((p) => (
            <span
              key={p}
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/15"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Contact */}
        <div data-reveal className="flex flex-col items-center gap-4">
          <a
            href="mailto:Stephanie@Piza.global"
            className="font-display text-[clamp(1.3rem,3vw,2.5rem)] tracking-[0.04em] hover:text-[oklch(0.6_0.25_25)] transition-colors duration-500"
          >
            Stephanie@Piza.global
          </a>
          <a
            href="https://instagram.com/Piza.global"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/20 hover:text-[oklch(0.6_0.25_25)] transition-colors duration-500"
          >
            @Piza.global
          </a>
        </div>
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between px-8 md:px-16 pb-8 md:pb-10 shrink-0">
        <span
          data-reveal
          className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/12"
        >
          © 2026 PIZA.GLOBAL
        </span>
        <a
          data-reveal
          href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/15 hover:text-[oklch(0.6_0.25_25)] transition-colors"
        >
          Deadline ↗
        </a>
      </footer>
    </div>
  )
}
