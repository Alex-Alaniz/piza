import Link from "next/link"

const options = [
  {
    href: "/options/a",
    title: "Option A — Classic",
    desc: "Clean hero, structured pillars grid, traditional agency layout. Confident and timeless.",
  },
  {
    href: "/options/b",
    title: "Option B — Editorial",
    desc: "Full-bleed hero image, magazine-style pacing, dramatic pull quote. Cinematic.",
  },
  {
    href: "/options/c",
    title: "Option C — Minimal",
    desc: "Single screen — no scrolling. Everything visible at once. A luxury digital card.",
  },
  {
    href: "/options/d",
    title: "Option D — Bold Grid",
    desc: "Modern bento-grid layout. Geometric, modular, everything in one visual system.",
  },
]

export default function OptionsPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)] px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl mb-3">PIZA.GLOBAL</h1>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/35 mb-4">
          Website Direction — Pick Your Favorite
        </p>
        <p className="text-[oklch(0.95_0_0)]/40 text-sm leading-relaxed mb-16 max-w-lg">
          Four directions for the PIZA website. Each uses the same content — only the layout and
          feel differ. Logo and hero image will be swapped in after a direction is chosen.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {options.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="group border border-[oklch(0.22_0_0)] p-8 hover:border-[oklch(0.6_0.25_25)] transition-colors duration-300"
            >
              <h2 className="font-display text-2xl mb-3 group-hover:text-[oklch(0.6_0.25_25)] transition-colors">
                {o.title}
              </h2>
              <p className="text-[oklch(0.95_0_0)]/35 text-sm leading-relaxed">{o.desc}</p>
              <span className="inline-block mt-6 font-mono text-[9px] tracking-[0.25em] uppercase text-[oklch(0.6_0.25_25)]/50 group-hover:text-[oklch(0.6_0.25_25)] transition-colors">
                Preview →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[oklch(0.15_0_0)]">
          <p className="font-mono text-[9px] tracking-[0.2em] text-[oklch(0.95_0_0)]/20 uppercase">
            Assets pending: Red PIZA logo (Google Drive) · Cigar hero image (WhatsApp)
          </p>
        </div>
      </div>
    </div>
  )
}
