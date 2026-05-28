import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = new URL("https://piza.bearified.co")
const siteTitle = "PIZA.GLOBAL | Ownership-First Talent Management"
const siteDescription =
  "PIZA is a next-generation representation company redefining the creator economy through ownership-first strategy, operational excellence, and cultural equity."
const socialImage = "/piza/piza-og.png"

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
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  applicationName: "PIZA.GLOBAL",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "/",
    siteName: "PIZA.GLOBAL",
    locale: "en_US",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "PIZA.GLOBAL ownership-first talent management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/piza/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/piza/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/piza/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
