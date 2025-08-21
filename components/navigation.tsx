"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Linkedin } from "lucide-react"

interface NavigationProps {
  isHomePage?: boolean
}

export default function Navigation({ isHomePage = false }: NavigationProps) {
  const pathname = usePathname()

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
    { name: "Press", href: "/press" },
  ]

  if (isHomePage) {
    // Home page navigation - tabs in top right corner
    return (
      <nav className="absolute top-8 right-8 z-10">
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-green-800 hover:text-[#82B590] transition-colors duration-300 text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  // Other pages navigation - header without border
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-[#82B590]/20">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Danica Sun title with social icons */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-green-800 hover:text-[#82B590] transition-all duration-500 ease-in-out">
              <h1 className="text-2xl font-light transform transition-all duration-500 ease-in-out hover:scale-105">
                Danica Sun
              </h1>
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://www.linkedin.com/in/danica-sun-72a8b522a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 hover:text-[#82B590] transition-colors duration-300 p-2 hover:bg-green-50 rounded-full"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:danisun@stanford.edu"
                className="text-green-800 hover:text-[#82B590] transition-colors duration-300 p-2 hover:bg-green-50 rounded-full"
                aria-label="Email Danica"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Navigation tabs */}
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 text-lg font-medium px-3 py-2 rounded-lg ${
                  pathname === item.href 
                    ? "text-[#82B590] bg-green-50" 
                    : "text-green-800 hover:text-[#82B590] hover:bg-green-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
