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
                Pelosi, and António Guterres), and on national press.
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

              <p className="animate-fade-in-up animation-delay-1200 opacity-0 text-xl font-medium text-green-700">I turned 19 this summer. Follow along on my last year as a teenager.</p>
              
              {/* Social Links */}
              <div className="flex items-center gap-6 pt-8 animate-fade-in-up animation-delay-1300 opacity-0">
                <a
                  href="https://www.linkedin.com/in/danica-sun-72a8b522a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 hover:text-[#82B590] transition-colors duration-300 p-3 hover:bg-green-50 rounded-full"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:danisun@stanford.edu"
                  className="text-green-800 hover:text-[#82B590] transition-colors duration-300 p-3 hover:bg-green-50 rounded-full"
                  aria-label="Email Danica"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.364V5.457c0-.904.732-1.636 1.636-1.636h.727L12 13.64 23.273 3.82h.727c.904 0 1.636.732 1.636 1.636z"/>
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
