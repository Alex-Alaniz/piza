"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

/* ═══════════════════════════════════════════════════════════
   OPTION D — BOLD GRID
   Bento-style grid layout. Everything organized in modular
   cells. Modern, geometric, agency-forward.
   ═══════════════════════════════════════════════════════════ */

export default function OptionD() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-cell]", {
        opacity: 0, scale: 0.96, duration: 0.8, ease: "power2.out", stagger: 0.07, delay: 0.3,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[oklch(0.06_0_0)] text-[oklch(0.95_0_0)]">
      {/* Nav */}
      <nav className="px-4 md:px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo placeholder */}
          <div className="w-8 h-8 border border-dashed border-[oklch(0.6_0.25_25)]/30 flex items-center justify-center">
            <span className="font-mono text-[7px] text-[oklch(0.6_0.25_25)]/40">P</span>
          </div>
          <span className="font-display text-lg tracking-[0.15em]">PIZA.GLOBAL</span>
        </div>
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/20">
          Los Angeles · Est. 2026
        </span>
      </nav>

      {/* Bento Grid */}
      <div className="px-3 md:px-6 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 max-w-[1400px] mx-auto">
          {/* Hero cell — spans 2 cols, 2 rows */}
          <div
            data-cell
            className="col-span-2 row-span-2 bg-[oklch(0.09_0_0)] border border-[oklch(0.16_0_0)] p-8 md:p-12 flex flex-col justify-end min-h-[50vh]"
          >
            <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/18 mb-4">
              Where Talent Meets Vision
            </p>
            <h1 className="font-display text-[clamp(5rem,14vw,10rem)] leading-[0.82] mb-3">
              PIZA
            </h1>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/25">
              Talent Management
            </p>
          </div>

          {/* Cigar image cell — spans 2 cols, 2 rows */}
          <div
            data-cell
            className="col-span-2 row-span-2 bg-[oklch(0.1_0_0)] border border-[oklch(0.16_0_0)] flex items-center justify-center min-h-[50vh] relative overflow-hidden"
          >
            <div className="border border-dashed border-[oklch(0.95_0_0)]/8 px-10 py-8 text-center">
              <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/15">
                Hero Image
              </p>
              <p className="font-mono text-[8px] tracking-[0.2em] text-[oklch(0.95_0_0)]/10 mt-2">
                Cigar photograph
              </p>
            </div>
          </div>

          {/* 4 Pillar cells */}
          {[
            { title: "Management", desc: "Career strategy for the modern creator economy." },
            { title: "Production", desc: "Content, campaigns, creative direction at scale." },
            { title: "Branding", desc: "Identity and positioning that commands attention." },
            { title: "Strategy", desc: "Deal-making and the roadmap to build leverage." },
          ].map((p) => (
            <div
              key={p.title}
              data-cell
              className="bg-[oklch(0.09_0_0)] border border-[oklch(0.16_0_0)] p-5 md:p-6 hover:border-[oklch(0.6_0.25_25)]/25 transition-colors duration-300"
            >
              <div className="w-5 h-px bg-[oklch(0.6_0.25_25)] mb-4" />
              <h3 className="font-display text-lg md:text-xl mb-2">{p.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/25 text-[11px] leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Quote cell — spans 2 cols */}
          <div
            data-cell
            className="col-span-2 bg-[oklch(0.09_0_0)] border border-[oklch(0.16_0_0)] p-6 md:p-8 flex items-center"
          >
            <blockquote>
              <p className="font-display text-2xl md:text-3xl text-[oklch(0.95_0_0)]/55 leading-snug mb-3">
                &ldquo;Representation 2.0 —{" "}
                <span className="text-[oklch(0.6_0.25_25)]">creators as media companies.</span>
                &rdquo;
              </p>
              <cite className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 not-italic">
                Stephanie Piza · Founder · 15+ Years in Hollywood &amp; Digital
              </cite>
            </blockquote>
          </div>

          {/* Contact cell — spans 2 cols */}
          <div
            data-cell
            className="col-span-2 bg-[oklch(0.09_0_0)] border border-[oklch(0.16_0_0)] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
          >
            <div className="flex flex-col gap-2">
              <a
                href="mailto:Stephanie@Piza.global"
                className="font-display text-2xl md:text-3xl text-[oklch(0.6_0.25_25)] hover:opacity-75 transition-opacity"
              >
                Stephanie@Piza.global
              </a>
              <a
                href="https://instagram.com/Piza.global"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/20 hover:text-[oklch(0.6_0.25_25)] transition-colors"
              >
                @Piza.global
              </a>
            </div>
            <a
              href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/15 hover:text-[oklch(0.6_0.25_25)] transition-colors"
            >
              As seen in Deadline ↗
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-5 flex justify-between">
        <p className="font-mono text-[9px] tracking-[0.3em] text-[oklch(0.95_0_0)]/12 uppercase">
          © 2026 PIZA.GLOBAL · Los Angeles
        </p>
        <p className="font-mono text-[9px] tracking-[0.3em] text-[oklch(0.95_0_0)]/10 uppercase">
          Management · Production · Branding · Strategy
        </p>
      </footer>
    </div>
  )
}
