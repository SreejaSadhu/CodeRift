import type React from "react"
import type { Metadata } from "next"
import { Manrope, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// ... existing imports
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fontSans = Manrope({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Syne({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Code Rift",
  description:
    "A 2-day creativity & AI innovation event at CVR College of Engineering",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  )
}
