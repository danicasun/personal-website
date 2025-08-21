import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Danica Sun",
  description: "Climate activist, Stanford student, and advocate for environmental justice",
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/d-logo.png', type: 'image/png' },
      { url: '/d-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/d-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/d-logo.png',
    apple: [
      { url: '/d-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/d-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/d-logo.png" />
        <link rel="shortcut icon" href="/d-logo.png" />
        <link rel="apple-touch-icon" href="/d-logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
