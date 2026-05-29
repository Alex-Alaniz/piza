"use client"

import { useEffect, useRef, useState } from "react"
import SmoothScroll from "@/components/smooth-scroll"
import NoiseOverlay from "@/components/noise-overlay"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const pillars = [
  {
    title: "Management",
    copy: "Career architecture for creators who are ready to move from visibility into durable enterprise value.",
  },
  {
    title: "Production",
    copy: "Creative systems for campaigns, formats, partnerships, and owned media that can scale beyond the feed.",
  },
  {
    title: "Branding",
    copy: "Positioning, identity, and cultural strategy built to make talent feel inevitable in every room.",
  },
  {
    title: "Strategy",
    copy: "Ownership-first deal thinking across IP, equity, partnerships, and the long-term business around talent.",
  },
]

const approach = [
  "360 talent architecture",
  "equity-first thinking",
  "creator IP",
  "cultural positioning",
  "long-term legacy building",
]

const reviewToken = "stephanie-piza-review-0529"

type ReviewArea = {
  x: number
  y: number
  width: number
  height: number
  scrollY: number
  label: string
}

function allowsMotion() {
  return window.matchMedia("(prefers-reduced-motion: no-preference)").matches
}

export default function Home() {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <CustomCursor />
      <main className="piza-shell relative min-h-screen overflow-hidden bg-[oklch(0.045_0_0)] text-[oklch(0.96_0.015_95)]">
        <Nav />
        <Hero />
        <WhatWeDo />
        <Contact />
        <ReviewOverlay />
      </main>
    </SmoothScroll>
  )
}

function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-[oklch(0.92_0.02_92)]/10 bg-[oklch(0.045_0_0)]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" aria-label="PIZA home" className="group inline-flex items-center gap-3">
          <img
            src="/piza/piza-inflated-transparent.png"
            alt="PIZA"
            width={2000}
            height={2000}
            className="h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            style={{ filter: "brightness(1.65) saturate(1.25)" }}
          />
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#work"
            className="hidden font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/62 transition-colors hover:text-[oklch(0.63_0.23_28)] sm:inline"
          >
            What we do
          </a>
          <a
            href="#contact"
            className="hidden font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/62 transition-colors hover:text-[oklch(0.63_0.23_28)] min-[360px]:inline"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    if (!allowsMotion()) return

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        opacity: 0,
        y: 24,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.15,
      })

      gsap.to(".hero-logo", {
        y: -46,
        scale: 0.96,
        opacity: 0.42,
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
      id="top"
      className="relative flex min-h-[88svh] items-center overflow-hidden px-5 pb-6 pt-[4.75rem] md:min-h-[82svh] md:px-10 md:pt-20"
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,oklch(0.045_0_0)_0%,oklch(0.045_0_0)_42%,oklch(0.1_0.02_28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.045_0_0)_0%,transparent_54%,oklch(0.33_0.16_28/.2)_100%)]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4.5rem] top-20 h-[48svh] w-[72vw] overflow-hidden opacity-[.38] md:hidden"
      >
        <img
          src="/piza/cigar-hero.jpg"
          alt=""
          width={1320}
          height={1649}
          fetchPriority="high"
          className="h-full w-full object-cover object-[54%_50%] brightness-110 contrast-110 saturate-[.9]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.045_0_0)_0%,transparent_40%,oklch(0.045_0_0/.38)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.045_0_0/.18),transparent_46%,oklch(0.045_0_0)_100%)]" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,oklch(0.78_0.03_95)/50,transparent)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] min-w-0 items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] md:gap-16">
        <div className="min-w-0 max-w-[calc(100vw-2.5rem)] md:max-w-4xl">
          <div data-hero-reveal className="mb-4 md:hidden">
            <img
              src="/piza/piza-inflated-transparent.png"
              alt="PIZA"
              width={2000}
              height={2000}
              className="h-10 w-auto"
            />
          </div>

          <h1
            data-hero-reveal
            className="font-display max-w-[18rem] text-[3.45rem] leading-[0.88] text-[oklch(0.98_0.012_95)] sm:max-w-5xl sm:text-[4.25rem] md:text-[4.8rem] lg:text-[5.25rem] xl:text-[7.25rem] 2xl:text-[8.4rem]"
          >
            <span className="block sm:inline">Ownership</span>{" "}
            <span className="block sm:inline">Over</span>{" "}
            <span className="block">Attention</span>
          </h1>

          <p
            data-hero-reveal
            className="mt-5 max-w-[21rem] text-sm leading-[1.75] text-[oklch(0.96_0.015_95)]/72 [overflow-wrap:anywhere] sm:max-w-2xl sm:text-[15px] md:mt-8 md:text-lg md:leading-8 md:[overflow-wrap:normal]"
          >
            PIZA is a next-generation representation company redefining the creator economy
            through ownership-first strategy, operational excellence, and cultural equity.
          </p>

          <div data-hero-reveal className="mt-7 grid max-w-[21rem] grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-row md:mt-9">
            <a href="#work" className="piza-button piza-button-primary col-span-2">
              Enter PIZA
            </a>
            <a href="#work" className="piza-button">
              View what we do
            </a>
            <a href="#contact" className="piza-button">
              Build with us
            </a>
          </div>
        </div>

        <div data-hero-reveal className="relative hidden h-[min(480px,calc(100svh-12rem))] min-h-[340px] md:block">
          <div className="absolute inset-0 overflow-hidden border border-[oklch(0.92_0.02_92)]/16 bg-[oklch(0.09_0.01_40)]/72 shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
            <img
              src="/piza/cigar-hero.jpg"
              alt="PIZA cigar detail with gold jewelry and red nails"
              width={1320}
              height={1649}
              fetchPriority="high"
              className="h-full w-full object-cover object-[55%_50%] brightness-110 contrast-110 saturate-[.92]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.045_0_0/.02),transparent_48%,oklch(0.045_0_0/.5)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.045_0_0/.3)_0%,transparent_38%,oklch(0.045_0_0/.08)_100%)]" />
          </div>
          <div className="absolute inset-6 border border-[oklch(0.78_0.03_95)]/18" />
          <div className="absolute inset-x-10 top-12 h-px bg-[linear-gradient(90deg,transparent,oklch(0.78_0.03_95)/60,transparent)]" />
          <img
            src="/piza/piza-inflated-transparent.png"
            alt=""
            aria-hidden="true"
            width={2000}
            height={2000}
            className="hero-logo absolute left-8 top-8 w-[42%] max-w-[210px] object-contain drop-shadow-[0_32px_80px_rgba(120,0,0,0.42)]"
            style={{ filter: "brightness(1.65) saturate(1.2) drop-shadow(0 28px 64px rgba(120, 0, 0, 0.46))" }}
          />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
            <p className="max-w-[15rem] font-mono text-[10px] uppercase leading-5 text-[oklch(0.96_0.015_95)]/74 [text-shadow:0_1px_12px_rgba(0,0,0,0.75)]">
              360 talent architecture for culture-shaping creators.
            </p>
            <AmbientToggle />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,oklch(0.045_0_0))]" />
    </section>
  )
}

function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    if (!allowsMotion()) return

    const ctx = gsap.context(() => {
      gsap.from("[data-work-reveal]", {
        opacity: 0,
        y: 22,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
        },
      })

      gsap.to(".approach-track", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".approach-window",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden border-y border-[oklch(0.92_0.02_92)]/10 px-5 pb-24 pt-12 md:px-10 md:pb-32 md:pt-12"
    >
      <div className="absolute inset-0 bg-[oklch(0.065_0.006_40)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,oklch(0.92_0.02_92/.18)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.92_0.02_92/.12)_1px,transparent_1px)] [background-size:96px_96px]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-14 md:grid-cols-[0.88fr_1.12fr] md:gap-16">
          <div data-work-reveal className="max-w-xl">
            <h2 className="font-display text-5xl leading-[0.92] text-[oklch(0.98_0.012_95)] md:text-7xl">
              Where Talent Becomes Infrastructure
            </h2>
            <p className="mt-8 text-base leading-8 text-[oklch(0.96_0.015_95)]/58">
              PIZA builds the operating layer around modern talent: management, production,
              branding, and strategy designed to turn cultural attention into owned leverage.
            </p>
            <blockquote className="mt-10 border-l border-[oklch(0.63_0.23_28)] pl-6">
              <p className="text-xl leading-8 text-[oklch(0.96_0.015_95)]/82">
                &quot;Representation 2.0 - creators as media companies.&quot;
              </p>
              <cite className="mt-4 block font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/58 not-italic">
                Stephanie Piza
              </cite>
            </blockquote>
          </div>

          <div className="grid gap-px border border-[oklch(0.92_0.02_92)]/12 bg-[oklch(0.92_0.02_92)]/12 sm:grid-cols-2" data-work-reveal>
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group min-h-[220px] bg-[oklch(0.045_0_0)] p-7 transition-colors duration-300 hover:bg-[oklch(0.09_0.02_28)] md:p-9"
              >
                <div className="mb-8 h-px w-12 bg-[oklch(0.63_0.23_28)] transition-all duration-300 group-hover:w-20" />
                <h3 className="font-display text-3xl text-[oklch(0.98_0.012_95)]">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[oklch(0.96_0.015_95)]/48">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="approach-window mt-20 overflow-hidden border-y border-[oklch(0.92_0.02_92)]/10 py-8" data-work-reveal>
          <div className="approach-track flex w-max gap-4 pr-4">
            {[...approach, ...approach].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap border border-[oklch(0.78_0.03_95)]/18 bg-[oklch(0.78_0.03_95)]/[0.035] px-5 py-3 font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/62"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    if (!allowsMotion()) return

    const ctx = gsap.context(() => {
      gsap.from("[data-contact-reveal]", {
        opacity: 0,
        y: 26,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.045_0_0),oklch(0.028_0_0))]" />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <img
              data-contact-reveal
              src="/piza/piza-inflated-transparent.png"
              alt="PIZA"
              width={2000}
              height={2000}
              className="mb-12 h-16 w-auto object-contain md:h-20"
            />
            <h2
              data-contact-reveal
              className="font-display text-6xl leading-[0.88] text-[oklch(0.98_0.012_95)] sm:text-7xl md:text-8xl lg:text-[9rem]"
            >
              Build with us.
            </h2>
          </div>

          <div data-contact-reveal className="min-w-[280px] border-l border-[oklch(0.92_0.02_92)]/14 pl-6">
            <p className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/58">
              Email
            </p>
            <a
              href="mailto:Stephanie@Piza.global"
              className="mt-3 block text-xl text-[oklch(0.96_0.015_95)] transition-colors hover:text-[oklch(0.63_0.23_28)]"
            >
              Stephanie@Piza.global
            </a>

            <p className="mt-8 font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/58">
              Instagram
            </p>
            <a
              href="https://instagram.com/Piza.global"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-xl text-[oklch(0.96_0.015_95)] transition-colors hover:text-[oklch(0.63_0.23_28)]"
            >
              @Piza.global
            </a>
          </div>
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[oklch(0.92_0.02_92)]/10 pt-6">
          <p className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/42">
            PIZA.GLOBAL
          </p>
          <p className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/42">
            Management / Production / Branding / Strategy
          </p>
        </footer>
      </div>
    </section>
  )
}

function AmbientToggle({ className = "inline-flex" }: { className?: string }) {
  const [active, setActive] = useState(false)
  const contextRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const oscillatorsRef = useRef<OscillatorNode[]>([])
  const cleanupTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (cleanupTimeoutRef.current !== null) {
        window.clearTimeout(cleanupTimeoutRef.current)
      }
      oscillatorsRef.current.forEach((oscillator) => oscillator.stop())
      void contextRef.current?.close()
    }
  }, [])

  const toggle = () => {
    if (active) {
      const context = contextRef.current
      const gain = gainRef.current
      const oscillators = oscillatorsRef.current

      if (context && gain) {
        gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.3)
      }

      contextRef.current = null
      gainRef.current = null
      oscillatorsRef.current = []

      if (cleanupTimeoutRef.current !== null) {
        window.clearTimeout(cleanupTimeoutRef.current)
      }

      cleanupTimeoutRef.current = window.setTimeout(() => {
        oscillators.forEach((oscillator) => oscillator.stop())
        void context?.close()
        cleanupTimeoutRef.current = null
      }, 320)
      setActive(false)
      return
    }

    if (cleanupTimeoutRef.current !== null) {
      window.clearTimeout(cleanupTimeoutRef.current)
      cleanupTimeoutRef.current = null
    }

    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext

    if (!AudioContextClass) return

    const context = new AudioContextClass()
    const gain = context.createGain()
    gain.gain.value = 0.0001
    gain.connect(context.destination)

    const frequencies = [55, 82.41, 110]
    const oscillators = frequencies.map((frequency) => {
      const oscillator = context.createOscillator()
      oscillator.type = "sine"
      oscillator.frequency.value = frequency
      oscillator.connect(gain)
      oscillator.start()
      return oscillator
    })

    gain.gain.exponentialRampToValueAtTime(0.018, context.currentTime + 0.45)
    contextRef.current = context
    gainRef.current = gain
    oscillatorsRef.current = oscillators
    setActive(true)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      data-cursor="sound"
      className={`${className} h-10 items-center gap-3 border border-[oklch(0.78_0.03_95)]/24 px-4 font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/62 transition-colors hover:border-[oklch(0.63_0.23_28)]/60 hover:text-[oklch(0.63_0.23_28)]`}
      aria-pressed={active}
    >
      <span className={`h-2 w-2 rounded-full ${active ? "bg-[oklch(0.63_0.23_28)]" : "bg-[oklch(0.96_0.015_95)]/24"}`} />
      Sound {active ? "On" : "Off"}
    </button>
  )
}

function ReviewOverlay() {
  const [enabled, setEnabled] = useState(false)
  const [open, setOpen] = useState(false)
  const [picking, setPicking] = useState(false)
  const [note, setNote] = useState("")
  const [area, setArea] = useState<ReviewArea | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setEnabled(params.get("review") === reviewToken)
  }, [])

  useEffect(() => {
    if (!picking) return

    const pickArea = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest("[data-review-ui]")) return

      event.preventDefault()
      event.stopPropagation()

      const element = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement | null
      const selected =
        element?.closest("section, article, nav, footer, h1, h2, h3, p, a, img") ?? element
      const rect = selected?.getBoundingClientRect()
      const label =
        selected?.getAttribute("alt") ||
        selected?.textContent?.replace(/\s+/g, " ").trim().slice(0, 96) ||
        selected?.tagName.toLowerCase() ||
        "Selected area"

      setArea({
        x: Math.round(rect?.left ?? event.clientX),
        y: Math.round(rect?.top ?? event.clientY),
        width: Math.round(rect?.width ?? 40),
        height: Math.round(rect?.height ?? 40),
        scrollY: Math.round(window.scrollY),
        label,
      })
      setPicking(false)
      setOpen(true)
    }

    window.addEventListener("click", pickArea, true)

    return () => {
      window.removeEventListener("click", pickArea, true)
    }
  }, [picking])

  if (!enabled) return null

  const sendFeedback = () => {
    const body = [
      "Hi Alex,",
      "",
      "PIZA site feedback:",
      note || "(Type note here)",
      "",
      area
        ? `Selected area: ${area.label}
Viewport box: x ${area.x}, y ${area.y}, width ${area.width}, height ${area.height}
Scroll position: ${area.scrollY}`
        : "Selected area: none",
      "",
      `Review link: ${window.location.href}`,
    ]
      .filter(Boolean)
      .join("\n")

    window.location.href = `mailto:alex@bearified.co?subject=${encodeURIComponent(
      "PIZA site feedback",
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      {picking ? (
        <div
          data-review-ui
          className="fixed inset-0 z-[1200] cursor-crosshair bg-[oklch(0.045_0_0)]/28"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-6 w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 border border-[oklch(0.63_0.23_28)]/40 bg-[oklch(0.045_0_0)] px-4 py-3 text-center font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            Click any area to attach it to your note
          </div>
        </div>
      ) : null}

      {area ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-[1190] border border-[oklch(0.63_0.23_28)] bg-[oklch(0.63_0.23_28)]/10 shadow-[0_0_0_9999px_rgba(0,0,0,0.16)]"
          style={{
            left: area.x,
            top: area.y,
            width: Math.max(area.width, 28),
            height: Math.max(area.height, 28),
          }}
        />
      ) : null}

      <div data-review-ui className="fixed bottom-5 right-5 z-[1210] flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3">
        {open ? (
          <div className="w-[min(360px,calc(100vw-2.5rem))] border border-[oklch(0.92_0.02_92)]/18 bg-[oklch(0.045_0_0)] p-4 shadow-[0_32px_110px_rgba(0,0,0,0.62)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase text-[oklch(0.63_0.23_28)]">
                  Private review
                </p>
                <p className="mt-1 text-sm text-[oklch(0.96_0.015_95)]/70">
                  Highlight an area, type a note, and send it over.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/48 transition-colors hover:text-[oklch(0.96_0.015_95)]"
              >
                Close
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setPicking(true)
                setOpen(false)
              }}
              className="mb-3 h-10 w-full border border-[oklch(0.63_0.23_28)]/55 font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)] transition-colors hover:bg-[oklch(0.63_0.23_28)] hover:text-[oklch(0.98_0.012_95)]"
            >
              {area ? "Change highlighted area" : "Highlight area"}
            </button>

            {area ? (
              <p className="mb-3 border border-[oklch(0.92_0.02_92)]/10 bg-[oklch(0.92_0.02_92)]/[0.035] px-3 py-2 font-mono text-[10px] uppercase text-[oklch(0.96_0.015_95)]/58">
                Selected: {area.label}
              </p>
            ) : null}

            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Type feedback here..."
              className="min-h-28 w-full resize-none border border-[oklch(0.92_0.02_92)]/14 bg-transparent p-3 text-sm leading-6 text-[oklch(0.96_0.015_95)] outline-none placeholder:text-[oklch(0.96_0.015_95)]/34 focus:border-[oklch(0.63_0.23_28)]/70"
            />

            <button
              type="button"
              onClick={sendFeedback}
              className="mt-3 h-11 w-full bg-[oklch(0.63_0.23_28)] font-mono text-[10px] uppercase text-[oklch(0.98_0.012_95)] transition-colors hover:bg-[oklch(0.56_0.21_28)]"
            >
              Send feedback
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="h-11 border border-[oklch(0.63_0.23_28)]/70 bg-[oklch(0.63_0.23_28)] px-5 font-mono text-[10px] uppercase text-[oklch(0.98_0.012_95)] shadow-[0_18px_70px_rgba(0,0,0,0.5)] transition-colors hover:bg-[oklch(0.56_0.21_28)]"
        >
          Feedback
        </button>
      </div>
    </>
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
