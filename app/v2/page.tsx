"use client"

import { useEffect, useRef } from "react"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"
import { gsap } from "@/lib/gsap"

export default function PizaV2() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <main className="relative z-10 bg-[oklch(0.08_0_0)]">
        <Nav />
        <Cover />
        <Pull />
        <Editorial />
        <Roster />
        <End />
      </main>
    </SmoothScroll>
  )
}

/* ─── NAV ──────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
        <span className="font-display text-xl tracking-[0.2em] text-white">PIZA.GLOBAL</span>
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/60">
          Talent Management
        </span>
      </div>
    </nav>
  )
}

/* ─── COVER — full-bleed hero ──────────────────────────── */

function Cover() {
  const ref = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      // Entrance
      gsap.from(textRef.current, { opacity: 0, y: 32, duration: 1.6, ease: "power3.out", delay: 0.2 })
      // Parallax on img
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          y: "20%",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1 },
        })
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Full-bleed atmospheric background */}
      <div ref={imgRef} className="absolute inset-[-10%] pointer-events-none select-none">
        <img
          src="/blueprint/master-dark.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
        />
        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0_0)]/60 via-transparent to-[oklch(0.05_0_0)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0_0)]/30 via-transparent to-[oklch(0.08_0_0)]/30" />
      </div>

      {/* Red accent line — top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[oklch(0.7_0.2_45)]" />

      <div ref={textRef} className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-[oklch(0.95_0_0)]/30 mb-5">
            Los Angeles · Est. 2026
          </p>
          <h1 className="font-display text-[clamp(5rem,18vw,16rem)] leading-[0.82] mb-8 tracking-[0.02em]">
            PIZA<span className="text-[oklch(0.7_0.2_45)]">.</span>
          </h1>
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-[oklch(0.95_0_0)]/10 pt-6">
            <p className="font-display text-[clamp(1.1rem,2.5vw,1.75rem)] text-[oklch(0.95_0_0)]/55 max-w-xl leading-[1.1]">
              Where Talent Meets Vision
            </p>
            <a
              href="#story"
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.7_0.2_45)] border border-[oklch(0.7_0.2_45)]/30 px-5 py-3 hover:bg-[oklch(0.7_0.2_45)]/10 transition-colors"
            >
              Read More ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PULL QUOTE ───────────────────────────────────────── */

function Pull() {
  return (
    <section id="story" className="relative py-24 md:py-36 px-8 md:px-16 overflow-hidden">
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 font-display text-[22vw] leading-none text-[oklch(0.95_0_0)]/[0.018] pointer-events-none select-none">
        SP
      </div>
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="w-12 h-px bg-[oklch(0.7_0.2_45)] mb-10" />
        <blockquote>
          <p className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.05] text-[oklch(0.95_0_0)]/85 mb-10">
            &ldquo;Representation 2.0 — I see creators not as influencers, but as
            media companies. PIZA exists to build that business around them.&rdquo;
          </p>
          <footer className="flex items-center gap-5">
            <div className="w-8 h-px bg-[oklch(0.25_0_0)]" />
            <cite className="not-italic font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/35">
              Stephanie Piza · Founder & CEO
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

/* ─── EDITORIAL GRID ───────────────────────────────────── */

function Editorial() {
  const pillars = [
    {
      num: "I",
      title: "Management",
      body: "Career strategy and deal-making at the highest level. We negotiate, represent, and protect our talent across every medium and market.",
    },
    {
      num: "II",
      title: "Production",
      body: "From concept to final cut — content strategy, campaign execution, and creative direction for the modern creator.",
    },
    {
      num: "III",
      title: "Branding",
      body: "Identity systems and positioning that command rooms. We build brands that outlast the moment.",
    },
    {
      num: "IV",
      title: "Strategy",
      body: "Long-term roadmaps, business development, and the structures that turn influence into ownership.",
    },
  ]

  return (
    <section className="px-8 md:px-16 pb-24 md:pb-36">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex items-baseline justify-between border-t border-[oklch(0.25_0_0)] pt-6 mb-0">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/25">
            Services
          </span>
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/15">
            04 Pillars
          </span>
        </div>

        {/* Editorial list — magazine-style rows */}
        <div className="divide-y divide-[oklch(0.2_0_0)]">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 items-start py-10 md:py-12 group"
            >
              <span className="font-display text-[3.5rem] text-[oklch(0.7_0.2_45)] leading-none opacity-60 group-hover:opacity-100 transition-opacity">
                {p.num}
              </span>
              <h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.88] self-center">
                {p.title.toUpperCase()}
              </h3>
              <p className="text-[oklch(0.95_0_0)]/45 leading-relaxed text-base md:text-lg self-center">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── ROSTER / ABOUT ───────────────────────────────────── */

function Roster() {
  return (
    <section className="px-8 md:px-16 pb-24 md:pb-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left — image/texture panel */}
          <div className="relative h-64 md:h-auto min-h-[400px] overflow-hidden bg-[oklch(0.10_0_0)] border border-[oklch(0.2_0_0)]">
            <img
              src="/blueprint/org-chart.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
              <span
                className="font-display text-[7rem] md:text-[10rem] leading-none text-[oklch(0.7_0.2_45)]"
                style={{ textShadow: "0 0 80px oklch(0.7 0.2 45 / 0.3)" }}
              >
                SP
              </span>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/25 mt-3">
                Stephanie Piza · Founder
              </p>
            </div>
          </div>

          {/* Right — bio */}
          <div className="border border-[oklch(0.2_0_0)] border-l-0 p-10 md:p-14 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.7_0.2_45)] mb-8">
                About the Founder
              </p>
              <p className="text-[oklch(0.95_0_0)]/55 leading-relaxed mb-6 text-base md:text-lg">
                With 15+ years at the intersection of Hollywood and the digital economy,
                Stephanie Piza is the first Latina dealmaker shaping the creator space.
              </p>
              <p className="text-[oklch(0.95_0_0)]/40 leading-relaxed mb-10">
                Previously representing Jay Versace, JC Caylen, and Kendrick Sampson —
                six-figure global partnerships across entertainment, brand, and media.
              </p>
            </div>
            <div className="border-t border-[oklch(0.2_0_0)] pt-8 space-y-3">
              <a
                href="mailto:Stephanie@Piza.global"
                className="block font-display text-2xl md:text-3xl text-[oklch(0.7_0.2_45)] hover:opacity-70 transition-opacity"
              >
                Stephanie@Piza.global
              </a>
              <a
                href="https://instagram.com/Piza.global"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-[10px] tracking-[0.25em] uppercase text-[oklch(0.95_0_0)]/30 hover:text-[oklch(0.7_0.2_45)] transition-colors"
              >
                @Piza.global on Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── END / FOOTER ─────────────────────────────────────── */

function End() {
  return (
    <footer className="px-8 md:px-16 pb-10 border-t border-[oklch(0.2_0_0)]">
      <div className="max-w-[1400px] mx-auto pt-8 flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-lg text-[oklch(0.95_0_0)]/20 tracking-[0.15em]">
          PIZA.GLOBAL
        </span>
        <div className="flex items-center gap-8">
          <a
            href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/18 hover:text-[oklch(0.7_0.2_45)] transition-colors"
          >
            Deadline ↗
          </a>
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/15">
            © 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
