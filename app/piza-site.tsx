"use client"

import { useEffect, useRef, useState } from "react"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"
import { gsap } from "@/lib/gsap"

// Service blurbs are agency-drafted placeholders pending client-approved copy.
const philosophy = [
  {
    title: "360 Talent Architects",
    blurb: "Full-spectrum representation: deals, brand, content, and business strategy built around each talent.",
  },
  {
    title: "Creator Ecosystems",
    blurb: "Products, platforms, and partnerships that turn an audience into a durable economy.",
  },
  {
    title: "Brand Equity",
    blurb: "Positioning and partnerships that compound the value of a name over time.",
  },
  {
    title: "Long Term Legacy Building",
    blurb: "Ownership-first structures designed for decades, not campaign cycles.",
  },
  {
    title: "Culture Positioning",
    blurb: "Placing talent at the center of the cultural moments that matter.",
  },
]

const CONTACT_EMAIL = "info@piza.global"
const IG_URL = "https://instagram.com/Piza.global"

const bioParagraphs = [
  "Stephanie Piza is one of the defining forces behind the evolution of the creator economy, recognized for transforming digital talent into enterprise-level brands, cultural powerhouses, and long-term businesses.",
  "With over 15 years of experience spanning entertainment, media, luxury partnerships, and digital innovation, Piza has built a reputation as one of the most influential dealmakers shaping the future of modern representation. Her career has been rooted in a singular belief: creators are not just marketing channels; they are enterprises.",
  "Before launching PIZA, Stephanie served as Head of Emerging & Interactive Talent at M88, where she helped expand the firm's digital footprint while negotiating high-value partnerships that bridged creators with Fortune 500 brands, fashion houses, and global platforms.",
  "Earlier in her career, Piza co-founded UNCMMN alongside Charles King, creating one of the first female-founded management companies focused on culturally influential digital voices. The company was later strategically folded into M88, solidifying Piza's reputation as both a builder and visionary within the creator economy.",
  "Named to Variety's New Leaders List in 2021, Stephanie has consistently championed underrepresented voices throughout her career. As a proud Colombiana and one of the first prominent Latina executives to make a significant impact in digital and emerging media, she has dedicated her work to creating infrastructure, access, and ownership opportunities for historically excluded talent.",
  "She began her career at Creative Artists Agency in digital talent and brand partnerships before going on to architect groundbreaking creator-led business models across entertainment, fashion, media, and technology.",
  "Today, Stephanie launched PIZA as a next-generation representation company built on ownership, infrastructure, and cultural equity. Under her leadership, PIZA represents a new era of talent representation: one where culture is leveraged not just for visibility, but for legacy, ownership, and long-term enterprise growth.",
]

const navItems = [
  { href: "/foundation", label: "Foundation" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/stephanie", label: "Our Team" },
]

function allowsMotion() {
  return window.matchMedia("(prefers-reduced-motion: no-preference)").matches
}

function useReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (!allowsMotion()) return

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 22,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

function SiteShell({
  children,
  current,
  showNav = true,
}: {
  children: React.ReactNode
  current?: string
  showNav?: boolean
}) {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <CustomCursor />
      <main className="piza-shell relative min-h-screen overflow-hidden bg-[oklch(0.045_0_0)] text-[oklch(0.96_0.015_95)]">
        {showNav ? <Nav current={current} /> : null}
        {children}
      </main>
    </SmoothScroll>
  )
}

function Nav({ current }: { current?: string }) {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-[oklch(0.92_0.02_92)]/10 bg-[oklch(0.045_0_0)]/82 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-10">
        <a href="/" aria-label="PIZA home" className="group inline-flex h-8 items-center">
          <img
            src="/piza/piza-logo.png"
            alt="PIZA"
            width={900}
            height={328}
            className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={current === item.label ? "page" : undefined}
              className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/55 transition-colors hover:text-[oklch(0.63_0.23_28)] aria-[current=page]:text-[oklch(0.63_0.23_28)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Roster%20Request`}
            className="hidden border border-[oklch(0.63_0.23_28)]/70 px-3 py-2 font-mono text-[10px] uppercase text-[oklch(0.63_0.23_28)] transition-colors hover:bg-[oklch(0.63_0.23_28)] hover:text-[oklch(0.98_0.012_95)] sm:inline-flex"
          >
            Request Roster
          </a>
        </div>
      </div>
    </nav>
  )
}

export function EntryPage() {
  const sectionRef = useReveal()

  return (
    <SiteShell showNav={false}>
      <section ref={sectionRef} className="relative flex min-h-svh items-center justify-center overflow-hidden px-5">
        <div className="absolute inset-0">
          <img
            src="/piza/cigar-hero.jpg"
            alt="PIZA cigar detail with hand, jewelry, and red nails"
            width={1320}
            height={1649}
            fetchPriority="high"
            className="h-full w-full object-cover object-[56%_50%] brightness-105 contrast-110 saturate-[.92]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,transparent_0%,oklch(0.045_0_0/.08)_32%,oklch(0.045_0_0/.82)_72%,oklch(0.045_0_0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.045_0_0/.2)_0%,transparent_32%,oklch(0.045_0_0/.76)_100%)]" />
        </div>

        <div className="relative z-10 flex min-h-svh w-full max-w-[1280px] flex-col items-center justify-between py-8 md:py-10">
          <a
            data-reveal
            href="/foundation"
            aria-label="Enter PIZA"
            className="group mt-2 inline-flex flex-col items-center gap-5 text-center"
          >
            <img
              src="/piza/piza-logo.png"
              alt="PIZA"
              width={900}
              height={328}
              className="w-[min(68vw,440px)] object-contain drop-shadow-[0_34px_90px_rgba(130,0,0,0.52)] transition-transform duration-500 group-hover:scale-[1.025]"
            />
            <span className="font-mono text-[10px] uppercase text-[oklch(0.98_0.012_95)]/88 [text-shadow:0_2px_18px_rgba(0,0,0,0.92)] transition-colors group-hover:text-[oklch(0.63_0.23_28)]">
              Click PIZA logo to enter
            </span>
          </a>

          <div data-reveal className="mb-4 grid w-full gap-4 border-t border-[oklch(0.92_0.02_92)]/14 pt-5 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-sm leading-7 text-[oklch(0.96_0.015_95)]/64 md:text-base">
              A new model focused on ownership, equity, and long-term value.
            </p>
            <div className="flex items-center gap-5">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/46 transition-colors hover:text-[oklch(0.63_0.23_28)]"
              >
                IG @Piza.global
              </a>
              <p className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/46">
                PIZA.GLOBAL
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

export function FoundationPage() {
  const sectionRef = useReveal()

  return (
    <SiteShell current="Foundation">
      <section ref={sectionRef} className="relative min-h-svh px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,oklch(0.18_0.08_28/.28),transparent_34%),linear-gradient(180deg,oklch(0.045_0_0),oklch(0.06_0.006_40))]" />
        <div className="relative z-10 mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div data-reveal>
            <p className="font-mono text-[10px] uppercase text-[oklch(0.63_0.23_28)]">Page 02</p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.9rem,6.6vw,6.9rem)] font-light leading-[.98] text-[oklch(0.98_0.012_95)]">
              <strong className="font-semibold">A company built</strong> for people that hold culture.
              <span className="mt-4 block text-[oklch(0.96_0.015_95)]/72">
                We build leverage for the people shaping what&apos;s next.
              </span>
            </h1>
          </div>

          <div data-reveal className="border-l border-[oklch(0.63_0.23_28)]/70 pl-6 md:pl-8">
            <h2 className="font-display text-4xl font-light text-[oklch(0.98_0.012_95)] md:text-6xl">
              The Foundation
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[oklch(0.96_0.015_95)]/66">
              <p>
                PIZA is a next-generation representation company built on <strong className="font-semibold text-[oklch(0.98_0.012_95)]">ownership</strong>, infrastructure, and cultural equity.
              </p>
              <p>
                We help culture-shaping talent move beyond visibility into enduring businesses across brand partnerships, intellectual property, equity, and long-term enterprise value.
              </p>
              <p className="text-[oklch(0.96_0.015_95)]/82">
                &quot;<strong className="font-semibold">Representation 2.0</strong>{" - "}creators as media companies.&quot;
              </p>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${CONTACT_EMAIL}?subject=Roster%20Request`} className="piza-button piza-button-primary">
                Request Roster
              </a>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Campaign%20Opportunity`} className="piza-button">
                Campaign Opportunity
              </a>
              <a href="/philosophy" className="piza-button">
                The Philosophy
              </a>
            </div>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/46 transition-colors hover:text-[oklch(0.63_0.23_28)]"
            >
              IG @Piza.global
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

export function PhilosophyPage() {
  const sectionRef = useReveal()
  const [openService, setOpenService] = useState<number | null>(null)

  return (
    <SiteShell current="Philosophy">
      <section ref={sectionRef} className="relative min-h-svh overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[oklch(0.055_0.004_40)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,oklch(0.92_0.02_92/.18)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.92_0.02_92/.12)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div data-reveal className="max-w-4xl">
            <p className="font-mono text-[10px] uppercase text-[oklch(0.63_0.23_28)]">Page 03</p>
            <h1 className="mt-6 font-display text-[clamp(4rem,9.5vw,9rem)] font-light leading-[.88] text-[oklch(0.98_0.012_95)]">
              The <strong className="font-semibold">Philosophy</strong>
            </h1>
          </div>

          <div data-reveal className="mt-10 grid gap-px border border-[oklch(0.92_0.02_92)]/12 bg-[oklch(0.92_0.02_92)]/12 md:grid-cols-5">
            {philosophy.map((item, index) => {
              const open = openService === index
              return (
                <article key={item.title} className="bg-[oklch(0.045_0_0)]">
                  <button
                    type="button"
                    onClick={() => setOpenService(open ? null : index)}
                    aria-expanded={open}
                    className="flex min-h-[160px] w-full flex-col items-start p-6 text-left transition-colors duration-300 hover:bg-[oklch(0.09_0.02_28)] md:p-7"
                  >
                    <div className="mb-7 h-px w-10 bg-[oklch(0.63_0.23_28)]" />
                    <h2 className="font-display text-3xl font-light leading-none text-[oklch(0.98_0.012_95)] md:text-4xl">
                      {item.title}
                    </h2>
                    <span className="mt-5 font-mono text-[10px] uppercase text-[oklch(0.63_0.23_28)]">
                      {open ? "Close" : "About"}
                    </span>
                  </button>
                  {open ? (
                    <p className="px-6 pb-6 text-sm leading-7 text-[oklch(0.96_0.015_95)]/70 md:px-7">{item.blurb}</p>
                  ) : null}
                </article>
              )
            })}
          </div>

          <div data-reveal className="mt-10 grid gap-8 border-y border-[oklch(0.92_0.02_92)]/12 py-7 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <p className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/50">
              The people we back
            </p>
            <p className="font-display text-4xl font-light leading-[1.02] text-[oklch(0.96_0.015_95)]/86 md:text-6xl">
              Creators, designers, artists &amp; cultural architects
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="/stephanie" className="piza-button piza-button-primary">
              Our Team
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/46 transition-colors hover:text-[oklch(0.63_0.23_28)]"
            >
              IG @Piza.global
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

export function StephaniePage() {
  const sectionRef = useReveal()

  return (
    <SiteShell current="Our Team">
      <section ref={sectionRef} className="relative min-h-svh px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.045_0_0),oklch(0.028_0_0))]" />
        <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <aside data-reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[10px] uppercase text-[oklch(0.63_0.23_28)]">Page 04</p>
            <h1 className="mt-6 font-display text-[clamp(4rem,9vw,9rem)] font-light leading-[.88] text-[oklch(0.98_0.012_95)]">
              Stephanie <strong className="font-semibold">Piza</strong>
            </h1>
            <div className="mt-10 space-y-5 border-l border-[oklch(0.63_0.23_28)]/70 pl-6">
              <a href="https://instagram.com/stephanie_piza" target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-[oklch(0.63_0.23_28)]">
                <span className="block font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/46">Stephanie</span>
                <span className="mt-1 block text-xl">@stephanie_piza</span>
              </a>
              <a href="https://instagram.com/Piza.global" target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-[oklch(0.63_0.23_28)]">
                <span className="block font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/46">PIZA</span>
                <span className="mt-1 block text-xl">@Piza.global</span>
              </a>
              <a href="mailto:Stephanie@Piza.global" className="block transition-colors hover:text-[oklch(0.63_0.23_28)]">
                <span className="block font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/46">Email</span>
                <span className="mt-1 block text-xl">Stephanie@Piza.global</span>
              </a>
            </div>
          </aside>

          <div data-reveal className="space-y-7 text-base leading-8 text-[oklch(0.96_0.015_95)]/68 md:text-lg md:leading-9">
            {bioParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-[oklch(0.96_0.015_95)]/88" : ""}>
                {paragraph}
              </p>
            ))}

            <footer className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/42">PIZA.GLOBAL</p>
              <p className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/42">
                Ownership / Infrastructure / Cultural Equity
              </p>
            </footer>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return
    if (!allowsMotion()) return

    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power3.out" })
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power3.out" })
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" })
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" })

    const move = (event: PointerEvent) => {
      cursor.classList.add("is-visible")
      dot.classList.add("is-visible")
      cursorX(event.clientX)
      cursorY(event.clientY)
      dotX(event.clientX)
      dotY(event.clientY)
    }

    const activate = (event: PointerEvent) => {
      const target = event.target as HTMLElement
      const interactive = target.closest("a, button")
      cursor.classList.toggle("is-active", Boolean(interactive))
    }

    window.addEventListener("pointermove", move)
    window.addEventListener("pointerover", activate)

    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerover", activate)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="piza-cursor" aria-hidden="true" />
      <div ref={dotRef} className="piza-cursor-dot" aria-hidden="true" />
    </>
  )
}
