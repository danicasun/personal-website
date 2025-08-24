import Navigation from "@/components/navigation"

export default function Press() {
  const pressItems = [
    {
      title: "8 Women, 4 Bedrooms and 1 Cause: Breaking A.I.’s Glass Ceiling",
      source: "The New York Times",
      date: "August 2025",
      description: "Featured on the front page of New York Times Technology in a spotlight about the growing movement of female hacker houses in Silicon Valley, highlighting the AI and tech innovation happening at FoundHer House.",
      link: "https://www.nytimes.com/2025/08/23/business/ai-female-hackers-foundher-house.html?unlocked_article_code=1.gU8.MhpM.D_RQ1EXJiIBn&smid=nytcore-ios-share&referringSource=articleShare",
      linkText: "Read article"
    },
    {
      title: "FoundHer House is making a splash in Silicon Valley",
      source: "USA Today",
      date: "August 2025",
      description: "Featured story on the front page of USA Today in an article on women in tech and Silicon Valley hacker house communities.",
      link: "https://www.usatoday.com/story/money/2025/08/20/silicon-valley-tech-women-hacker-houses/85521246007/",
      linkText: "Read article"
    },
    {
      title: "FOX 32 Voices of Change: Danica Sun",
      source: "FOX 32 Chicago",
      date: "December 2023",
      description: "Television profile on my youth leadership initiatives and role at COP28, the annual United Nations climate summit.",
      link: "https://www.fox32chicago.com/video/1377345",
      linkText: "Watch video"
    },
    {
      title: "Chicago high schooler among 6 area activists who will give young people a voice at global climate summit in Dubai",
      source: "Chicago Tribune",
      date: "December 2023",
      description: "Featured on my work as a youth delegate at COP28, speaking on panels, engaging in roundtable discussions, and more.",
      link: "https://www.chicagotribune.com/2023/12/04/chicago-high-schooler-among-6-area-activists-who-will-give-young-people-a-voice-at-global-climate-summit-in-dubai/",
      linkText: "Read article"
    },
    {
      title: "Youth Climate Activists Scored A Major Win In Montana. Could Illinois Be Next?",
      source: "NPR Chicago Radio",
      date: "August 2023",
      description: "Held v. Montana is the first lawsuit of its kind to go to trial, with plaintiffs ranging from age 5 to age 22. It’s also a landmark ruling: climate change must now be considered when approving or renewing future fossil fuel projects in the state. Reset gets reaction from Danica Sun and Natasha Bahtia, youth climate activists in Illinois, and what they’re working on here.",
      link: "https://open.spotify.com/episode/0FpQApIHpaZBJnXujnRnZt?si=wXEXN_IaSdu4VselzMPeNw",
      linkText: "Listen on Spotify"
    },
    {
      title: "Danica Sun Addresses the Climate Action Assembly",
      source: "Parliament of the World's Religions",
      date: "August 2023",
      description: "Keynote address at the Parliament of the World's Religions Opening Climate Action Assembly in Chicago.",
      link: "https://parliamentofreligions.org/2023-chicago/danica-sun-addresses-the-climate-action-assembly/",
      linkText: "Read article"
    },
    {
      title: "Chicago's youth takes part in global climate strike targeting fossil fuel funding",
      source: "Chicago Tribune",
      date: "March 2023",
      description: "Coverage of a climate strike and advocacy against fossil fuel funding I led with Fridays For Future Chicago.",
      link: "https://www.chicagotribune.com/2023/03/03/chicagos-youth-takes-part-in-global-climate-strike-targeting-fossil-fuel-funding/",
      linkText: "Read article"
    },
    {
      title: "Chicago youth protest against climate change in downtown rally",
      source: "Chicago Tribune",
      date: "September 2023",
      description: "Featured in coverage of a downtown Chicago climate change rally I led with Fridays For Future Chicago.",
      link: "https://www.chicagotribune.com/2023/09/15/chicago-youth-protest-against-climate-change-in-downtown-rally/",
      linkText: "Read article"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={false} />

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-9xl font-light mb-16">Press</h1>

          {/* Press Items */}
          <div className="space-y-8">
            {pressItems.map((item) => (
              <div
                key={item.title}
                className="border-b border-green-100 pb-8 last:border-b-0"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <span>{item.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[#82B590] font-medium">{item.source}</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-4 leading-tight text-green-800">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#82B590] transition-colors duration-300"
                    >
                      {item.title}
                    </a>
                  </h3>
                </div>

                <p className="text-lg leading-8 text-gray-700 mb-6">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#82B590] hover:text-green-600 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-600 text-lg"
                >
                  {item.linkText} →
                </a>
              </div>
            ))}

            {/* Additional Coverage Note */}
            <div className="pt-8 border-t border-green-100">
              <p className="text-gray-600 text-sm italic text-center">
                Not Linked: NBC Chicago News Segment, NPR Chicago Radio Interviews, the Daily Northwestern Article, the
                Chicago Sun-Times Article, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
