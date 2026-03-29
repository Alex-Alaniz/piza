import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "PIZA.GLOBAL x BEARIFIED | Own Your Platform",
  description:
    "The future of creator business infrastructure. Custom platforms, AI-powered operations, and full ownership for creators. A partnership between Piza.Global and Bearified.",
  openGraph: {
    title: "PIZA.GLOBAL x BEARIFIED | Own Your Platform",
    description:
      "The future of creator business infrastructure. 39 AI agents. Custom platforms for creators.",
    type: "website",
    url: "https://pitch.bearified.co",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${plexSans.variable} ${plexMono.variable} ${bebas.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
