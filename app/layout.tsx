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
  title: "PIZA.GLOBAL | Talent Management",
  description:
    "PIZA is a talent management company founded by Stephanie Piza — 15+ years at the intersection of Hollywood and digital. Management, Production, Branding, and Strategy for the next generation of talent.",
  openGraph: {
    title: "PIZA.GLOBAL | Talent Management",
    description:
      "Management, Production, Branding, and Strategy for the next generation of talent. Founded by Stephanie Piza.",
    type: "website",
    url: "https://piza.global",
    siteName: "PIZA.GLOBAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIZA.GLOBAL | Talent Management",
    description: "Management, Production, Branding, and Strategy for the next generation of talent.",
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
