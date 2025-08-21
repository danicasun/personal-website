import Navigation from "@/components/navigation"

export default function Writing() {
  const articles = [
    {
      title: "Why the Most Powerful Climate Startups Don't Look Like Climate Startups",
      excerpt: "Most climate startups pitch themselves on impact. 'We'll cut emissions.' 'We'll save the planet.' The problem? That's not why most people, or companies, change their behavior. Impact never has and never will be the strongest motivator for the scale of change we need.",
      date: "August 2025",
      readTime: "5 min read",
      status: "Coming Soon"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-green-800">
      <Navigation isHomePage={false} />

      <div className="container mx-auto px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Writing</h2>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className="bg-white border border-[#82B590] rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span>{article.date}</span>
                    <span className="text-gray-400">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 leading-tight">
                    <a href="#" className="hover:text-[#82B590] transition-colors">
                      {article.title}
                    </a>
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[#82B590] font-medium text-sm">{article.status}</span>
                  <a href="#" className="text-[#82B590] hover:text-green-600 transition-colors text-sm">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Substack Subscription */}
          <div className="mt-16 p-6 bg-white border border-[#82B590] rounded-lg">
            <p className="text-gray-600 text-sm text-center">
              Subscribe to my newsletter on{" "}
              <a
                href="https://substack.com/@danicasun/notes?utm_campaign=profile&utm_medium=profile-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#82B590] hover:text-green-600 transition-colors"
              >
                Substack
              </a>{" "}
              for updates as I explore the intersections of climate, technology, and startups.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
