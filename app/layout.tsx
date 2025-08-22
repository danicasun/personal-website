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
  description: "Climate activist, Stanford student, and energy tech entrepreneur. Leading Stanford Climate Week, working on climate tech and energy tech startups, and part of the female hacker house movement in Silicon Valley.",
  keywords: [
    "Danica Sun",
    "climate activist",
    "Stanford student",
    "environmental justice",
    "climate tech",
    "energy tech",
    "climate tech startups",
    "energy tech startups",
    "female hacker house",
    "Silicon Valley",
    "FoundHer House",
    "Stanford ASES",
    "Stanford Climate Week",
    "energy science",
    "computer science",
    "climate education",
    "youth leadership",
    "COP28",
    "UN Climate Summit",
    "climate entrepreneurship",
    "sustainable technology",
    "green tech",
    "renewable energy",
    "grid infrastructure",
    "energy storage",
    "carbon reduction",
    "environmental policy",
    "climate policy",
    "women in tech",
    "women in climate",
    "climate innovation",
    "energy innovation",
    "startup ecosystem",
    "venture capital",
    "climate investment",
    "energy investment"
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
    title: "Danica Sun - CS + Energy + Startups at Stanford",
    description: "Climate activist, Stanford student, and climate tech entrepreneur. Leading Stanford Climate Week, working on energy tech startups, and part of the female hacker house movement in Silicon Valley. Expert in climate innovation and sustainable technology.",
    images: [
      {
        url: "/d-logo.png",
        width: 512,
        height: 512,
        alt: "Danica Sun - CS + Energy + Startups at Stanford",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Danica Sun - CS + Energy + Startups at Stanford",
    description: "Climate activist, Stanford student, and climate tech entrepreneur. Leading Stanford Climate Week, working on energy tech startups, and part of the female hacker house movement in Silicon Valley.",
    images: ["/d-logo.png"],
    creator: "@danicasun_",
  },
  icons: {
    icon: [
      { url: '/d-logo.png?v=3', type: 'image/png' },
      { url: '/d-logo.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/d-logo.png?v=3', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/d-logo.png?v=3',
    apple: [
      { url: '/d-logo.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: "6QKKUFznL0XGUi52RVhPEHyiI8gru_ygVvIGXnj7NsA",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/d-logo.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/d-logo.png?v=3" />
        <link rel="shortcut icon" href="/d-logo.png?v=3" />
        <link rel="apple-touch-icon" href="/d-logo.png?v=3" />
        
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
              "description": "Climate activist, Stanford student, and climate tech entrepreneur. Leading Stanford Climate Week, working on energy tech startups, and part of the female hacker house movement in Silicon Valley.",
              "jobTitle": "CS + Energy + Startups at Stanford",
              "alumniOf": {
                "@type": "Organization",
                "name": "Stanford University"
              },
              "affiliation": [
                {
                  "@type": "Organization",
                  "name": "Stanford Climate Week",
                  "role": "Leader"
                },
                {
                  "@type": "Organization",
                  "name": "Stanford ASES",
                  "role": "Member"
                },
                {
                  "@type": "Organization",
                  "name": "FoundHer House",
                  "role": "Resident",
                  "description": "Female hacker house in Silicon Valley"
                }
              ],
              "knowsAbout": [
                "Climate Change",
                "Environmental Justice",
                "Energy Science",
                "Computer Science",
                "Climate Tech",
                "Energy Tech",
                "Climate Tech Startups",
                "Energy Tech Startups",
                "Sustainable Technology",
                "Green Tech",
                "Renewable Energy",
                "Grid Infrastructure",
                "Energy Storage",
                "Carbon Reduction",
                "Climate Policy",
                "Environmental Policy",
                "Climate Innovation",
                "Energy Innovation",
                "Startup Ecosystem",
                "Venture Capital",
                "Climate Investment",
                "Energy Investment",
                "Youth Leadership",
                "Women in Tech",
                "Women in Climate",
                "Silicon Valley",
                "Hacker House Movement"
              ],
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Climate Activist",
                  "description": "Leading climate education and policy initiatives"
                },
                {
                  "@type": "Occupation",
                  "name": "Climate Tech Entrepreneur",
                  "description": "Working on climate and energy tech startups"
                },
                {
                  "@type": "Occupation",
                  "name": "Student",
                  "description": "Computer Science + Energy Science & Engineering at Stanford"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/in/danica-sun-72a8b522a/"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Insitu Energy",
                  "role": "Full Stack Engineer"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
