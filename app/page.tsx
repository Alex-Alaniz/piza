"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Mouse Blob Follower
    const blob = document.getElementById("cursor-blob")
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (blob) {
        blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
    }
    document.addEventListener("mousemove", handleMouseMove)

    // Parallax Effect
    const handleScroll = () => {
      const scroll = window.pageYOffset

      // Hero parallax
      const parallaxTexts = document.querySelectorAll(".parallax-text")
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed")
        if (speed) {
          ;(text as HTMLElement).style.transform = `translateX(${scroll * Number.parseFloat(speed) * 0.1}px)`
        }
      })

      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.2}px)) scale(${1 + scroll * 0.0005})`
      }

      // Floating labels in project section
      const labels = document.querySelectorAll(".floating-label")
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        ;(label as HTMLElement).style.transform = `translateY(${scroll * 0.1 * direction}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)

    // Simple reveal on enter (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-text").forEach((text) => {
      observer.observe(text)
    })

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = (this as HTMLAnchorElement).getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="blob" id="cursor-blob"></div>

      <nav>
        <div className="logo">PIZA</div>
        <ul className="nav-links">
          <li>
            <a href="#work">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero">
          <img
            src="https://deadline.com/wp-content/uploads/2026/02/Stephanie-Piza.jpg"
            alt="Stephanie Piza - Founder"
            className="hero-img"
            id="hero-img"
          />
          <div className="hero-title-container container">
            <span className="huge-type parallax-text" data-speed="-2">
              REPRESENTATION
            </span>
            <span className="huge-type outline-text parallax-text" data-speed="2" style={{ paddingLeft: "200px" }}>
              2.0
            </span>
          </div>
        </section>

        {/* INTRO */}
        <section id="about">
          <div className="container">
            <div style={{ maxWidth: "900px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontFamily: "var(--syne)",
                  marginBottom: "40px",
                }}
              >
                CREATORS ARE MEDIA COMPANIES WITH BUILT-IN DISTRIBUTION. THE QUESTION IS WHETHER THEY&apos;LL OWN WHAT THEY BUILD.
              </h2>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#888",
                  marginBottom: "40px",
                }}
              >
                Founded by Stephanie Piza in 2026, PIZA is a management company repping a curated roster of digital-first entrepreneurs while expanding into venture incubation and brand co-builds.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  color: "#666",
                }}
              >
                Creators are no longer talent — they are enterprises unto themselves. Our focus: equity participation, IP retention, creator-led product incubation, and cultural positioning that compounds over time.
              </p>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="scrolling-marquee">
          <div className="marquee-inner">
            <span className="huge-type outline-text">DIGITAL FIRST — GLOBAL REACH — PIZA — SCALE BEYOND — </span>
            <span className="huge-type outline-text">DIGITAL FIRST — GLOBAL REACH — PIZA — SCALE BEYOND — </span>
          </div>
        </div>

        {/* FOUNDER SECTION */}
        <section id="work" className="container">
          <div className="sticky-type">FOUNDER</div>

          {/* Stephanie Piza */}
          <div className="project-row">
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>STEPHANIE PIZA</span>
              <h3 className="huge-type" style={{ fontSize: "5rem", margin: "20px 0" }}>
                VISIONARY
              </h3>
              <p>
                Former Head of Emerging & Interactive Talent at M88, where she structured six-figure global brand partnerships and repositioned creator clients as long-term business assets.
              </p>
              <div className="divider"></div>
              <p style={{ marginBottom: "20px" }}>Previously launched UNCMMN alongside Charles D. King and Macro — one of the first female-founded management firms centered on culturally influential digital voices, later acquired by M88.</p>
              <p>Career began at CAA in digital talent and brand partnerships, followed by roles at Big Frame and Flip Management.</p>
            </div>
            <div className="project-media">
              <img
                src="https://deadline.com/wp-content/uploads/2026/02/Stephanie-Piza.jpg"
                alt="Stephanie Piza - Founder"
                className="project-image"
              />
              <div className="floating-label huge-type outline-text" style={{ fontSize: "8rem" }}>
                PIZA
              </div>
            </div>
          </div>

          {/* Track Record */}
          <div className="project-row" style={{ flexDirection: "row-reverse" }}>
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>TRACK RECORD</span>
              <h3 className="huge-type" style={{ fontSize: "5rem", margin: "20px 0" }}>
                LEGACY
              </h3>
              <p>
                Built 360-degree businesses for digitally native talent including celebrity chef Eitan Bernath, TikTok phenom Taylor Cassidy, JC Caylen, Joanne the Scammer, and Buzzfeed creator Freddie Ransome.
              </p>
              <div className="divider"></div>
              <p>Recognized as a premier dealmaker in the digital space. University of Central Florida — B.A. in Public Relations, Advertising, and Applied Communication.</p>
            </div>
            <div className="project-media">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000"
                alt="Digital Innovation"
                className="project-image"
              />
              <div
                className="floating-label huge-type outline-text"
                style={{ fontSize: "8rem", right: "auto", left: "-100px" }}
              >
                BUILT
              </div>
            </div>
          </div>
        </section>

        {/* OVERLAPPING COMPOSITION SECTION */}
        <section>
          <div className="container composition">
            <div className="comp-item-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                className="comp-image"
                alt="Team collaboration"
              />
            </div>
            <div className="comp-item-2">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                className="comp-image"
                alt="Digital workspace"
              />
            </div>
            <div className="comp-item-3">
              <div
                style={{
                  background: "var(--accent)",
                  padding: "40px",
                  color: "white",
                }}
              >
                <h4 style={{ fontFamily: "var(--syne)", fontSize: "2rem" }}>FULL-SERVICE MANAGEMENT</h4>
                <p style={{ marginTop: "20px" }}>
                  Brand strategy. Deal negotiation. Media relations. Content monetization. We handle the business so our talent can focus on creating impact.
                </p>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "400px",
                zIndex: 10,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
                className="comp-image"
                alt="Strategy meeting"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact">
          <div className="container">
            <div className="footer-cta">
              <a href="mailto:hello@piza.global">LET&apos;S — CONNECT</a>
            </div>
            <div className="divider"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--syne)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: "#555",
              }}
            >
              <div>© 2026 PIZA</div>
              <div style={{ display: "flex", gap: "30px" }}>
                <span>LINKEDIN</span>
                <span>TWITTER/X</span>
                <span>INSTAGRAM</span>
              </div>
              <div>LOS ANGELES</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
