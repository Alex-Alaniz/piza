"use client"

import { useEffect, useRef } from "react"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"
import AnimatedSection from "@/components/animated-section"
import ScrambleText from "@/components/scramble-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PitchPage() {
  return (
    <SmoothScroll>
      {/* Fixed layers */}
      <div className="grid-bg-fixed" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      {/* Slide navigation dots */}
      <SlideDots />

      {/* Main deck */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Problem />
        <Shift />
        <Product />
        <Machine />
        <Blueprint />
        <Partnership />
        <ForCreators />
        <ForPiza />
        <Proof />
        <Roadmap />
        <Closing />
      </div>
    </SmoothScroll>
  )
}

/* ─── SLIDE DOTS NAV ───────────────────────────────────── */

function SlideDots() {
  return (
    <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {["hero","problem","shift","product","machine","blueprint","partnership","creators","piza","proof","roadmap","closing"].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className="w-1.5 h-1.5 bg-[oklch(0.95_0_0)]/15 hover:bg-[oklch(0.7_0.2_45)] transition-colors duration-300"
          title={id}
        />
      ))}
    </nav>
  )
}

/* ─── NAV ──────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[oklch(0.08_0_0)]/80 border-b border-[oklch(0.25_0_0)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg tracking-[0.1em]">PIZA.GLOBAL</span>
          <span className="text-[oklch(0.95_0_0)]/20 font-mono text-xs">x</span>
          <span className="font-display text-lg tracking-[0.1em] text-[oklch(0.7_0.2_45)]">BEARIFIED</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#proof" className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/40 hover:text-[oklch(0.7_0.2_45)] transition-colors">Proof</a>
          <a href="#partnership" className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/40 hover:text-[oklch(0.7_0.2_45)] transition-colors">Partnership</a>
          <span className="label-badge">Confidential</span>
        </div>
      </div>
    </nav>
  )
}

/* ─── 01 HERO ──────────────────────────────────────────── */

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen overflow-y-auto flex items-center snap-start snap-always px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.03} />

      {/* Vertical label */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="vertical-label">PIZA.GLOBAL x BEARIFIED</span>
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[40vw] leading-none" style={{ color: "oklch(0.7 0.2 45 / 0.02)" }}>P</span>
      </div>

      <div ref={contentRef} className="section-inner max-w-[1200px] mx-auto w-full pt-24">
        <div className="label-badge mb-10">March 2026</div>
        <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] mb-8">
          OWN YOUR<br />
          <span className="text-[oklch(0.7_0.2_45)]">PLATFORM.</span>
        </h1>
        <p className="text-[oklch(0.95_0_0)]/40 text-lg md:text-xl max-w-lg mb-14 leading-relaxed">
          The future of creator business infrastructure.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#partnership" className="cta-primary">
            <ScrambleText text="The Partnership" /><Arrow />
          </a>
          <a href="#proof" className="cta-outline">
            <ScrambleText text="See The Proof" />
          </a>
        </div>
        <div className="mt-24 flex items-center gap-8 text-[oklch(0.95_0_0)]/15 font-mono text-[10px] tracking-[0.2em] uppercase">
          <span>Scroll to explore</span>
          <span className="w-12 h-px bg-[oklch(0.25_0_0)]" />
        </div>
      </div>
    </section>
  )
}

/* ─── 02 THE PROBLEM ───────────────────────────────────── */

function Problem() {
  return (
    <AnimatedSection id="problem" animation="fade-up" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>01 / The Problem</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-16">
          THE CEILING<br />
          <span className="text-[oklch(0.95_0_0)]/25">20M FOLLOWERS.</span><br />
          ZERO CONTROL.
        </h2>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div data-animate>
            <p className="text-[oklch(0.95_0_0)]/50 text-base md:text-lg leading-relaxed mb-10">
              Matt Rife built an empire on TikTok. Then the algorithm stopped pushing stand-up comedy.
              20 million followers — and he couldn&apos;t reach them.
            </p>
            <blockquote className="border-l-2 border-[oklch(0.7_0.2_45)] pl-6 mb-10">
              <p className="text-xl md:text-2xl italic text-[oklch(0.95_0_0)]/80 leading-snug">
                &ldquo;Why can&apos;t you show my content to my own followers?&rdquo;
              </p>
            </blockquote>
            <div className="label-badge">This isn&apos;t a bug. It&apos;s the business model.</div>
          </div>
          <div className="space-y-4" data-animate>
            {["You don't own your audience","You don't own your data","You don't own your distribution"].map((item) => (
              <div key={item} className="flex items-center gap-5 p-5 border border-[oklch(0.25_0_0)] bg-[oklch(0.12_0_0)]">
                <span className="text-red-500/80 font-mono text-xs">x</span>
                <span className="text-[oklch(0.95_0_0)]/60">{item}</span>
              </div>
            ))}
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 pt-4">
              Creators are tenants on someone else&apos;s platform.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 03 THE SHIFT ─────────────────────────────────────── */

function Shift() {
  return (
    <AnimatedSection id="shift" animation="slide-left" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>02 / The Shift</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-20">
          AI COLLAPSED THE COST<br />
          OF <span className="text-[oklch(0.7_0.2_45)]">BUILDING SOFTWARE.</span>
        </h2>
        <div className="grid md:grid-cols-2" data-animate>
          <div className="border border-[oklch(0.25_0_0)] p-8 md:p-12 bg-[oklch(0.1_0_0)]">
            <span className="font-display text-xl text-[oklch(0.95_0_0)]/30 mb-8 block">Before</span>
            <div className="space-y-5">
              {["50-person engineering team","$500K+ annual burn rate","18-month development cycles","Millions in VC funding"].map((item) => (
                <div key={item} className="flex items-center gap-4 text-[oklch(0.95_0_0)]/30">
                  <span className="w-1.5 h-1.5 bg-[oklch(0.95_0_0)]/15 shrink-0" />
                  <span className="line-through">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[oklch(0.7_0.2_45)]/20 p-8 md:p-12 bg-[oklch(0.7_0.2_45)]/[0.04]">
            <span className="font-display text-xl text-[oklch(0.7_0.2_45)] mb-8 block">Now</span>
            <div className="space-y-5">
              {["1 builder + AI agents","$1,418/mo operating cost","Weeks, not years","Revenue from day one"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-[oklch(0.7_0.2_45)] shrink-0" />
                  <span className="text-[oklch(0.95_0_0)]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 04 THE PRODUCT ───────────────────────────────────── */

function Product() {
  return (
    <AnimatedSection id="product" animation="scale" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>03 / The Product</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-4">
          THE CREATOR <span className="text-[oklch(0.7_0.2_45)]">PLATFORM</span>
        </h2>
        <p data-animate className="text-[oklch(0.95_0_0)]/40 text-lg mb-16 max-w-lg">
          Tailored to their medium. Branded to their identity. Owned by the creator.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4" data-animate>
          {[
            { n: "01", title: "Podcast App", desc: "Audio-first experience. Episodes, playlists, exclusive drops." },
            { n: "02", title: "Video App", desc: "Creator-branded streaming platform. Owned library." },
            { n: "03", title: "Publishing", desc: "Blog, newsletter, premium articles. Direct to fans." },
            { n: "04", title: "Custom App", desc: "Memberships, payments, merch, ticketing. Blockchain-ready." },
          ].map((item) => (
            <div key={item.n} className="border border-[oklch(0.25_0_0)] p-7 md:p-8 card-hover">
              <span className="font-mono text-[10px] text-[oklch(0.7_0.2_45)] tracking-[0.2em] mb-6 block">{item.n}</span>
              <h3 className="font-display text-xl mb-3">{item.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p data-animate className="text-center font-mono text-[10px] tracking-[0.3em] text-[oklch(0.7_0.2_45)] mt-10">
          NOT A TEMPLATE. A REAL PRODUCT.
        </p>
      </div>
    </AnimatedSection>
  )
}

/* ─── 05 THE MACHINE ───────────────────────────────────── */

function Machine() {
  return (
    <AnimatedSection id="machine" animation="slide-right" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>04 / The Machine</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-4">MORE THAN AN APP</h2>
        <p data-animate className="text-[oklch(0.95_0_0)]/40 text-xl mb-16">An AI-Powered Organization</p>
        <div data-animate className="border border-[oklch(0.25_0_0)] bg-[oklch(0.1_0_0)] p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="font-display text-xl text-[oklch(0.7_0.2_45)] mb-8 block">The Org Chart</span>
              <div className="font-mono text-sm leading-loose text-[oklch(0.95_0_0)]/50">
                <p className="text-[oklch(0.95_0_0)]/80 mb-5">THE CREATOR — Board of Directors</p>
                <div className="pl-5 border-l border-[oklch(0.25_0_0)] space-y-2">
                  <p className="text-[oklch(0.7_0.2_45)]">Paperclip — AI CEO</p>
                  <div className="pl-5 border-l border-[oklch(0.25_0_0)] space-y-1.5">
                    <p>Engineering</p><p>Growth</p><p>Operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="font-display text-xl mb-8 block">How It Works</span>
              <div className="space-y-5">
                {[["OpenClaw","AI agents as your employees"],["Paperclip","Orchestrates the entire business"],["Creator","Opens tickets, sets direction"],["We manage","Maintenance, scaling, support"]].map(([label, desc]) => (
                  <div key={label} className="flex gap-5">
                    <span className="text-[oklch(0.7_0.2_45)] font-mono text-xs tracking-wide w-20 shrink-0 pt-0.5">{label}</span>
                    <span className="text-[oklch(0.95_0_0)]/50">{desc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-[oklch(0.25_0_0)]">
                <p className="text-[oklch(0.95_0_0)]/80 font-medium">They stay the face. We run the machine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 06 THE BLUEPRINT ─────────────────────────────────── */

function Blueprint() {
  return (
    <AnimatedSection id="blueprint" animation="fade-up" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>05 / The Blueprint</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-4">
          THE BUSINESS <span className="text-[oklch(0.7_0.2_45)]">BLUEPRINT</span>
        </h2>
        <p data-animate className="text-[oklch(0.95_0_0)]/40 text-lg mb-16 max-w-lg">We don&apos;t just build apps — we build businesses.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3" data-animate>
          {[
            { title: "Content Systems", desc: "Hook frameworks, retention strategies, audience growth playbooks" },
            { title: "Marketing & Funnels", desc: "Lead flow, audience ranking, customer lens framework" },
            { title: "Offer Architecture", desc: "DIY to DWY to DFY stacking, sequential skimming, pricing" },
            { title: "Launch Plans", desc: "Minimal launch to full deploy, soft launch to scale" },
            { title: "Operations", desc: "Sales blueprints, admin systems, financial operating models" },
            { title: "Community", desc: "B2C + B2B content strategy, conversion content, social proof" },
          ].map((item) => (
            <div key={item.title} className="border border-[oklch(0.25_0_0)] p-7 md:p-8 card-hover">
              <div className="accent-line mb-5" />
              <h3 className="font-display text-lg mb-3">{item.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 07 THE PARTNERSHIP ───────────────────────────────── */

function Partnership() {
  return (
    <AnimatedSection id="partnership" animation="split" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>06 / The Partnership</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-20">
          WHY THIS <span className="text-[oklch(0.7_0.2_45)]">WORKS</span>
        </h2>
        <div className="grid md:grid-cols-2" data-animate>
          <div className="border border-[oklch(0.25_0_0)] p-8 md:p-12">
            <div className="label-badge mb-8">Piza.Global</div>
            <h3 className="font-display text-3xl md:text-4xl mb-2">Stephanie Piza</h3>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/30 uppercase mb-8">Los Angeles</p>
            <div className="space-y-4 text-[oklch(0.95_0_0)]/50 text-sm leading-relaxed">
              <p>15+ years Hollywood x digital</p>
              <p>First Latina dealmaker in new media</p>
              <p>Jay Versace, JC Caylen, Kendrick Sampson</p>
              <p className="italic text-[oklch(0.95_0_0)]/70">&ldquo;Representation 2.0&rdquo; — creators as media cos</p>
              <p>Six-figure global partnerships</p>
            </div>
          </div>
          <div className="border border-[oklch(0.7_0.2_45)]/20 p-8 md:p-12 bg-[oklch(0.7_0.2_45)]/[0.04]">
            <div className="label-badge mb-8">Bearified</div>
            <h3 className="font-display text-3xl md:text-4xl mb-2">Alex Alaniz</h3>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/30 uppercase mb-8">AI Infrastructure</p>
            <div className="space-y-4 text-[oklch(0.95_0_0)]/50 text-sm leading-relaxed">
              <p className="text-[oklch(0.7_0.2_45)]">39 autonomous AI agents in production</p>
              <p>Full-stack engineering + business systems</p>
              <p>OpenClaw + Paperclip orchestration</p>
              <p>Blockchain + fintech infrastructure</p>
              <p className="text-[oklch(0.7_0.2_45)]">44.7x ROI on AI operations</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 08 FOR CREATORS ──────────────────────────────────── */

function ForCreators() {
  return (
    <AnimatedSection id="creators" animation="slide-left" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>07 / For Creators</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-20">
          WHAT CREATORS <span className="text-[oklch(0.7_0.2_45)]">GET</span>
        </h2>
        <div className="grid sm:grid-cols-2" data-animate>
          {[
            { title: "Custom Platform", desc: "A branded app built for their medium and audience. Podcast, video, publishing, or hybrid — designed around how they create." },
            { title: "AI-Powered Ops", desc: "A full AI organization running behind the scenes. Engineering, growth, operations — managed by Bearified, powered by OpenClaw + Paperclip." },
            { title: "Own Their Data + Money", desc: "They own the users, the analytics, the revenue. Blockchain-enabled payments let creators become their own bank — no middlemen." },
            { title: "Managed Service", desc: "We handle the tech, the maintenance, the scaling. They focus on what they do best — create. We run the machine." },
          ].map((item) => (
            <div key={item.title} className="border border-[oklch(0.25_0_0)] p-8 md:p-10 card-hover">
              <div className="accent-line mb-6" /><h3 className="font-display text-2xl mb-4">{item.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/40 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 09 FOR PIZA.GLOBAL ──────────────────────────────── */

function ForPiza() {
  return (
    <AnimatedSection id="piza" animation="slide-right" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>08 / For Piza.Global</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-20">
          WHAT PIZA.GLOBAL <span className="text-[oklch(0.7_0.2_45)]">GETS</span>
        </h2>
        <div className="grid sm:grid-cols-2" data-animate>
          {[
            { title: "Competitive Moat", desc: "No other talent agency offers creators their own tech platform. This is a category of one." },
            { title: "Proprietary Tools", desc: "AI agents, workflow automation, and custom agency software built specifically for Piza.Global operations." },
            { title: "Premium Service Tier", desc: "A new high-value offering that justifies higher management fees and attracts top-tier creators." },
            { title: "A Tech Partner", desc: "Not a vendor. A partner who brings engineering depth, business systems, and a shared vision for where this goes." },
          ].map((item) => (
            <div key={item.title} className="border border-[oklch(0.25_0_0)] p-8 md:p-10 card-hover">
              <div className="accent-line mb-6" /><h3 className="font-display text-2xl mb-4">{item.title}</h3>
              <p className="text-[oklch(0.95_0_0)]/40 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 10 THE PROOF ─────────────────────────────────────── */

function Proof() {
  return (
    <AnimatedSection id="proof" animation="scale" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>09 / The Proof</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-4">
          THE <span className="text-[oklch(0.7_0.2_45)]">PROOF</span>
        </h2>
        <p data-animate className="text-[oklch(0.95_0_0)]/40 text-lg mb-16 max-w-lg">
          Bearified runs on the same stack we deploy for creators.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4" data-animate>
          {[
            { value: "39", label: "AI Agents", sub: "In Production" },
            { value: "$1.4K", label: "Monthly", sub: "Operating Cost" },
            { value: "44.7x", label: "ROI", sub: "On AI Spending" },
            { value: "3.6%", label: "Cost vs", sub: "Traditional Team" },
          ].map((stat) => (
            <div key={stat.label} className="border border-[oklch(0.25_0_0)] p-6 md:p-8 text-center">
              <div className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[oklch(0.7_0.2_45)] stat-glow mb-2">{stat.value}</div>
              <div className="text-[oklch(0.95_0_0)]/70 text-sm font-medium">{stat.label}</div>
              <div className="text-[oklch(0.95_0_0)]/30 font-mono text-[10px] tracking-wider">{stat.sub}</div>
            </div>
          ))}
        </div>
        <div data-animate className="border border-[oklch(0.7_0.2_45)]/20 p-8 md:p-14 bg-[oklch(0.7_0.2_45)]/[0.04] mt-1">
          <span className="font-display text-xl text-[oklch(0.7_0.2_45)] mb-5 block">We Eat Our Own Cooking</span>
          <p className="text-[oklch(0.95_0_0)]/50 leading-relaxed max-w-2xl">
            OpenClaw + Paperclip + Claude Code + Cowork — all dogfooded internally. We&apos;re building fintech apps,
            prediction markets, and blockchain products on the same infrastructure we&apos;ll deploy for Piza.Global creators.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 11 THE ROADMAP ───────────────────────────────────── */

function Roadmap() {
  return (
    <AnimatedSection id="roadmap" animation="fade-up" className="px-6 md:px-12 md:pl-28">
      <NoiseOverlay opacity={0.02} />
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <SectionLabel data-animate>10 / The Roadmap</SectionLabel>
        <h2 data-animate className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-20">
          THE <span className="text-[oklch(0.7_0.2_45)]">ROADMAP</span>
        </h2>
        <div className="grid md:grid-cols-3" data-animate>
          {[
            { phase: "Phase 1", title: "Research Preview", when: "Now", active: true,
              items: ["Pilot with 2-3 Piza.Global creators","Build first creator platforms","Validate the model","Refine the packaging"] },
            { phase: "Phase 2", title: "Expand", when: "Q3 2026", active: false,
              items: ["Roll out across creator roster","Build Piza.Global agency tools","Develop pricing tiers","Case studies + proof points"] },
            { phase: "Phase 3", title: "Productize", when: "2027", active: false,
              items: ["Launch as a market offering","Attract new creators to Piza.Global","Scale managed service","Build the category"] },
          ].map((phase) => (
            <div key={phase.phase} className={`border p-8 md:p-10 ${phase.active ? "border-[oklch(0.7_0.2_45)]/25 bg-[oklch(0.7_0.2_45)]/[0.05]" : "border-[oklch(0.25_0_0)]"}`}>
              <div className="flex items-center justify-between mb-8">
                <span className="label-badge">{phase.phase}</span>
                {phase.active && <span className="w-2 h-2 bg-[oklch(0.7_0.2_45)] animate-pulse" />}
              </div>
              <h3 className="font-display text-2xl mb-1">{phase.title}</h3>
              <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/30 uppercase mb-8">{phase.when}</p>
              <div className="space-y-4">
                {phase.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className={`mt-2 w-1 h-1 shrink-0 ${phase.active ? "bg-[oklch(0.7_0.2_45)]" : "bg-[oklch(0.95_0_0)]/20"}`} />
                    <span className="text-[oklch(0.95_0_0)]/50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── 12 CLOSING ───────────────────────────────────────── */

function Closing() {
  return (
    <AnimatedSection id="closing" animation="scale" className="px-6 md:px-12 text-center">
      <NoiseOverlay opacity={0.03} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[50vw] leading-none" style={{ color: "oklch(0.7 0.2 45 / 0.02)" }}>B</span>
      </div>
      <div className="section-inner max-w-[1000px] mx-auto relative z-10">
        <h2 data-animate className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.85] mb-14">
          LET&apos;S<br /><span className="text-[oklch(0.7_0.2_45)]">BUILD.</span>
        </h2>
        <p data-animate className="text-[oklch(0.95_0_0)]/40 text-lg mb-20 max-w-md mx-auto">
          Formalize the partnership. Pick the first pilot creators. Start building their platforms.
        </p>
        <div className="grid sm:grid-cols-2 max-w-2xl mx-auto" data-animate>
          <div className="border border-[oklch(0.25_0_0)] p-8 md:p-10 text-left">
            <p className="font-display text-2xl mb-1">Alex Alaniz</p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/30 uppercase mb-4">Bearified</p>
            <a href="mailto:alex@bearified.co" className="text-[oklch(0.7_0.2_45)] font-mono text-sm hover:underline block mb-1">alex@bearified.co</a>
            <a href="https://bearified.co/org" className="text-[oklch(0.95_0_0)]/30 font-mono text-xs hover:text-[oklch(0.7_0.2_45)] transition-colors">bearified.co/org</a>
          </div>
          <div className="border border-[oklch(0.25_0_0)] p-8 md:p-10 text-left">
            <p className="font-display text-2xl mb-1">Stephanie Piza</p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/30 uppercase mb-4">Piza.Global</p>
            <a href="mailto:stephanie@piza.global" className="text-[oklch(0.7_0.2_45)] font-mono text-sm hover:underline block mb-1">stephanie@piza.global</a>
            <a href="https://pitch.bearified.co" className="text-[oklch(0.95_0_0)]/30 font-mono text-xs hover:text-[oklch(0.7_0.2_45)] transition-colors">pitch.bearified.co</a>
          </div>
        </div>
        {/* Footer integrated into closing slide */}
        <footer className="absolute bottom-0 left-0 right-0 border-t border-[oklch(0.25_0_0)] py-8 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-[oklch(0.95_0_0)]/20">
              <span className="font-display tracking-[0.1em] text-sm">PIZA.GLOBAL</span>
              <span className="font-mono text-[10px]">x</span>
              <span className="font-display tracking-[0.1em] text-sm">BEARIFIED</span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/15 uppercase">Own Your Platform | Confidential 2026</p>
          </div>
        </footer>
      </div>
    </AnimatedSection>
  )
}

/* ─── SHARED ───────────────────────────────────────────── */

function SectionLabel({ children, ...props }: { children: React.ReactNode } & Record<string, unknown>) {
  return (
    <div className="flex items-center gap-4 mb-10" {...props}>
      <div className="accent-line" />
      <span className="section-label">{children}</span>
    </div>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}
