"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"

/* ═══════════════════════════════════════════════════════════
   OPTION B — EDITORIAL
   Magazine-style pacing: full-bleed hero image, dramatic
   pull quote, horizontal pillars strip. Cinematic.
   ═══════════════════════════════════════════════════════════ */

export default function OptionB() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <main className="relative z-10 bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)]">
        <Hero />
        <Content />
        <Footer />
      </main>
    </SmoothScroll>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        opacity: 0, y: 30, duration: 1.4, ease: "power3.out", stagger: 0.15, delay: 0.3,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="min-h-screen relative flex items-end overflow-hidden">
      {/* Cigar image placeholder — full bleed background */}
      <div className="absolute inset-0 bg-[oklch(0.1_0_0)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border border-dashed border-[oklch(0.95_0_0)]/8 px-16 py-10 text-center">
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/18">
              Hero Image
            </p>
            <p className="font-mono text-[8px] tracking-[0.2em] text-[oklch(0.95_0_0)]/12 mt-2">
              Cigar photograph — full bleed
            </p>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0)] via-[oklch(0.08_0_0)]/50 to-[oklch(0.08_0_0)]/20" />
      </div>

      {/* Content at bottom */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Logo placeholder */}
          <div data-hero className="w-20 h-20 border border-dashed border-[oklch(0.6_0.25_25)]/30 flex items-center justify-center mb-10">
            <span className="font-mono text-[7px] tracking-[0.15em] text-[oklch(0.6_0.25_25)]/40 uppercase">
              Logo
            </span>
          </div>

          <h1 data-hero className="font-display text-[clamp(6rem,20vw,16rem)] leading-[0.82] mb-6">
            PIZA
          </h1>

          <div data-hero className="flex items-center gap-6 mb-4">
            <div className="w-12 h-px bg-[oklch(0.6_0.25_25)]" />
            <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-[oklch(0.95_0_0)]/30">
              Talent Management · Los Angeles
            </p>
          </div>

          <p data-hero className="font-display text-[clamp(1.1rem,2vw,1.6rem)] text-[oklch(0.95_0_0)]/40 tracking-[0.12em]">
            WHERE TALENT MEETS VISION
          </p>
        </div>
      </div>
    </section>
  )
}

function Content() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        {/* Pull quote */}
        <blockquote className="mb-20 md:mb-28 max-w-4xl">
          <p className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-[oklch(0.95_0_0)]/65">
            &ldquo;REPRESENTATION 2.0 —
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">CREATORS AS MEDIA COMPANIES.</span>&rdquo;
          </p>
          <cite className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/25 not-italic mt-6 block">
            Stephanie Piza · Founder · 15+ Years in Hollywood &amp; Digital
          </cite>
        </blockquote>

        {/* About blurb */}
        <p className="text-[oklch(0.95_0_0)]/40 text-lg leading-relaxed max-w-2xl mb-20 md:mb-28">
          Founded by Stephanie Piza — the first Latina dealmaker shaping the creator economy.
          PIZA represents artists who are ready to own their narrative and build their business.
        </p>

        {/* 4 Pillars — horizontal strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[oklch(0.2_0_0)] border border-[oklch(0.2_0_0)]">
          {[
            { title: "Management", desc: "Career strategy for the modern creator economy." },
            { title: "Production", desc: "Content, campaigns, and creative direction at scale." },
            { title: "Branding", desc: "Identity and positioning that commands attention." },
            { title: "Strategy", desc: "Deal-making and long-term leverage." },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-[oklch(0.08_0_0)] p-6 md:p-8 hover:bg-[oklch(0.6_0.25_25)]/[0.03] transition-colors"
            >
              <div className="w-6 h-px bg-[oklch(0.6_0.25_25)] mb-4" />
              <h3 className="font-display text-xl md:text-2xl mb-2">{p.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/30 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-8 md:px-16 py-16 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div>
            <a
              href="mailto:Stephanie@Piza.global"
              className="font-display text-3xl md:text-4xl text-[oklch(0.6_0.25_25)] hover:opacity-75 transition-opacity block mb-4"
            >
              Stephanie@Piza.global
            </a>
            <a
              href="https://instagram.com/Piza.global"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/25 hover:text-[oklch(0.6_0.25_25)] transition-colors"
            >
              @Piza.global
            </a>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 md:pt-2">
            <a
              href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 hover:text-[oklch(0.6_0.25_25)] transition-colors"
            >
              As seen in Deadline ↗
            </a>
          </div>
        </div>
        <div className="border-t border-[oklch(0.12_0_0)] pt-6 flex flex-wrap justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[oklch(0.95_0_0)]/12 uppercase">
            © 2026 PIZA.GLOBAL · Los Angeles
          </p>
          <p className="font-mono text-[9px] tracking-[0.2em] text-[oklch(0.95_0_0)]/10 uppercase">
            Management · Production · Branding · Strategy
          </p>
        </div>
      </div>
    </footer>
  )
}
