import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={true} />

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-6xl mb-8 lg:text-9xl text-left font-light animate-fade-in-up">
              Danica Sun
            </h1>

            <div className="space-y-5 text-lg leading-8">
              <p className="animate-fade-in-up animation-delay-100 opacity-0">I grew up in Chicago.</p>
              <p className="animate-fade-in-up animation-delay-200 opacity-0">
                I went to a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Illinois_Mathematics_and_Science_Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  STEM magnet boarding school
                </a>
                .
              </p>
              <p className="animate-fade-in-up animation-delay-300 opacity-0">I now study Computer Science + Energy Science &amp; Engineering at Stanford.</p>
              <p className="animate-fade-in-up animation-delay-400 opacity-0">I live and breathe climate, and have spent the past third of my life working in it.</p>
              <p className="animate-fade-in-up animation-delay-500 opacity-0">I grew up insanely shy, but climate change compelled me to find my voice.</p>
              <p className="animate-fade-in-up animation-delay-600 opacity-0">
                I{" "}
                <a
                  href="https://climateeducationforillinois.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  passed a climate education bill
                </a>{" "}
                and led{" "}
                <a
                  href="https://www.instagram.com/fridaysforfuture_chicago/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  strikes
                </a>
                , amongst other things.
              </p>
              <p className="animate-fade-in-up animation-delay-700 opacity-0">
                I&apos;ve{" "}
                <a
                  href="/press"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  spoken
                </a>{" "}
                at the UN Climate Summit, at the Parliament of the World&apos;s Religions (alongside Jane Goodall, Nancy
                Pelosi, etc.), and on national press.
              </p>
              <p className="animate-fade-in-up animation-delay-800 opacity-0">
                I represented Illinois at{" "}
                <a
                  href="https://www.lcoyusa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  LCOY
                </a>
                , and ended up organizing it.
              </p>
              <p className="animate-fade-in-up animation-delay-900 opacity-0">
                I attended a{" "}
                <a
                  href="https://girlcon.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  women in tech conference
                </a>{" "}
                at 13. Loved it so much I co-directed it at 16.
              </p>
              <p className="animate-fade-in-up animation-delay-1000 opacity-0">
                I&apos;m currently most excited about energy tech and{" "}
                <a
                  href="/writing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  &quot;Secretly Climate&quot;
                </a>{" "}
                startups.
              </p>
              <p className="animate-fade-in-up animation-delay-1100 opacity-0">
                I believe whatever you study or work in, you can use those tools to tackle the climate crisis. That&apos;s
                why I&apos;m leading{" "}
                <a
                  href="https://www.stanfordclimateweek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600"
                >
                  Stanford Climate Week
                </a>
                .
              </p>
              <p className="animate-fade-in-up animation-delay-1150 opacity-0">
                For the past six months, I was the only hire at a clean energy and infrastructure startup, building out the product as a full-stack engineer.
              </p>
              <p className="animate-fade-in-up animation-delay-1200 opacity-0">
                I sat in the front seat with the founders—through pivots, a seed raise, and countless carpools from SF to Stanford.
              </p>
              <p className="animate-fade-in-up animation-delay-1250 opacity-0">
                Now, I&apos;m helping Stanford Research Computing develop an optimization framework to cut the energy footprint of their data center compute operations.
              </p>

              <p className="animate-fade-in-up animation-delay-1300 opacity-0 text-xl font-medium text-green-700">I turned 19 this summer. Follow along on my last year as a teenager.</p>
              
              {/* Social Links */}
              <div className="flex items-center gap-6 pt-8 animate-fade-in-up animation-delay-1350 opacity-0">
                <a
                  href="https://www.linkedin.com/in/danica-sun-72a8b522a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 hover:text-[#82B590] transition-colors duration-300 p-2 hover:bg-green-50 rounded-full"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a
                  href="mailto:danisun@stanford.edu"
                  className="text-green-800 hover:text-[#82B590] transition-colors duration-300 p-2 hover:bg-green-50 rounded-full"
                  aria-label="Email Danica"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M3 8l7.89 4.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
