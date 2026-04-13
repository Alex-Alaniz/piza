import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PIZA.GLOBAL x BEARIFIED | Own Your Platform",
  description:
    "The future of creator business infrastructure. Custom platforms, AI-powered operations, and full ownership for creators. A partnership between Piza.Global and Bearified.",
  openGraph: {
    title: "PIZA.GLOBAL x BEARIFIED | Own Your Platform",
    description:
      "The future of creator business infrastructure. 39 AI agents. Custom platforms for creators.",
    type: "website",
    siteName: "Piza.Global x Bearified",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIZA.GLOBAL x BEARIFIED | Own Your Platform",
    description: "The future of creator business infrastructure.",
  },
}

export default function PitchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
