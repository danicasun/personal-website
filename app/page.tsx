import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={true} />

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row items-end gap-16 max-w-7xl mx-auto">
          {/* Text content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-6xl mb-8 lg:text-9xl text-left font-light animate-fade-in-up">
              Danica Sun
            </h1>

            <div className="space-y-5 text-lg leading-8 max-w-4xl">
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
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 lg:w-96 animate-fade-in-left animation-delay-500 opacity-0">
            <div className="relative group">
              <img
                src="/danica-illustration-bw.png"
                alt="Artistic black and white illustration of Danica Sun speaking into a microphone"
                className="w-full h-auto max-w-sm lg:max-w-none transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
