import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={true} />

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row items-end gap-12 max-w-7xl mx-auto">
          {/* Text content */}
          <div className="flex-1 space-y-4">
            <h1 className="text-6xl mb-8 lg:text-9xl text-left font-normal">Danica Sun</h1>

            <div className="space-y-4 text-lg leading-7">
              <p>I grew up in Chicago.</p>
              <p>
                I went to a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Illinois_Mathematics_and_Science_Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  STEM magnet boarding school
                </a>
                .
              </p>
              <p>I now study Computer Science + Energy Science & Engineering at Stanford.</p>
              <p>I live and breathe climate, and have spent the past third of my life working in it.</p>
              <p>I grew up insanely shy, but climate change compelled me to find my voice.</p>
              <p>
                I{" "}
                <a
                  href="https://climateeducationforillinois.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  passed a climate education bill
                </a>{" "}
                and led{" "}
                <a
                  href="https://www.instagram.com/fridaysforfuture_chicago/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  strikes
                </a>
                , amongst other things.
              </p>
              <p>
                I've{" "}
                <a
                  href="/press"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  spoken
                </a>{" "}
                at the UN Climate Summit, at the Parliament of the World's Religions (alongside Jane Goodall, Nancy
                Pelosi, and António Guterres), and on national press.
              </p>
              <p>
                I represented Illinois at{" "}
                <a
                  href="https://www.lcoyusa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  LCOY
                </a>
                , and ended up organizing it.
              </p>
              <p>
                I attended a{" "}
                <a
                  href="https://girlcon.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  women in tech conference
                </a>{" "}
                at 13. Loved it so much I co-directed it at 16.
              </p>
              <p>
                I'm currently most excited about energy tech and{" "}
                <a
                  href="/writing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  "Secretly Climate"
                </a>{" "}
                startups.
              </p>
              <p>
                I believe whatever you study or work in, you can use those tools to tackle the climate crisis. That's
                why I'm leading{" "}
                <a
                  href="https://www.stanfordclimateweek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#82B590] hover:text-green-600 transition-colors"
                >
                  Stanford Climate Week
                </a>
                .
              </p>

              <p>I turned 19 this summer. Follow along on my last year as a teenager.</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 lg:w-96">
            <img
              src="/danica-illustration-bw.png"
              alt="Artistic black and white illustration of Danica Sun speaking into a microphone"
              className="w-full h-auto max-w-sm lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
