"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"

/* ═══════════════════════════════════════════════════════════
   OPTION A — CLASSIC
   Traditional agency layout: hero → about + pillars → contact.
   Safe, professional, timeless.
   ═══════════════════════════════════════════════════════════ */

export default function OptionA() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <main className="relative z-10 bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)]">
        <Nav />
        <Hero />
        <About />
        <Contact />
      </main>
    </SmoothScroll>
  )
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[oklch(0.08_0_0)]/80 border-b border-[oklch(0.2_0_0)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo placeholder */}
          <div className="w-9 h-9 border border-dashed border-[oklch(0.6_0.25_25)]/40 flex items-center justify-center">
            <span className="font-mono text-[7px] text-[oklch(0.6_0.25_25)]/50 uppercase">P</span>
          </div>
          <span className="font-display text-lg tracking-[0.15em]">PIZA</span>
        </div>
        <a
          href="mailto:Stephanie@Piza.global"
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/30 hover:text-[oklch(0.6_0.25_25)] transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0, y: 24, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 0.2,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Logo placeholder */}
      <div data-reveal className="w-28 h-28 border border-dashed border-[oklch(0.6_0.25_25)]/25 flex items-center justify-center mb-10">
        <span className="font-mono text-[8px] tracking-[0.2em] text-[oklch(0.6_0.25_25)]/40 uppercase">Red Logo</span>
      </div>

      <h1 data-reveal className="font-display text-[clamp(5rem,18vw,14rem)] leading-[0.85] mb-4">
        PIZA
      </h1>
      <p data-reveal className="font-mono text-[10px] tracking-[0.5em] uppercase text-[oklch(0.95_0_0)]/25 mb-6">
        Talent Management · Los Angeles
      </p>
      <p data-reveal className="font-display text-[clamp(1.2rem,2.5vw,2rem)] text-[oklch(0.95_0_0)]/55 tracking-[0.1em] mb-14">
        WHERE TALENT MEETS VISION
      </p>
      <a
        data-reveal
        href="#about"
        className="inline-flex items-center gap-3 border border-[oklch(0.95_0_0)]/15 px-8 py-3.5 font-mono text-[10px] tracking-[0.2em] uppercase hover:border-[oklch(0.6_0.25_25)] hover:text-[oklch(0.6_0.25_25)] transition-colors"
      >
        Discover
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-3" aria-hidden="true">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/15">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[oklch(0.95_0_0)]/12 to-transparent" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
        {/* Copy */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.6_0.25_25)] border border-[oklch(0.6_0.25_25)]/25 px-3.5 py-1.5 inline-block mb-8">
            Est. 2026
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] mb-6">
            BUILT FOR THE
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">NEXT GENERATION</span>
            <br />
            OF TALENT
          </h2>
          <p className="text-[oklch(0.95_0_0)]/45 text-base leading-relaxed mb-10">
            Founded by Stephanie Piza — 15+ years at the intersection of Hollywood and digital.
            The first Latina dealmaker shaping the creator economy. PIZA represents artists
            who are ready to own their narrative and build their business.
          </p>
          <blockquote className="border-l-2 border-[oklch(0.6_0.25_25)] pl-6">
            <p className="text-[oklch(0.95_0_0)]/65 italic text-lg leading-snug mb-2">
              &ldquo;Representation 2.0 — creators as media companies.&rdquo;
            </p>
            <cite className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25 not-italic">
              Stephanie Piza · Founder
            </cite>
          </blockquote>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 gap-px bg-[oklch(0.2_0_0)]">
          {[
            { title: "Management", desc: "Career strategy and talent representation built for the modern creator economy." },
            { title: "Production", desc: "From concept to execution — content, campaigns, and creative direction at every scale." },
            { title: "Branding", desc: "Identity systems, partnerships, and positioning that command attention and command rooms." },
            { title: "Strategy", desc: "Deal-making, business development, and the long-term roadmap to build real leverage." },
          ].map((p) => (
            <div key={p.title} className="bg-[oklch(0.08_0_0)] p-6 md:p-8 hover:bg-[oklch(0.6_0.25_25)]/[0.03] transition-colors">
              <div className="w-8 h-0.5 bg-[oklch(0.6_0.25_25)] mb-5" />
              <h3 className="font-display text-2xl md:text-3xl mb-3">{p.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/35 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-[1100px] mx-auto border-t border-[oklch(0.2_0_0)] pt-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end mb-16">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.85] mb-8">
              LET&apos;S
              <br />
              <span className="text-[oklch(0.6_0.25_25)]">CONNECT.</span>
            </h2>
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25 mb-2">
                  Email
                </p>
                <a
                  href="mailto:Stephanie@Piza.global"
                  className="font-display text-2xl text-[oklch(0.6_0.25_25)] hover:opacity-75 transition-opacity"
                >
                  Stephanie@Piza.global
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25 mb-2">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/Piza.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl text-[oklch(0.95_0_0)]/50 hover:text-[oklch(0.6_0.25_25)] transition-colors"
                >
                  @Piza.global
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 hover:text-[oklch(0.6_0.25_25)] transition-colors"
          >
            As seen in Deadline ↗
          </a>
        </div>
        <div className="border-t border-[oklch(0.15_0_0)] pt-6 flex flex-wrap justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/15 uppercase">
            © 2026 PIZA.GLOBAL · Los Angeles
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/12 uppercase">
            Management · Production · Branding · Strategy
          </p>
        </div>
      </div>
    </section>
  )
}
