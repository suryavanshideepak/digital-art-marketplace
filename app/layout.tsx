import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArtVault - Digital Art Marketplace",
  description:
    "Discover and purchase unique digital artworks, illustrations, and design assets from talented artists worldwide.",
  keywords: "digital art, marketplace, illustrations, design assets, NFT, creative",
  authors: [{ name: "ArtVault Team" }],
  openGraph: {
    title: "ArtVault - Digital Art Marketplace",
    description: "Discover and purchase unique digital artworks from talented artists worldwide.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
