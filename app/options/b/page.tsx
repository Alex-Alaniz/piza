"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"

/* ═══════════════════════════════════════════════════════════
   OPTION B — THE FEATURE
   Hollywood Reporter / Deadline cover story energy.
   Reads like an editorial on the most important company
   in talent management you haven't heard of. Yet.
   ═══════════════════════════════════════════════════════════ */

export default function OptionB() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <main className="relative z-10 bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)]">
        <Cover />
        <Thesis />
        <Method />
        <Profile />
        <Close />
      </main>
    </SmoothScroll>
  )
}

/* ─── COVER ────────────────────────────────────────────── */

function Cover() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from("[data-cover]", {
        opacity: 0, y: 30, duration: 1.4, ease: "power3.out", stagger: 0.14, delay: 0.3,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="min-h-screen relative flex items-end overflow-hidden">
      {/* Cigar image placeholder — full bleed */}
      <div className="absolute inset-0 bg-[oklch(0.1_0_0)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border border-dashed border-[oklch(0.95_0_0)]/6 px-20 py-12 text-center">
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/15">
              Cigar Photograph · Full Bleed
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0)] via-[oklch(0.08_0_0)]/60 to-[oklch(0.08_0_0)]/10" />
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24">
        <div className="max-w-[1300px] mx-auto">
          {/* Logo placeholder */}
          <div data-cover className="w-16 h-16 border border-dashed border-[oklch(0.6_0.25_25)]/30 flex items-center justify-center mb-10">
            <span className="font-mono text-[7px] text-[oklch(0.6_0.25_25)]/40 uppercase tracking-widest">Logo</span>
          </div>

          <h1 data-cover className="font-display text-[clamp(5rem,16vw,13rem)] leading-[0.82] mb-4">PIZA</h1>

          <div data-cover className="flex items-center gap-6 mb-6">
            <div className="w-12 h-px bg-[oklch(0.6_0.25_25)]" />
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-[oklch(0.95_0_0)]/30">
              Los Angeles · Est. 2026
            </p>
          </div>

          <p data-cover className="font-display text-[clamp(1.1rem,2.2vw,1.8rem)] text-[oklch(0.95_0_0)]/45 tracking-[0.08em] max-w-xl">
            THE NEW RULES OF TALENT.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── THE THESIS ───────────────────────────────────────── */

function Thesis() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-16 md:gap-24 items-start">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
              The Thesis
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] mb-8">
              THE OLD MODEL
              <br />
              <span className="text-[oklch(0.6_0.25_25)]">IS DEAD.</span>
            </h2>
            <p className="text-[oklch(0.95_0_0)]/45 text-lg leading-relaxed mb-6">
              Managers who return calls. Agents who take 10%. Lawyers who bill by the hour.
              That was representation 1.0 — built for a world where talent needed
              gatekeepers to access opportunity.
            </p>
            <p className="text-[oklch(0.95_0_0)]/40 text-base leading-relaxed mb-6">
              That world is gone. Creators don&apos;t need access — they need infrastructure.
              They don&apos;t need someone to open doors — they need someone to build the house.
            </p>
            <p className="text-[oklch(0.95_0_0)]/55 text-lg leading-relaxed font-medium">
              PIZA is representation 2.0: creators as media companies.
              Full infrastructure. Total ownership. No compromise.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:pt-16">
            <blockquote className="border-l-2 border-[oklch(0.6_0.25_25)] pl-6">
              <p className="font-display text-2xl md:text-3xl text-[oklch(0.95_0_0)]/60 leading-snug mb-3">
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
                As Featured in Deadline ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── THE METHOD ───────────────────────────────────────── */

function Method() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-6">
          The Method
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] mb-16">
          FOUR PILLARS. <span className="text-[oklch(0.6_0.25_25)]">ONE MACHINE.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-[oklch(0.18_0_0)] border border-[oklch(0.18_0_0)]">
          {[
            {
              num: "01",
              title: "Management",
              desc: "Career architecture for creators who've outgrown the traditional playbook. Strategic positioning, deal flow, and a team that treats your career like a business — because it is one. We map your next 3 years, then execute quarter by quarter.",
            },
            {
              num: "02",
              title: "Production",
              desc: "End-to-end creative direction. Content strategy, campaign execution, brand films, and production oversight from concept to delivery. No more juggling 6 vendors who don't talk to each other. One team. One vision. Your vision.",
            },
            {
              num: "03",
              title: "Branding",
              desc: "Your identity is your most valuable asset. We build brand systems that command premium partnerships, position you in rooms that matter, and make your name mean something beyond follower count.",
            },
            {
              num: "04",
              title: "Strategy",
              desc: "Long-term leverage. Deal structures that build equity, not just income. IP ownership, revenue diversification, business development that compounds. We don't just close deals — we build empires.",
            },
          ].map((p) => (
            <div
              key={p.num}
              className="bg-[oklch(0.08_0_0)] p-8 md:p-10 group hover:bg-[oklch(0.6_0.25_25)]/[0.03] transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.6_0.25_25)]/60">{p.num}</span>
                <div className="w-6 h-px bg-[oklch(0.6_0.25_25)]/40 group-hover:w-10 transition-all" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{p.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/35 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── THE PROFILE ──────────────────────────────────────── */

function Profile() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.6_0.25_25)] mb-8">
            The Founder
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] mb-8">
            THE FIRST LATINA DEALMAKER
            <br />
            <span className="text-[oklch(0.6_0.25_25)]">IN THE CREATOR ECONOMY.</span>
          </h2>
          <p className="text-[oklch(0.95_0_0)]/45 text-lg leading-relaxed mb-6">
            Stephanie Piza spent 15+ years at the intersection of Hollywood and digital —
            not watching from the sidelines, but closing deals in the room. She built the
            playbook the rest of the industry is still trying to reverse-engineer.
          </p>
          <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed mb-10">
            Now she&apos;s building PIZA: the management company for creators who are ready
            to stop being &ldquo;talent&rdquo; and start being a business. A curated roster.
            A selective process. And a standard that doesn&apos;t bend.
          </p>

          <div className="flex items-center gap-8">
            <div>
              <p className="font-display text-3xl text-[oklch(0.6_0.25_25)]">15+</p>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 mt-1">Years</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.2_0_0)]" />
            <div>
              <p className="font-display text-3xl text-[oklch(0.95_0_0)]/70">LA</p>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 mt-1">Based</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.2_0_0)]" />
            <div>
              <p className="font-display text-3xl text-[oklch(0.95_0_0)]/70">2026</p>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 mt-1">Founded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CLOSE ────────────────────────────────────────────── */

function Close() {
  return (
    <section className="px-8 md:px-16 py-24 md:py-32 border-t border-[oklch(0.15_0_0)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 items-end">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.85] mb-6">
              READY TO
              <br />
              <span className="text-[oklch(0.6_0.25_25)]">TALK?</span>
            </h2>
            <p className="text-[oklch(0.95_0_0)]/35 text-base leading-relaxed max-w-md">
              PIZA isn&apos;t for everyone. But if you&apos;re building something
              real and you need a team that matches your ambition — reach out.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:Stephanie@Piza.global"
              className="font-display text-3xl md:text-4xl text-[oklch(0.6_0.25_25)] hover:opacity-75 transition-opacity"
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
