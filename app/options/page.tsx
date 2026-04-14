import Link from "next/link"

const options = [
  {
    href: "/options/a",
    title: "Option A — The Velvet Rope",
    desc: "Private club energy. \"By introduction only.\" Makes you feel like you're peering behind a curtain you weren't supposed to see.",
  },
  {
    href: "/options/b",
    title: "Option B — The Feature",
    desc: "Hollywood Reporter cover story energy. An editorial that reads like a profile on the most important company you haven't heard of yet.",
  },
  {
    href: "/options/c",
    title: "Option C — The Machine",
    desc: "Empire-builder energy. Shows PIZA as a system that turns creators into businesses. Aggressive, confident, inevitable.",
  },
]

export default function OptionsPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)] px-8 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl mb-3">PIZA.GLOBAL</h1>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[oklch(0.95_0_0)]/35 mb-4">
          Website Direction — Pick Your Favorite
        </p>
        <p className="text-[oklch(0.95_0_0)]/40 text-sm leading-relaxed mb-16 max-w-lg">
          Three directions. Same content, different energy. Each is designed to make people
          feel like they&apos;re on the outside looking in.
        </p>

        <div className="flex flex-col gap-4">
          {options.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="group border border-[oklch(0.22_0_0)] p-8 hover:border-[oklch(0.6_0.25_25)] transition-colors duration-300"
            >
              <h2 className="font-display text-2xl mb-3 group-hover:text-[oklch(0.6_0.25_25)] transition-colors">
                {o.title}
              </h2>
              <p className="text-[oklch(0.95_0_0)]/40 text-sm leading-relaxed">{o.desc}</p>
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
