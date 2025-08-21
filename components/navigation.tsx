"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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
              className="text-green-800 hover:text-[#82B590] transition-colors duration-300 text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  // Other pages navigation - smaller header with tabs
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Smaller Danica Sun title with smooth animation */}
          <Link href="/" className="text-green-800 hover:text-[#82B590] transition-all duration-500 ease-in-out">
            <h1 className="text-2xl font-light transform transition-all duration-500 ease-in-out hover:scale-105">
              Danica Sun
            </h1>
          </Link>

          {/* Right side - Navigation tabs */}
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 text-lg ${
                  pathname === item.href ? "text-[#82B590]" : "text-green-800 hover:text-[#82B590]"
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
