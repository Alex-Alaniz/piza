export default function PitchPage() {
  return (
    <main className="grid-bg">
      <Nav />
      <Hero />
      <Divider />
      <Problem />
      <Divider />
      <Shift />
      <Divider />
      <Product />
      <Divider />
      <Machine />
      <Divider />
      <Blueprint />
      <Divider />
      <Partnership />
      <Divider />
      <ForCreators />
      <Divider />
      <ForPiza />
      <Divider />
      <Proof />
      <Divider />
      <Roadmap />
      <Divider />
      <Closing />
      <Footer />
    </main>
  )
}

/* ─── NAV ──────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl tracking-wider">PIZA.GLOBAL</span>
          <span className="text-white/20 text-sm">x</span>
          <span className="font-display text-xl tracking-wider text-[var(--accent)]">
            BEARIFIED
          </span>
        </div>
        <span className="label-badge hidden sm:inline-block">Confidential</span>
      </div>
    </nav>
  )
}

/* ─── HERO ─────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="label-badge mb-8 animate-in animate-in-delay-1">
          March 2026
        </div>
        <h1 className="font-display text-6xl sm:text-8xl md:text-[10rem] leading-[0.85] mb-8 animate-in animate-in-delay-2">
          OWN YOUR
          <br />
          <span className="text-[var(--accent)]">PLATFORM.</span>
        </h1>
        <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-12 animate-in animate-in-delay-3">
          The future of creator business infrastructure.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-in animate-in-delay-4">
          <a
            href="#partnership"
            className="bg-[var(--accent)] text-black px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-[var(--accent-dim)] transition-colors"
          >
            The Partnership
          </a>
          <a
            href="#proof"
            className="border border-white/20 px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            See The Proof
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── THE PROBLEM ──────────────────────────────────────── */

function Problem() {
  return (
    <section className="py-24 sm:py-32 px-6" id="problem">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>01 / The Problem</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-12">
          THE CEILING
          <br />
          <span className="text-white/30">20M FOLLOWERS.</span>
          <br />
          ZERO CONTROL.
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Matt Rife built an empire on TikTok. Then the algorithm stopped
              pushing stand-up comedy. 20 million followers -- and he couldn't
              reach them.
            </p>
            <blockquote className="border-l-2 border-[var(--accent)] pl-6 text-xl italic text-white/80 mb-8">
              "Why can't you show my content to my own followers?"
            </blockquote>
            <p className="label-badge">This isn't a bug. It's the business model.</p>
          </div>
          <div className="space-y-6">
            {[
              "You don't own your audience",
              "You don't own your data",
              "You don't own your distribution",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 border border-white/[0.06] bg-white/[0.02]"
              >
                <span className="text-red-500 mt-0.5 text-lg">x</span>
                <span className="text-white/70 text-lg">{item}</span>
              </div>
            ))}
            <p className="text-white/40 text-sm font-mono mt-6 pl-1">
              Creators are tenants on someone else's platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── THE SHIFT ────────────────────────────────────────── */

function Shift() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>02 / The Shift</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-16">
          AI COLLAPSED
          <br />
          THE COST OF
          <br />
          <span className="text-[var(--accent)]">BUILDING SOFTWARE.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-1">
          <div className="border border-white/[0.06] p-8 sm:p-12 bg-white/[0.02]">
            <h3 className="font-display text-2xl mb-8 text-white/40">Before</h3>
            <div className="space-y-4">
              {[
                "50-person engineering team",
                "$500K+ annual burn rate",
                "18-month development cycles",
                "Millions in VC funding",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/40">
                  <span className="w-1.5 h-1.5 bg-white/20 rounded-full shrink-0" />
                  <span className="line-through">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[var(--accent)]/20 p-8 sm:p-12 bg-[var(--accent)]/[0.03]">
            <h3 className="font-display text-2xl mb-8 text-[var(--accent)]">Now</h3>
            <div className="space-y-4">
              {[
                "1 builder + AI agents",
                "$1,418/mo operating cost",
                "Weeks, not years",
                "Revenue from day one",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-white/50 text-lg mt-12">
          The era of creator-owned platforms is here.
        </p>
      </div>
    </section>
  )
}

/* ─── THE PRODUCT ──────────────────────────────────────── */

function Product() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>03 / The Product</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-6">
          THE CREATOR
          <br />
          <span className="text-[var(--accent)]">PLATFORM</span>
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">
          Tailored to their medium. Branded to their identity. Owned by the creator.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {[
            {
              icon: "mic",
              title: "Podcast App",
              desc: "Audio-first experience. Episodes, playlists, exclusive drops.",
            },
            {
              icon: "play",
              title: "Video App",
              desc: "Creator-branded streaming platform. Owned library.",
            },
            {
              icon: "pen",
              title: "Publishing",
              desc: "Blog, newsletter, premium articles. Direct to fans.",
            },
            {
              icon: "grid",
              title: "Custom App",
              desc: "Memberships, payments, merch, ticketing. Blockchain-ready.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/[0.06] p-8 bg-white/[0.02] card-hover"
            >
              <div className="w-10 h-10 border border-[var(--accent)]/30 flex items-center justify-center mb-6 text-[var(--accent)] text-sm font-mono">
                {item.icon === "mic" && <MicIcon />}
                {item.icon === "play" && <PlayIcon />}
                {item.icon === "pen" && <PenIcon />}
                {item.icon === "grid" && <GridIcon />}
              </div>
              <h3 className="font-display text-xl mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[var(--accent)] font-mono text-sm mt-8 tracking-wider">
          NOT A TEMPLATE. A REAL PRODUCT.
        </p>
      </div>
    </section>
  )
}

/* ─── THE MACHINE ──────────────────────────────────────── */

function Machine() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>04 / The Machine</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-6">
          MORE THAN AN APP
        </h2>
        <p className="text-white/50 text-xl mb-16 max-w-3xl">
          An AI-Powered Organization
        </p>
        <div className="border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl mb-6 text-[var(--accent)]">
                The Org Chart
              </h3>
              <div className="font-mono text-sm space-y-2 text-white/60">
                <p className="text-white/90 mb-4">THE CREATOR -- Board of Directors</p>
                <div className="pl-4 border-l border-white/10 space-y-2">
                  <p>Paperclip -- AI CEO</p>
                  <div className="pl-4 border-l border-white/10 space-y-1">
                    <p>Engineering</p>
                    <p>Growth</p>
                    <p>Operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-6">How It Works</h3>
              <div className="space-y-4">
                {[
                  ["OpenClaw", "AI agents as your employees"],
                  ["Paperclip", "Orchestrates the entire business"],
                  ["Creator", "Opens tickets, sets direction"],
                  ["We manage", "Maintenance, scaling, support"],
                ].map(([label, desc]) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-[var(--accent)] font-mono text-sm w-24 shrink-0">
                      {label}
                    </span>
                    <span className="text-white/60">{desc}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-white/80 font-medium">
                They stay the face. We run the machine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── THE BLUEPRINT ────────────────────────────────────── */

function Blueprint() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>05 / The Blueprint</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-6">
          THE BUSINESS
          <br />
          <span className="text-[var(--accent)]">BLUEPRINT</span>
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">
          We don't just build apps -- we build businesses.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {[
            {
              title: "Content Systems",
              desc: "Hook frameworks, retention strategies, audience growth playbooks",
            },
            {
              title: "Marketing & Funnels",
              desc: "Lead flow, audience ranking, customer lens framework",
            },
            {
              title: "Offer Architecture",
              desc: "DIY to DWY to DFY stacking, sequential skimming, pricing",
            },
            {
              title: "Launch Plans",
              desc: "Minimal launch to full deploy, soft launch to scale",
            },
            {
              title: "Operations",
              desc: "Sales blueprints, admin systems, financial operating models",
            },
            {
              title: "Community",
              desc: "B2C + B2B content strategy, conversion content, social proof",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/[0.06] p-8 bg-white/[0.02] card-hover"
            >
              <div className="accent-line mb-5" />
              <h3 className="font-display text-lg mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-sm font-mono mt-8 text-center">
          Every framework battle-tested. Documented in Figma. Ready to deploy.
        </p>
      </div>
    </section>
  )
}

/* ─── THE PARTNERSHIP ──────────────────────────────────── */

function Partnership() {
  return (
    <section className="py-24 sm:py-32 px-6" id="partnership">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>06 / The Partnership</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-16">
          WHY THIS
          <br />
          <span className="text-[var(--accent)]">WORKS</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-1">
          <div className="border border-white/[0.06] p-8 sm:p-12 bg-white/[0.02]">
            <div className="label-badge mb-6">Piza.Global</div>
            <h3 className="font-display text-3xl mb-2">Stephanie Piza</h3>
            <p className="text-white/40 text-sm mb-6">Los Angeles</p>
            <div className="space-y-3 text-white/60 text-sm leading-relaxed">
              <p>15+ years Hollywood x digital</p>
              <p>First Latina dealmaker in new media</p>
              <p>Jay Versace, JC Caylen, Kendrick Sampson</p>
              <p className="italic text-white/80">
                "Representation 2.0" -- creators as media cos
              </p>
              <p>Six-figure global partnerships</p>
            </div>
          </div>
          <div className="border border-[var(--accent)]/20 p-8 sm:p-12 bg-[var(--accent)]/[0.03]">
            <div className="label-badge mb-6">Bearified</div>
            <h3 className="font-display text-3xl mb-2">Alex Alaniz</h3>
            <p className="text-white/40 text-sm mb-6">AI Infrastructure</p>
            <div className="space-y-3 text-white/60 text-sm leading-relaxed">
              <p className="text-[var(--accent)]">39 autonomous AI agents in production</p>
              <p>Full-stack engineering + business systems</p>
              <p>OpenClaw + Paperclip orchestration</p>
              <p>Blockchain + fintech infrastructure</p>
              <p className="text-[var(--accent)]">44.7x ROI on AI operations</p>
            </div>
          </div>
        </div>
        <p className="text-center text-white/50 text-lg mt-12 max-w-xl mx-auto">
          Together: the only agency that can offer creators their own platform.
        </p>
      </div>
    </section>
  )
}

/* ─── FOR CREATORS ─────────────────────────────────────── */

function ForCreators() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>07 / For Creators</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-16">
          WHAT CREATORS
          <br />
          <span className="text-[var(--accent)]">GET</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-1">
          {[
            {
              title: "Custom Platform",
              desc: "A branded app built for their medium and audience. Podcast, video, publishing, or hybrid -- designed around how they create.",
            },
            {
              title: "AI-Powered Ops",
              desc: "A full AI organization running behind the scenes. Engineering, growth, operations -- managed by Bearified, powered by OpenClaw + Paperclip.",
            },
            {
              title: "Own Their Data + Money",
              desc: "They own the users, the analytics, the revenue. Blockchain-enabled payments let creators become their own bank -- no middlemen.",
            },
            {
              title: "Managed Service",
              desc: "We handle the tech, the maintenance, the scaling. They focus on what they do best -- create. We run the machine.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/[0.06] p-8 sm:p-10 bg-white/[0.02] card-hover"
            >
              <div className="accent-line mb-5" />
              <h3 className="font-display text-2xl mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 border border-white/[0.06] p-6 bg-white/[0.02]">
          <p className="text-white/80 font-medium text-lg">
            They stay the face. We run the machine.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── FOR PIZA.GLOBAL ──────────────────────────────────── */

function ForPiza() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>08 / For Piza.Global</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-16">
          WHAT PIZA.GLOBAL
          <br />
          <span className="text-[var(--accent)]">GETS</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-1">
          {[
            {
              title: "Competitive Moat",
              desc: "No other talent agency offers creators their own tech platform. This is a category of one.",
            },
            {
              title: "Proprietary Tools",
              desc: "AI agents, workflow automation, and custom agency software built specifically for Piza.Global operations.",
            },
            {
              title: "Premium Service Tier",
              desc: "A new high-value offering that justifies higher management fees and attracts top-tier creators.",
            },
            {
              title: "A Tech Partner",
              desc: "Not a vendor. A partner who brings engineering depth, business systems, and a shared vision for where this goes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/[0.06] p-8 sm:p-10 bg-white/[0.02] card-hover"
            >
              <div className="accent-line mb-5" />
              <h3 className="font-display text-2xl mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-sm font-mono mt-8">
          This isn't outsourcing tech. This is building a tech division.
        </p>
      </div>
    </section>
  )
}

/* ─── THE PROOF ────────────────────────────────────────── */

function Proof() {
  return (
    <section className="py-24 sm:py-32 px-6" id="proof">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>09 / The Proof</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-6">
          THE <span className="text-[var(--accent)]">PROOF</span>
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">
          Bearified runs on the same stack we deploy for creators.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mb-12">
          {[
            { value: "39", label: "AI Agents", sub: "In Production" },
            { value: "$1.4K", label: "Monthly", sub: "Operating Cost" },
            { value: "44.7x", label: "ROI", sub: "On AI Spending" },
            { value: "3.6%", label: "Cost vs", sub: "Traditional Team" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/[0.06] p-6 sm:p-8 bg-white/[0.02] text-center"
            >
              <div className="font-display text-4xl sm:text-5xl text-[var(--accent)] stat-glow mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
        <div className="border border-[var(--accent)]/20 p-8 sm:p-12 bg-[var(--accent)]/[0.03]">
          <h3 className="font-display text-2xl mb-4 text-[var(--accent)]">
            We Eat Our Own Cooking
          </h3>
          <p className="text-white/60 leading-relaxed">
            OpenClaw + Paperclip + Claude Code + Cowork -- all dogfooded
            internally. We're building fintech apps, prediction markets, and
            blockchain products on the same infrastructure we'll deploy for
            Piza.Global creators.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── THE ROADMAP ──────────────────────────────────────── */

function Roadmap() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>10 / The Roadmap</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.9] mb-16">
          THE <span className="text-[var(--accent)]">ROADMAP</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-1">
          {[
            {
              phase: "Phase 1",
              title: "Research Preview",
              when: "Now",
              items: [
                "Pilot with 2-3 Piza.Global creators",
                "Build first creator platforms",
                "Validate the model",
                "Refine the packaging",
              ],
              active: true,
            },
            {
              phase: "Phase 2",
              title: "Expand",
              when: "Q3 2026",
              items: [
                "Roll out across creator roster",
                "Build Piza.Global agency tools",
                "Develop pricing tiers",
                "Case studies + proof points",
              ],
              active: false,
            },
            {
              phase: "Phase 3",
              title: "Productize",
              when: "2027",
              items: [
                "Launch as a market offering",
                "Attract new creators to Piza.Global",
                "Scale managed service",
                "Build the category",
              ],
              active: false,
            },
          ].map((phase) => (
            <div
              key={phase.phase}
              className={`border p-8 sm:p-10 ${
                phase.active
                  ? "border-[var(--accent)]/30 bg-[var(--accent)]/[0.05]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="label-badge">{phase.phase}</span>
                {phase.active && (
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                )}
              </div>
              <h3 className="font-display text-2xl mb-1">{phase.title}</h3>
              <p className="text-white/40 text-sm mb-6">{phase.when}</p>
              <div className="space-y-3">
                {phase.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-2 w-1 h-1 rounded-full shrink-0 ${
                        phase.active ? "bg-[var(--accent)]" : "bg-white/30"
                      }`}
                    />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CLOSING ──────────────────────────────────────────── */

function Closing() {
  return (
    <section className="py-32 sm:py-48 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-6xl sm:text-8xl md:text-[10rem] leading-[0.85] mb-12">
          LET&#39;S
          <br />
          <span className="text-[var(--accent)]">BUILD.</span>
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto">
          Formalize the partnership. Pick the first pilot creators. Start
          building their platforms.
        </p>
        <div className="grid sm:grid-cols-2 gap-1 max-w-2xl mx-auto">
          <div className="border border-white/[0.06] p-8 bg-white/[0.02]">
            <p className="font-display text-xl mb-1">Alex Alaniz</p>
            <p className="text-white/40 text-sm mb-3">Bearified</p>
            <a
              href="mailto:alex@bearified.co"
              className="text-[var(--accent)] text-sm font-mono hover:underline"
            >
              alex@bearified.co
            </a>
          </div>
          <div className="border border-white/[0.06] p-8 bg-white/[0.02]">
            <p className="font-display text-xl mb-1">Stephanie Piza</p>
            <p className="text-white/40 text-sm mb-3">Piza.Global</p>
            <a
              href="mailto:stephanie@piza.global"
              className="text-[var(--accent)] text-sm font-mono hover:underline"
            >
              stephanie@piza.global
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ───────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-white/30 text-sm">
          <span className="font-display tracking-wider">PIZA.GLOBAL</span>
          <span>x</span>
          <span className="font-display tracking-wider">BEARIFIED</span>
        </div>
        <p className="text-white/20 text-xs font-mono">
          OWN YOUR PLATFORM | CONFIDENTIAL 2026
        </p>
      </div>
    </footer>
  )
}

/* ─── SHARED COMPONENTS ────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="accent-line" />
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
        {children}
      </span>
    </div>
  )
}

function Divider() {
  return <div className="divider max-w-6xl mx-auto" />
}

/* ─── ICONS (inline SVG) ───────────────────────────────── */

function MicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}
