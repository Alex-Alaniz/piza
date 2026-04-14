"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"

/* ═══════════════════════════════════════════════════════════
   OPTION C — THE MACHINE
   Empire-builder energy. PIZA as an operating system that
   turns creators into businesses. Aggressive, confident,
   inevitable. You're either building with us or watching.
   ═══════════════════════════════════════════════════════════ */

export default function OptionC() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <main className="relative z-10 bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)]">
        <Hero />
        <Problem />
        <System />
        <Track />
        <Join />
      </main>
    </SmoothScroll>
  )
}

/* ─── HERO ─────────────────────────────────────────────── */

function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-h]", {
        opacity: 0, y: 30, duration: 1.4, ease: "power3.out", stagger: 0.12, delay: 0.2,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden">
      {/* Atmospheric glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.25 25 / 0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1300px] mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Logo placeholder */}
          <div data-h className="w-14 h-14 border border-dashed border-[oklch(0.6_0.25_25)]/30 flex items-center justify-center mb-12">
            <span className="font-mono text-[7px] text-[oklch(0.6_0.25_25)]/40 uppercase tracking-widest">Logo</span>
          </div>

          <p data-h className="font-mono text-[10px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/25 mb-6">
            Piza · Talent Management · Los Angeles
          </p>

          <h1 data-h className="font-display text-[clamp(2.8rem,6.5vw,6rem)] leading-[0.88] mb-8">
            YOUR AUDIENCE
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">BUILT YOU.</span>
          </h1>
          <h2 data-h className="font-display text-[clamp(2.8rem,6.5vw,6rem)] leading-[0.88] mb-10 text-[oklch(0.95_0_0)]/40">
            WE BUILD
            <br />
            THE BUSINESS.
          </h2>

          <p data-h className="text-[oklch(0.95_0_0)]/40 text-lg leading-relaxed max-w-xl mb-10">
            PIZA is the management company for creators who are done being
            &ldquo;talent&rdquo; and ready to be a business. Curated roster.
            Full infrastructure. No shortcuts.
          </p>

          <a
            data-h
            href="#problem"
            className="inline-flex items-center gap-3 border border-[oklch(0.6_0.25_25)]/30 px-8 py-3.5 font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.6_0.25_25)]/70 hover:bg-[oklch(0.6_0.25_25)]/10 hover:border-[oklch(0.6_0.25_25)] transition-all"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── THE PROBLEM ──────────────────────────────────────── */

function Problem() {
  return (
    <section id="problem" className="px-8 md:px-16 py-24 md:py-32 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
              The Problem
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] mb-8">
              THE CREATOR ECONOMY HAS A
              <br />
              <span className="text-[oklch(0.6_0.25_25)]">MANAGEMENT PROBLEM.</span>
            </h2>
          </div>
          <div className="md:pt-16">
            <p className="text-[oklch(0.95_0_0)]/45 text-lg leading-relaxed mb-6">
              10 million followers. 6 revenue streams. Zero infrastructure.
            </p>
            <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed mb-6">
              Creators are running media companies with talent agency support.
              They have managers who &ldquo;check in.&rdquo; Agents who field calls.
              Lawyers who review deals. None of them are building the business.
            </p>
            <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed mb-8">
              Meanwhile, the creator is the CEO, CMO, CFO, and talent — all at once.
              That math doesn&apos;t work. And everyone pretends it does.
            </p>
            <p className="text-[oklch(0.95_0_0)]/55 text-lg leading-relaxed font-medium">
              PIZA doesn&apos;t pretend. We replace the patchwork with a machine.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-px bg-[oklch(0.18_0_0)] border border-[oklch(0.18_0_0)] mt-16">
          {[
            { stat: "$250B", label: "Creator economy by 2027" },
            { stat: "< 4%", label: "Have real business infrastructure" },
            { stat: "1", label: "Company built to fix it" },
          ].map((s) => (
            <div key={s.label} className="bg-[oklch(0.08_0_0)] p-6 md:p-8 text-center">
              <p className="font-display text-3xl md:text-4xl text-[oklch(0.6_0.25_25)] mb-2">{s.stat}</p>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── THE SYSTEM ───────────────────────────────────────── */

function System() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-6">
          The System
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] mb-6">
          FOUR PILLARS. <span className="text-[oklch(0.6_0.25_25)]">ONE OPERATING SYSTEM.</span>
        </h2>
        <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed max-w-2xl mb-16">
          Every pillar connects. Management feeds Strategy. Strategy informs Branding.
          Branding drives Production. Nothing happens in a silo. That&apos;s why it works.
        </p>

        {/* Pipeline visual */}
        <div className="flex flex-col gap-px">
          {[
            {
              num: "01",
              title: "Manage",
              desc: "Career architecture. We map your next 3 years — positioning, deal flow, partnership strategy — then execute quarter by quarter. Not check-ins. A roadmap.",
            },
            {
              num: "02",
              title: "Produce",
              desc: "In-house creative direction. Content strategy, campaign execution, brand films, production oversight. One team, one vision, zero handoffs to agencies who don't know your brand.",
            },
            {
              num: "03",
              title: "Brand",
              desc: "Identity systems that make you the category. Premium partnerships, cultural positioning, and a brand architecture that means something beyond follower count.",
            },
            {
              num: "04",
              title: "Strategize",
              desc: "Deal structures that build equity, not just income. IP ownership, revenue diversification, business development that compounds. This is how empires get built.",
            },
          ].map((p, i) => (
            <div
              key={p.num}
              className="grid md:grid-cols-[120px_1fr] gap-6 bg-[oklch(0.1_0_0)] border border-[oklch(0.16_0_0)] p-8 md:p-10 group hover:border-[oklch(0.6_0.25_25)]/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-[10px] text-[oklch(0.6_0.25_25)]/50">{p.num}</span>
                {i < 3 && (
                  <div className="hidden md:block w-px h-full bg-gradient-to-b from-[oklch(0.6_0.25_25)]/20 to-transparent" />
                )}
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-3">{p.title}</h3>
                <p className="text-[oklch(0.95_0_0)]/35 text-sm leading-relaxed max-w-xl">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TRACK RECORD ─────────────────────────────────────── */

function Track() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">
        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
            The Track Record
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] mb-8">
            BUILT BY 15 YEARS
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">AT THE TOP.</span>
          </h2>
          <p className="text-[oklch(0.95_0_0)]/45 text-base leading-relaxed mb-6">
            Stephanie Piza didn&apos;t launch a management company because it was trendy.
            She launched it because after 15 years in Hollywood and digital,
            she saw the gap between what creators need and what they&apos;re getting.
          </p>
          <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed">
            The first Latina dealmaker shaping the creator economy.
            Not a PR headline — a track record.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:pt-16">
          <blockquote className="border-l-2 border-[oklch(0.6_0.25_25)] pl-6">
            <p className="font-display text-xl md:text-2xl text-[oklch(0.95_0_0)]/60 leading-snug mb-3">
              &ldquo;REPRESENTATION 2.0 — CREATORS AS MEDIA COMPANIES.&rdquo;
            </p>
            <cite className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25 not-italic">
              Stephanie Piza · Founder
            </cite>
          </blockquote>

          <a
            href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[oklch(0.2_0_0)] px-6 py-4 hover:border-[oklch(0.6_0.25_25)]/40 transition-colors group w-fit"
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

/* ─── JOIN ─────────────────────────────────────────────── */

function Join() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-[oklch(0.15_0_0)] relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.6 0.25 25 / 0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
            The Offer
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] mb-8">
            WE DON&apos;T TAKE
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">EVERYONE.</span>
          </h2>
          <p className="text-[oklch(0.95_0_0)]/45 text-lg leading-relaxed mb-6">
            If you&apos;re a creator with real revenue, a real audience, and a real vision
            for what your business should look like — we should talk.
          </p>
          <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed mb-12">
            If you&apos;re still figuring out what you want to be when you grow up,
            we&apos;re not the right fit. No hard feelings. We&apos;ll be here when you&apos;re ready.
          </p>

          <a
            href="mailto:Stephanie@Piza.global"
            className="inline-flex items-center gap-3 bg-[oklch(0.6_0.25_25)] text-[oklch(0.08_0_0)] px-10 py-4 font-mono text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-[oklch(0.5_0.22_25)] transition-colors mb-8"
          >
            Request Introduction
          </a>

          <div className="flex flex-wrap items-center gap-8">
            <a
              href="https://instagram.com/Piza.global"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/25 hover:text-[oklch(0.6_0.25_25)] transition-colors"
            >
              @Piza.global
            </a>
          </div>
        </div>

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
