"use client"

import { useEffect, useRef } from "react"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"
import AnimatedSection from "@/components/animated-section"
import { gsap } from "@/lib/gsap"

export default function PizaHome() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <main className="relative z-10">
        <Nav />
        <Hero />
        <Pillars />
        <Contact />
      </main>
    </SmoothScroll>
  )
}

/* ─── NAV ──────────────────────────────────────────────── */

function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-[oklch(0.08_0_0)]/80 border-b border-[oklch(0.25_0_0)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <span className="font-display text-xl tracking-[0.15em]">PIZA.GLOBAL</span>
        <a
          href="mailto:Stephanie@Piza.global"
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/40 hover:text-[oklch(0.7_0.2_45)] transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

/* ─── HERO ─────────────────────────────────────────────── */

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 24,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.1,
      })
      // Parallax out on scroll
      gsap.to(contentRef.current, {
        y: -80,
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
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Atmospheric dark background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/blueprint/master-dark.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0_0)]/40 via-transparent to-[oklch(0.08_0_0)]" />
      </div>

      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* PIZA logotype — replace src with real logo when available */}
        <div className="mb-4 select-none">
          <span
            className="font-display text-[clamp(7rem,25vw,20rem)] leading-none text-[oklch(0.7_0.2_45)]"
            style={{ textShadow: "0 0 140px oklch(0.7 0.2 45 / 0.25), 0 0 40px oklch(0.7 0.2 45 / 0.15)" }}
          >
            PIZA
          </span>
        </div>

        <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-[oklch(0.95_0_0)]/25 mb-8">
          Talent Management · Los Angeles
        </p>

        <h1 className="font-display text-[clamp(1.25rem,3vw,2.25rem)] text-[oklch(0.95_0_0)]/70 mb-14 tracking-[0.1em]">
          WHERE TALENT MEETS VISION
        </h1>

        <a href="#about" className="cta-outline">
          Discover PIZA
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" aria-hidden="true">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-[oklch(0.95_0_0)]/18">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.95_0_0)]/15 to-transparent" />
      </div>
    </section>
  )
}

/* ─── ABOUT + 4 PILLARS ────────────────────────────────── */

function Pillars() {
  return (
    <AnimatedSection id="about" className="px-6 md:px-12">
      <div className="section-inner max-w-[1200px] mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-16 md:gap-24 items-start">

          {/* About copy */}
          <div>
            <div className="label-badge mb-8" data-animate>Est. 2026</div>
            <h2 data-animate className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.88] mb-8">
              BUILT FOR THE<br />
              <span className="text-[oklch(0.7_0.2_45)]">NEXT GENERATION</span><br />
              OF TALENT
            </h2>
            <p data-animate className="text-[oklch(0.95_0_0)]/50 text-base md:text-lg leading-relaxed mb-10">
              Founded by Stephanie Piza — 15+ years at the intersection of Hollywood and digital.
              The first Latina dealmaker shaping the creator economy. PIZA represents artists
              who are ready to own their narrative and build their business.
            </p>
            <blockquote data-animate className="border-l-2 border-[oklch(0.7_0.2_45)] pl-6">
              <p className="text-[oklch(0.95_0_0)]/70 italic text-lg leading-snug mb-3">
                &ldquo;Representation 2.0 — creators as media companies.&rdquo;
              </p>
              <cite className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/30 not-italic">
                Stephanie Piza · Founder
              </cite>
            </blockquote>
          </div>

          {/* 4 Pillars grid */}
          <div className="grid grid-cols-2 gap-px bg-[oklch(0.22_0_0)]" data-animate>
            {[
              {
                title: "Management",
                desc: "Career strategy and talent representation built for the modern creator economy.",
              },
              {
                title: "Production",
                desc: "From concept to execution — content, campaigns, and creative direction at every scale.",
              },
              {
                title: "Branding",
                desc: "Identity systems, partnerships, and positioning that command attention and command rooms.",
              },
              {
                title: "Strategy",
                desc: "Deal-making, business development, and the long-term roadmap to build real leverage.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-[oklch(0.08_0_0)] p-6 md:p-8 card-hover">
                <div className="accent-line mb-5" />
                <h3 className="font-display text-2xl md:text-3xl mb-3">{pillar.title}</h3>
                <p className="text-[oklch(0.95_0_0)]/40 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── CONTACT + FOOTER ─────────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="border-t border-[oklch(0.25_0_0)] pt-16 md:pt-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end mb-16 md:mb-20">
            <div>
              <h2 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] mb-10">
                LET&apos;S<br />
                <span className="text-[oklch(0.7_0.2_45)]">CONNECT.</span>
              </h2>
              <div className="flex flex-wrap gap-10 md:gap-16">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25 mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:Stephanie@Piza.global"
                    className="font-display text-2xl md:text-3xl text-[oklch(0.7_0.2_45)] hover:opacity-75 transition-opacity"
                  >
                    Stephanie@Piza.global
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/25 mb-3">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/Piza.global"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl text-[oklch(0.95_0_0)]/55 hover:text-[oklch(0.7_0.2_45)] transition-colors"
                  >
                    @Piza.global
                  </a>
                </div>
              </div>
            </div>

            <div className="self-start md:self-end">
              <a
                href="https://deadline.com/2026/02/stephanie-piza-launches-piza-management-company-1236728610/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-[oklch(0.95_0_0)]/20 hover:text-[oklch(0.7_0.2_45)] transition-colors"
              >
                As seen in Deadline ↗
              </a>
            </div>
          </div>

          <div className="border-t border-[oklch(0.15_0_0)] pt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/15 uppercase">
              © 2026 PIZA.GLOBAL · Los Angeles
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[oklch(0.95_0_0)]/12 uppercase">
              Management · Production · Branding · Strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
