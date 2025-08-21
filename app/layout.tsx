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
  keywords: [
    "Danica Sun",
    "climate activist",
    "Stanford student",
    "environmental justice",
    "climate tech",
    "energy science",
    "computer science",
    "climate education",
    "youth leadership",
    "COP28",
    "UN Climate Summit"
  ],
  authors: [{ name: "Danica Sun" }],
  creator: "Danica Sun",
  publisher: "Danica Sun",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.danicasun.com",
    siteName: "Danica Sun",
    title: "Danica Sun - Climate Activist & Stanford Student",
    description: "Climate activist, Stanford student, and advocate for environmental justice. Leading Stanford Climate Week and working on climate tech solutions.",
    images: [
      {
        url: "/d-logo.png",
        width: 512,
        height: 512,
        alt: "Danica Sun - Dark green D logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Danica Sun - Climate Activist & Stanford Student",
    description: "Climate activist, Stanford student, and advocate for environmental justice. Leading Stanford Climate Week and working on climate tech solutions.",
    images: ["/d-logo.png"],
    creator: "@danicasun",
  },
  icons: {
    icon: [
      { url: '/d-logo.png?v=2', type: 'image/png' },
      { url: '/d-logo.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/d-logo.png?v=2', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/d-logo.png?v=2',
    apple: [
      { url: '/d-logo.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual Google Search Console verification code
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
        <link rel="icon" type="image/png" sizes="32x32" href="/d-logo.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/d-logo.png?v=2" />
        <link rel="shortcut icon" href="/d-logo.png?v=2" />
        <link rel="apple-touch-icon" href="/d-logo.png?v=2" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Danica Sun",
              "url": "https://www.danicasun.com",
              "image": "https://www.danicasun.com/d-logo.png",
              "description": "Climate activist, Stanford student, and advocate for environmental justice",
              "jobTitle": "Climate Activist & Student",
              "alumniOf": {
                "@type": "Organization",
                "name": "Stanford University"
              },
              "knowsAbout": [
                "Climate Change",
                "Environmental Justice",
                "Energy Science",
                "Computer Science",
                "Climate Tech",
                "Youth Leadership"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/danica-sun-72a8b522a/"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
