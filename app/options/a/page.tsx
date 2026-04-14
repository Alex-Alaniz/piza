"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"

/* ═══════════════════════════════════════════════════════════
   OPTION A — THE VELVET ROPE
   Exclusive club energy. "By introduction only."
   Makes you feel like you're on the outside looking in.
   ═══════════════════════════════════════════════════════════ */

export default function OptionA() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <main className="relative z-10 bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)]">
        <Nav />
        <Hero />
        <Standard />
        <Founder />
        <TheAsk />
      </main>
    </SmoothScroll>
  )
}

/* ─── NAV ──────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[oklch(0.08_0_0)]/80 border-b border-[oklch(0.15_0_0)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo placeholder */}
          <div className="w-9 h-9 border border-dashed border-[oklch(0.6_0.25_25)]/40 flex items-center justify-center">
            <span className="font-mono text-[7px] text-[oklch(0.6_0.25_25)]/50 uppercase">P</span>
          </div>
          <span className="font-display text-lg tracking-[0.15em]">PIZA</span>
        </div>
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/20">
          By Introduction Only
        </span>
      </div>
    </nav>
  )
}

/* ─── HERO ─────────────────────────────────────────────── */

function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0, y: 28, duration: 1.4, ease: "power3.out", stagger: 0.12, delay: 0.2,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Atmospheric red glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.25 25 / 0.06) 0%, transparent 70%)" }}
      />

      {/* Logo placeholder */}
      <div data-reveal className="w-24 h-24 border border-dashed border-[oklch(0.6_0.25_25)]/25 flex items-center justify-center mb-10">
        <span className="font-mono text-[8px] tracking-[0.15em] text-[oklch(0.6_0.25_25)]/40 uppercase">Red Logo</span>
      </div>

      <h1 data-reveal className="font-display text-[clamp(5rem,18vw,14rem)] leading-[0.85] mb-6">PIZA</h1>

      <p data-reveal className="font-display text-[clamp(1rem,2.2vw,1.6rem)] text-[oklch(0.95_0_0)]/50 tracking-[0.12em] max-w-2xl mb-8 leading-relaxed">
        THE MOST SELECTIVE MANAGEMENT COMPANY
        <br />
        IN THE <span className="text-[oklch(0.6_0.25_25)]">CREATOR ECONOMY.</span>
      </p>

      <p data-reveal className="font-mono text-[9px] tracking-[0.5em] uppercase text-[oklch(0.95_0_0)]/20 mb-14">
        By Introduction Only · Los Angeles
      </p>

      <a
        data-reveal
        href="#standard"
        className="border border-[oklch(0.6_0.25_25)]/30 px-10 py-3.5 font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.6_0.25_25)]/70 hover:bg-[oklch(0.6_0.25_25)]/10 hover:border-[oklch(0.6_0.25_25)] transition-all"
      >
        Enter
      </a>
    </section>
  )
}

/* ─── THE STANDARD ─────────────────────────────────────── */

function Standard() {
  return (
    <section id="standard" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        {/* Manifesto */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
            The Standard
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] mb-8">
            NOT EVERYONE GETS A SEAT
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">AT THIS TABLE.</span>
          </h2>
          <p className="text-[oklch(0.95_0_0)]/45 text-lg leading-relaxed mb-6">
            PIZA represents a curated roster of creators who have outgrown traditional management.
            We don&apos;t take meetings — we accept introductions. We don&apos;t pitch — we build.
          </p>
          <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed">
            Every creator on our roster has one thing in common: they were ready to stop being
            &ldquo;talent&rdquo; and start being a business. If that sounds like you,
            keep reading. If it doesn&apos;t, this page isn&apos;t for you.
          </p>
        </div>

        {/* What you get when you're in */}
        <div className="mb-8">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/25 mb-6">
            What you get when you&apos;re in
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[oklch(0.18_0_0)] border border-[oklch(0.18_0_0)]">
          {[
            {
              title: "Management",
              desc: "A dedicated career architect — not a shared assistant checking in once a month. We map your next 3 years, then execute quarter by quarter.",
            },
            {
              title: "Production",
              desc: "In-house creative direction from concept to delivery. Content strategy, campaign execution, brand films. No more juggling 6 vendors who don't talk to each other.",
            },
            {
              title: "Branding",
              desc: "Your identity is your most valuable asset. We build brand systems that command premium partnerships and position you in rooms that matter.",
            },
            {
              title: "Strategy",
              desc: "Deal structures that build equity, not just income. IP ownership. Revenue diversification. Business development that compounds. We don't just close deals — we build leverage.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-[oklch(0.08_0_0)] p-8 md:p-10 group hover:bg-[oklch(0.6_0.25_25)]/[0.03] transition-colors"
            >
              <div className="w-8 h-0.5 bg-[oklch(0.6_0.25_25)] mb-6 group-hover:w-12 transition-all" />
              <h3 className="font-display text-2xl md:text-3xl mb-4">{p.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/35 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── THE FOUNDER ──────────────────────────────────────── */

function Founder() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">
        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
            The Founder
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] mb-8">
            BUILT BY SOMEONE WHO&apos;S BEEN
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">IN THE ROOM.</span>
          </h2>
          <p className="text-[oklch(0.95_0_0)]/45 text-base leading-relaxed mb-6">
            Stephanie Piza didn&apos;t read about Hollywood — she worked it. 15+ years at the
            intersection of entertainment and digital, building the playbook that the rest of
            the industry is still trying to figure out.
          </p>
          <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed">
            The first Latina dealmaker shaping the creator economy. Not a title she asked for —
            a position she earned by doing the work no one else would.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Credibility markers */}
          <div className="border-l-2 border-[oklch(0.6_0.25_25)] pl-6">
            <p className="font-display text-[oklch(0.95_0_0)]/65 text-xl md:text-2xl leading-snug mb-3">
              &ldquo;REPRESENTATION 2.0 — CREATORS AS MEDIA COMPANIES.&rdquo;
            </p>
            <cite className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25 not-italic">
              Stephanie Piza · Founder
            </cite>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-display text-4xl text-[oklch(0.6_0.25_25)] mb-1">15+</p>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25">Years in the industry</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[oklch(0.6_0.25_25)] mb-1">2026</p>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25">Est. Los Angeles</p>
            </div>
          </div>

          <a
            href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 border border-[oklch(0.2_0_0)] px-6 py-4 hover:border-[oklch(0.6_0.25_25)]/40 transition-colors group"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[oklch(0.95_0_0)]/30 group-hover:text-[oklch(0.6_0.25_25)] transition-colors">
              Read the Deadline Feature ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── THE ASK ──────────────────────────────────────────── */

function TheAsk() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[oklch(0.15_0_0)] relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.6 0.25 25 / 0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
            The Ask
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.88] mb-8">
            IF YOU&apos;RE READY,
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">WE&apos;LL KNOW.</span>
          </h2>
          <p className="text-[oklch(0.95_0_0)]/40 text-base leading-relaxed mb-12">
            We don&apos;t do cold outreach. We don&apos;t do open applications.
            If you think you belong on this roster, request an introduction.
            If we agree, we&apos;ll build something together.
          </p>

          <a
            href="mailto:Stephanie@Piza.global"
            className="inline-flex items-center gap-3 bg-[oklch(0.6_0.25_25)] text-[oklch(0.08_0_0)] px-10 py-4 font-mono text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-[oklch(0.5_0.22_25)] transition-colors mb-10"
          >
            Request Introduction
          </a>

          <div className="flex flex-col items-center gap-3">
            <a
              href="https://instagram.com/Piza.global"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[9px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/20 hover:text-[oklch(0.6_0.25_25)] transition-colors"
            >
              @Piza.global
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[oklch(0.12_0_0)] mt-20 pt-6 flex flex-wrap justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[oklch(0.95_0_0)]/12 uppercase">
            © 2026 PIZA.GLOBAL · Los Angeles
          </p>
          <p className="font-mono text-[9px] tracking-[0.2em] text-[oklch(0.95_0_0)]/10 uppercase">
            Management · Production · Branding · Strategy
          </p>
        </div>
      </div>
    </section>
  )
}
